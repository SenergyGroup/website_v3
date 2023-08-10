var foodLocations = [
    { name: 'Apostolic Pentecostal Church Food Pantry' , type: 'Pantry' , lat: 42.4947867880001, lon: -92.386538898, address: '1645 Downing Ave, Waterloo, IA 50701', phone: '319.231.0856', hours: '3rd Sunday of the month 4:30pm-5:30pm', day: 'Sunday', startTime: '16:30', endTime: '17:30'},
    
    { name: 'Cedar Valley Food Pantry' , type: 'Pantry' , lat: 42.492923062, lon: -92.322316959, address: '1605 Lafayette St, Waterloo, IA 50703', phone: '319.235.0507', hours: 'Mon-Thurs 9:00am-3:00pm, Fri 9:00am-12:00pm, Fri produce pantry only', day: 'Monday, Tuesday, Wednesday, Thursday, Friday', startTime: '09:00', endTime: '15:00' },

    
    { name: 'Christian Fellowship Baptist Church Pantry', type: 'Pantry', lat: 42.4890896690001, lon: -92.348148749, address: '930 W 4th St, Waterloo, IA 50702', phone: '319.232.2018', hours: '3rd Wednesday of each month 5:00pm-6:30pm or as needed', day: 'Wednesday', startTime: '17:00', endTime: '18:30' },

    { name: 'Countryside Vineyard Food Pantry', type: 'Pantry', lat: 42.4784033760001, lon: -92.291584808, address: '3467 Lafayette Rd, Evansdale, IA 50707', phone: '319.234.4879', hours: 'Every other Saturday 10:00am-11:30am', day: 'Saturday', startTime: '10:00', endTime: '11:30' },
    
    { name: 'Hawkeye Red Tail Food Pantry', type: 'Pantry', lat: 42.42851383, lon: -92.325744092, address: '1501 E Orange Rd, Waterloo, IA 50701', phone: '319.296.2320', hours: 'Mon-Fri 8:30am-4:30pm', day: 'Monday,Tuesday,Wednesday,Thursday,Friday', startTime: '08:30', endTime: '16:30' },
    
    { name: 'Matthew 25 Food Pantry', type: 'Pantry', lat: 42.5322101850001, lon: -92.445492077, address: '705 Main St, Cedar Falls, IA 50613', phone: '319.266.3523', hours: 'Mon & Thurs 10:00am-2:00pm by appointment, call 319.266.3523', day: 'Monday,Thursday', startTime: '10:00', endTime: '14:00' },
    
    { name: 'Nazareth Evangelical Lutheran Church Pantry', type: 'Pantry', lat: 42.5131054140001, lon: -92.44732656, address: '7401 University Ave, Cedar Falls, IA 50613', phone: '319.266.7589 ext.111', hours: 'Mon-Thurs 2:00pm-3:20pm', day: 'Monday,Tuesday,Wednesday,Thursday', startTime: '14:00', endTime: '15:20' },
    
    { name: 'North Cedar Nazarene Food Pantry' , type: 'Pantry' , lat: 42.5624746170001, lon: -92.460174517, address: '1210 W Lone Tree Rd, Cedar Falls, IA 50613', phone: '319.239.9136', hours: 'Tuesdays 12:00pm-4:00pm', day: 'Tuesday', startTime: '12:00', endTime: '16:00' },
    
    { name: 'One City United Pantry' , type: 'Pantry' , lat: 42.4983604290001, lon: -92.316300105, address: '907 Independence Ave, Waterloo, IA 50703', phone: '319.334.0263', hours: 'Mon-Fri 9:00am-1:00pm', day: 'Monday, Tuesday, Wednesday, Thursday, Friday', startTime: '09:00', endTime: '13:00' },

    { name: 'Saint Vincent de Paul Society Pantry' , type: 'Pantry' , lat: 42.5087616870001, lon: -92.345019228, address: '320 Broadway St, Waterloo, IA 50703', phone: '319.232.3366', hours: 'Mon-Fri 9:00am-12:00pm', day: 'Monday, Tuesday, Wednesday, Thursday, Friday', startTime: '09:00', endTime: '12:00' },

    { name: 'Salvation Army Pantry' , type: 'Pantry' , lat: 42.504265108, lon: -92.338639095, address: '89 Franklin St, Waterloo, IA 50703', phone: '319.235.9358', hours: 'Tues & Thurs 11:30am-12:30pm Perishable Goods Giveaway', day: 'Tuesday, Thursday', startTime: '11:30', endTime: '12:30' },

    { name: 'St. Luke’s Neighbor to Neighbor Food Pantry' , type: 'Pantry' , lat: 42.5156942930001, lon: -92.431316494, address: '2410 Melrose Dr, Cedar Falls, IA 50613', phone: '319.577.8520', hours: '2nd & 4th Wednesdays 4:30pm-5:30pm', day: 'Wednesday', startTime: '16:30', endTime: '17:30' },

    { name: 'St. Timothy UMC Food Closet' , type: 'Pantry' , lat: 42.508701715, lon: -92.408723874, address: '3220 Terrace Dr, Cedar Falls, IA 50613', phone: '319.235.6269', hours: 'Mon-Thurs 10:00am-2:00pm by appointment', day: 'Monday, Tuesday, Wednesday, Thursday', startTime: '10:00', endTime: '14:00' },

    { name: 'Trinity American Lutheran Church Pantry' , type: 'Pantry' , lat: 42.491909584, lon: -92.343550942, address: '605 W 4th St., Waterloo, IA 50702', phone: '319.266.0464', hours: '3rd Friday of the month by appointment 1:00pm-4:00pm', day: 'Friday', startTime: '13:00', endTime: '16:00' },
    
    { name: 'Union Missionary Food Pantry' , type: 'Pantry' , lat: 42.5054766170001, lon: -92.326484167, address: '209 Jackson St, Waterloo, IA 50703', phone: '319.235.1213', hours: 'Tues & Thurs 11:00am-2:00pm', day: 'Tuesday, Thursday', startTime: '11:00', endTime: '14:00' },

    { name: 'Waterloo First United Methodist Church Nook' , type: 'Pantry' , lat: 42.491082657, lon: -92.344186029, address: '614 Randolph St., Waterloo, IA 50702', phone: '319.235.7088', hours: '3rd Wednesday of every month 5:00pm-6:00pm', day: 'Wednesday', startTime: '17:00', endTime: '18:00' },

    { name: 'Westminster Presbyterian Pantry' , type: 'Pantry' , lat: 42.4789589800001, lon: -92.357098374, address: '1301 Kimball Ave, Waterloo, IA 50702', phone: '319.232.5501', hours: '1st Saturday 9:00am-11:00am & 3rd Thursday 4:30pm-6:00pm of the month', day: 'Saturday, Thursday', startTime: '09:00', endTime: '11:00' },
    
    { name: 'Cedar Valley Hospitality House (homeless only)' , type: 'Meals' , lat: 42.496992381, lon: -92.329738042, address: '1003 Mulberry St, Waterloo, IA 50703', phone: '319.234.1311', hours: 'Mon-Fri 11:30am-12:00pm', day: 'Monday, Tuesday, Wednesday, Thursday, Friday', startTime: '11:30', endTime: '12:00' },
    
    { name: 'Celebration First Assembly of God' , type: 'Meals' , lat: 42.476114411, lon: -92.386175564, address: '745 April St, Waterloo, IA 50701', phone: '319.234.7729', hours: 'Community Meal/snacks: Sunday 9:00am-9:45am', day: 'Sunday', startTime: '09:00', endTime: '09:45' },

    { name: 'Christian Fellowship Baptist Church Community Meal' , type: 'Meals' , lat: 42.4890896690001, lon: -92.348148749, address: '930 W 4th St, Waterloo, IA 50702', phone: '-', hours: '3rd Saturday of the month from 4:00pm-5:30pm', day: 'Saturday', startTime: '16:00', endTime: '17:30' },
    
    { name: 'First Baptist Church Waterloo Community Meal' , type: 'Meals' , lat: 42.4881426750001, lon: -92.352090285, address: '434 Baltimore St, Waterloo, IA 50701', phone: '319.234.1537', hours: 'Last Wednesday of the month, 5:00pm-6:00pm', day: 'Wednesday', startTime: '17:00', endTime: '18:00' },
    
    { name: 'First Presbyterian Waterloo Community Meal' , type: 'Meals' , lat: 42.501231267, lon: -92.3340382809999, address: '505 Franklin St, Waterloo, IA 50701', phone: '319.234.1537', hours: 'Every Sunday 5:00pm', day: 'Sunday', startTime: '17:00', endTime: '18:00' },
    
    { name: 'Gift of Life Heart to Hands Ministry Meals' , type: 'Meals' , lat: 42.49158613, lon: -92.321597588, address: '1651 Sycamore St, Waterloo, IA 50703', phone: '319.529.5654', hours: '2nd Sunday 1:00pm-3:00pm', day: 'Sunday', startTime: '13:00', endTime: '15:00' },
    
    { name: 'Kimball Ave United Methodist Church Meal' , type: 'Meals' , lat: 42.480145232, lon: -92.3571209309999, address: '1207 Kimball Ave, Waterloo, IA 50702', phone: '319.610.8904', hours: '4th Monday of the month, Meals served 4:30- 6:00pm, doors open at 4:00pm', day: 'Monday', startTime: '16:30', endTime: '18:00' },
    
    { name: 'Queen of Peace-Community Meal' , type: 'Meals' , lat: 42.501745627, lon: -92.3369632119999, address: '320 Mulberry, Waterloo, IA 50703', phone: '319.266.3655', hours: 'Every Tuesday 4:30pm-6:30pm', day: 'Tuesday', startTime: '16:30', endTime: '18:30' },
    
    { name: 'Salvation Army-Community Meal' , type: 'Meals' , lat: 42.504265108, lon: -92.338639095, address: '89 Franklin St, Waterloo, IA 50703', phone: '319.235.9358', hours: 'Mon, Wed & Fri 11:30am-12:30pm', day: 'Monday, Wednesday, Friday', startTime: '11:30', endTime: '12:30' },
    
    { name: 'St. Paul United Methodist Church Meal' , type: 'Meals' , lat: 42.52397519, lon: -92.340353066, address: '207 W Louise St, Waterloo, IA 50703', phone: '319.232.4790', hours: '1st Wednesday of the month 5:00pm-6:00pm', day: 'Wednesday', startTime: '17:00', endTime: '18:00' },
    
    { name: 'Trinity American Lutheran Church Meal' , type: 'Meals' , lat: 42.491909584, lon: -92.343550942, address: '605 W 4th St., Waterloo, IA 50702', phone: '-', hours: '2nd Wednesday of the month 4:30pm-6:00pm', day: 'Wednesday', startTime: '16:30', endTime: '18:00' }
];