// Create map centered at Waterloo, Iowa
var map = L.map('map').setView([42.5012, -92.34], 13);

// Add map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Function to create icon
function createIcon(type) {
    var iconClass = type === 'Pantry' ? 'fa-shopping-basket pantry-icon' : 'fa-utensils meal-icon';
    return L.divIcon({
        className: 'leaflet-div-icon',
        html: '<div style="background-color: white; border: 5px solid black; padding: 3px; display: inline-block;"><i class="fas ' + iconClass + '"></i></div>',
        iconSize: [50, 50]
    });
}


function filterMarkers() {
    var selectedDay = document.getElementById('day').value;
    //var selectedTime = document.getElementById('time').value || null;
    
    console.log("Selected day:", selectedDay);

    allMarkers.forEach(function(item) {
        console.log("Item's date:", item.date);
        if (typeof item.date !== 'string') {
            console.warn('Date is not a string for item:', item);
            return; // Skip to the next iteration
        }
        
        //var locationOpen = isOpen(selectedDay, selectedTime, item.date);
        var locationOpen = isOpen(selectedDay, item.date);
        console.log("Is location open?", locationOpen);

        if (locationOpen) {
            item.marker.addTo(map);
            item.card.style.display = 'block';
        } else {
            item.marker.remove();
            item.card.style.display = 'none';
        }
    });
    
    updatePoints();
}

function clearFilter() {
    document.getElementById('day').value = '';

    allMarkers.forEach(function(item) {
        item.marker.addTo(map);
        item.card.style.display = 'block';
    });
    
    updatePoints();
}

// function isOpen(day, time, date) {
function isOpen(day, date) {
    if (!date.toLowerCase().includes(day.toLowerCase())) return false;

    return true; // If no time specified, return all entries for the given day
}

// Function to create icon with highlight
function createIconWithHighlight(type) {
    var iconClass = type === 'Pantry' ? 'fa-shopping-basket pantry-icon selected-highlight' : 'fa-utensils meal-icon selected-highlight';
    return L.divIcon({
        className: 'leaflet-div-icon',
        html: '<i class="fas ' + iconClass + '"></i>',
        iconSize: [40, 40]
    });
}

// Store all markers in an array
var allMarkers = [];


// Creating a list for the map markers
var pantryList = document.getElementById('pantry-list');
var mealsList = document.getElementById('meals-list');


var selectedMarker = null;

foodLocations.forEach(function(location) {
   var marker = L.marker([location.lat, location.lon], { icon: createIcon(location.type), type: location.type })
      .addTo(map)
      .bindTooltip(location.name, {permanent: false})
      .bindPopup('<b>Name:</b> ' + location.name + '<br>' +
                 '<b>Type:</b> ' + location.type + '<br>' +
                 '<b>Address:</b> ' + location.address + '<br>' +
                 '<b>Phone:</b> ' + location.phone + '<br>' +
                 '<b>Hours:</b> ' + location.hours);

   var card = document.createElement('div');
   card.className = 'card';
   card.innerHTML = '<b>' + location.name + '</b><br>' +
                    '<b>Address: </b>' + location.address + '<br>' +
                    '<b>Phone: </b>' + location.phone + '<br>' +
                    '<b>Hours: </b>' + location.hours;

   card.addEventListener('click', function() {
      if (selectedMarker) {
         selectedMarker.setIcon(createIcon(selectedMarker.options.type));
      }
      selectedMarker = marker;
      marker.setIcon(createIconWithHighlight(location.type));

      map.flyTo(marker.getLatLng());
      marker.openPopup();
   });
   
   allMarkers.push({
     marker: marker,
     card: card,
     date: location.day,
     time: location.time  
   });

   // Add to the respective section (pantry or meals)
   if (location.type === 'Pantry') {
      pantryList.appendChild(card);
   } else if (location.type === 'Meals') {
      mealsList.appendChild(card);
   }
});
