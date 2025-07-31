export const facilities = [
  {
    id: 'aud-01',
    name: 'Auditorium-01',
    capacity: 1550,
    type: 'auditorium',
    rentRate: {
      peak: 295000,
      offPeak: 147500,
      halfDay: 206500,
      fullDay: 295000,
      employee: 10000,
      student: 5000,
      outsider: 20000
    },
    description: 'Main auditorium with state-of-the-art audio-visual equipment and comfortable seating for 300 guests.',
    images: [
      "/assets/audi-01.jpg",
      "https://www.gbu.ac.in/facilities/assets/images/audi-01_1.jpeg",
      "https://www.gbu.ac.in/facilities/assets/images/audi-01_1.jpeg"
    ],
    amenities: ['AC', 'Projector', 'Sound System', 'Stage Lighting', 'Green Room'],
    timeSlots: ['9:00 AM - 1:00 PM', '2:00 PM - 6:00 PM', '7:00 PM - 11:00 PM'],
    inCharge: {
      name: 'Dr. Rajesh Kumar',
      contact: '+91-9876543210',
      email: 'facilities@gbu.ac.in'
    },
    bookingGuidelines: [
      'Advance booking required at least 7 days prior to the event',
      'Security deposit of ₹5,000 must be paid at the time of booking',
      'Event setup must be completed 2 hours before the scheduled time',
      'Professional sound and lighting equipment included',
      'Catering arrangements can be made through approved vendors only'
    ],
    termsConditions: [
      'The facility must be used for the purpose mentioned in the booking',
      'Any damage to the property will be charged separately',
      'University reserves the right to cancel booking in case of emergency',
      'No smoking or alcohol consumption allowed in the premises',
      'Maximum occupancy should not exceed the specified capacity'
    ],
    cancellationPolicy: [
      'Cancellation 7+ days before event: Full refund minus processing fee',
      'Cancellation 3-6 days before: 50% refund',
      'Cancellation within 48 hours: No refund',
      'Force majeure events: Case-by-case basis',
      'Security deposit refunded within 7 working days after event'
    ],
    downloadablePdfs: {
      rateChart: '/pdfs/auditorium-rates.pdf',
      bookingRules: '/pdfs/auditorium-booking-rules.pdf',
      termsConditions: '/pdfs/auditorium-terms.pdf'
    }
  },

  {
    id: 'aud-02',
    name: 'Auditorium-02',
    capacity: 250,
    type: 'auditorium',
    rentRate: {
      peak: 12000,
      offPeak: 34500,
      halfDay: 82600,
      fullDay: 129800,
      employee: 8000,
      student: 4000,
      outsider: 16000
    },
    description: 'Secondary auditorium perfect for smaller events and presentations.',
    images: [
      "https://www.gbu.ac.in/facilities/assets/images/audi-02_1.jpeg",
      "https://www.gbu.ac.in/facilities/assets/images/audi-02_2.jpeg",
      "https://www.gbu.ac.in/facilities/assets/images/audi-02_1.jpeg"
    ],
    amenities: ['AC', 'Projector', 'Sound System', 'Stage Lighting'],
    timeSlots: ['9:00 AM - 1:00 PM', '2:00 PM - 6:00 PM', '7:00 PM - 11:00 PM'],
    inCharge: {
      name: 'Dr. Priya Singh',
      contact: '+91-9876543211',
      email: 'facilities@gbu.ac.in'
    },
    bookingGuidelines: [
      'Advance booking required minimum 5 days',
      'Security deposit of ₹3,000 required',
      'Setup time included in booking slot',
      'Basic AV equipment provided'
    ],
    termsConditions: [
      'Facility usage limited to academic and cultural events',
      'External vendors require prior approval',
      'Damage charges as per assessment',
      'Fire safety protocols must be followed'
    ],
    cancellationPolicy: [
      "Booking cancelled one month earlier: No charges",
      "Booking cancelled before 15 days: 10% of the entire booking",
      "Booking cancelled before 02 days: 15% of the entire booking",
      "Last moment cancellation (24 hrs.): 20% of the entire booking"
    ]
  },

  {
    id: 'aud-03',
    name: 'Auditorium-03',
    capacity: 450,
    type: 'auditorium',
    rentRate: {
      peak: 141600,
      offPeak: 47200,
      halfDay: 82600,
      fullDay: 141600,
      employee: 6000,
      student: 3000,
      outsider: 13000
    },
    description: 'Compact auditorium ideal for departmental events and workshops.',
    images: [
      "https://www.gbu.ac.in/facilities/assets/images/audi-03_1.jpeg",
      "https://www.gbu.ac.in/facilities/assets/images/audi-03_2.jpeg",
      "https://www.gbu.ac.in/facilities/assets/images/audi-03_1.jpeg"
    ],
    amenities: ['AC', 'Projector', 'Basic Sound System'],
    timeSlots: ['9:00 AM - 1:00 PM', '2:00 PM - 6:00 PM'],
    inCharge: {
      name: 'Prof. Amit Sharma',
      contact: '+91-9876543212',
      email: 'facilities@gbu.ac.in'
    },
    bookingGuidelines: [
      'Minimum 3 days advance booking',
      'Security deposit of ₹2,000',
      'Departmental events get priority'
    ],
    termsConditions: [
      'Academic use only',
      'No food allowed inside',
      'Cleanup responsibility of organizer'
    ],
    cancellationPolicy: [
      "Booking cancelled one month earlier: No charges",
      "Booking cancelled before 15 days: 10% of the entire booking",
      "Booking cancelled before 02 days: 15% of the entire booking",
      "Last moment cancellation (24 hrs.): 20% of the entire booking"
    ]
  },

    {
    id: 'aud-04',
    name: 'Auditorium-04',
    capacity: 100,
    type: 'auditorium',
    rentRate: { 
      peak: 118000, 
      offPeak: 29500, 
      halfDay: 76700, 
      fullDay: 118000,
      employee: 5000,
      student: 2500,
      outsider: 10000
    },
    description: 'Modern auditorium with advanced presentation facilities.',
    images: [
      "https://www.gbu.ac.in/facilities/assets/images/audi-04_3.jpeg",
      "https://www.gbu.ac.in/facilities/assets/images/audi-04_1.jpeg",
      "/assets/audi-04.jpg"
    ],
    amenities: ['AC', 'Smart Board', 'Wireless Mic', 'Recording Setup'],
    timeSlots: ['10:00 AM - 2:00 PM', '3:00 PM - 7:00 PM'],
    inCharge: {
      name: 'Dr. Sunita Yadav',
      contact: '+91-9876543213',
      email: 'facilities@gbu.ac.in'
    },
    bookingGuidelines: [
      'Online booking preferred',
      'Technical support available',
      'Recording services on request'
    ],
    termsConditions: [
      'Equipment handling by authorized personnel only',
      'Recording permission required separately',
      'Intellectual property rights respected'
    ],
     cancellationPolicy: [
      "Booking cancelled one month earlier: No charges",
"Booking cancelled before 15 days	: 10% of the entire booking",
"Booking cancelled before 02 days: 	15% of the entire booking",
"Last moment cancellation (24 hrs.): 	20% of the entire booking"
    ]
  },

  {
    id: 'aud-05',
    name: 'Auditorium-05',
    capacity: 100,
    type: 'auditorium',
    rentRate: { 
      peak: 118000, 
      offPeak: 30000, 
      halfDay: 76700, 
      fullDay: 118000,
      employee: 3500,
      student: 2000,
      outsider: 8000
    },
    description: 'Intimate auditorium perfect for seminars and small conferences.',
    images: [
       "https://www.gbu.ac.in/facilities/assets/images/audi-05_1.jpeg",
      "https://www.gbu.ac.in/facilities/assets/images/audi-05_2.jpeg",
      "https://www.gbu.ac.in/facilities/assets/images/audi-05_3.jpeg"
    ],
    amenities: ['AC', 'Projector', 'Podium', 'Microphone'],
    timeSlots: ['9:00 AM - 1:00 PM', '2:00 PM - 6:00 PM'],
    inCharge: {
      name: 'Prof. Ravi Kumar',
      contact: '+91-9876543214',
      email: 'facilities@gbu.ac.in'
    },
    bookingGuidelines: [
      'Ideal for seminars and workshops',
      'Basic AV setup included',
      'Parking for 50 vehicles'
    ],
    termsConditions: [
      'Seminar and workshop use preferred',
      'Catering allowed with approval',
      'Setup assistance available'
    ],
     cancellationPolicy: [
      "Booking cancelled one month earlier: No charges",
"Booking cancelled before 15 days	: 10% of the entire booking",
"Booking cancelled before 02 days: 	15% of the entire booking",
"Last moment cancellation (24 hrs.): 	20% of the entire booking"
    ]
  },

  // Conference Rooms
  {
    id: 'conference-hall',
    name: 'Conference Hall',
    capacity: 100,
    type: 'conference',
    rentRate: { 
      peak:  88500, 
      offPeak: 30000, 
      halfDay: 47200, 
      fullDay:  88500,
      employee: 5000,
      student: 2500,
      outsider: 10000
    },
    description: 'Executive conference hall with boardroom setup and advanced AV facilities.',
    images: [
      "/assets/audi-conference_1.jpg",
     
    ],
    amenities: ['AC', 'Conference Table', 'Projector', 'Video Conferencing', 'WiFi'],
    timeSlots: ['9:00 AM - 1:00 PM', '2:00 PM - 6:00 PM', '7:00 PM - 10:00 PM'],
    inCharge: {
      name: 'Mr. Vikash Gupta',
      contact: '+91-9876543215',
      email: 'conference@gbu.ac.in'
    },
    bookingGuidelines: [
      'Professional meetings and conferences only',
      'Video conferencing setup available',
      'Catering services can be arranged',
      'Parking for 30 vehicles'
    ],
    termsConditions: [
      'Cleaning Charges Per Day – Rs. 5,900.00 (Incl. GST)',
      'Security Money – Rs. 50,000.00 (Rs. Fifty Thousand Only) in favour of Gautam Buddha University, Greater Noida through Cheque/Demand Draft.',
      'DG Charges – In Case of Failure of Light, Rs. 5,000/- per hour will charged Separately',
      'Any other Charges as per other terms & conditions will be applicable'
    ],
     cancellationPolicy: [
      "Booking cancelled one month earlier: No charges",
"Booking cancelled before 15 days	: 10% of the entire booking",
"Booking cancelled before 02 days: 	15% of the entire booking",
"Last moment cancellation (24 hrs.): 	20% of the entire booking"
    ]
  },

  {
    id: 'convention-dining',
    name: 'Convention Center Kitchen & Dining',
    capacity: 150,
    type: 'dining',
    rentRate: { 
      peak: 15000, 
      offPeak: 12000, 
      halfDay: 47200, 
      fullDay: 88500,
      employee: 10000,
      student: 6000,
      outsider: 20000
    },
    description: 'Fully equipped commercial kitchen and dining hall for large events and conferences.',
    images: [
           "https://www.gbu.ac.in/facilities/assets/images/kitchen-convention_1.jpeg"
    ],
    amenities: ['Commercial Kitchen', 'Dining Tables', 'AC', 'Serving Area', 'Storage'],
    timeSlots: ['Breakfast: 7:00-10:00 AM', 'Lunch: 12:00-3:00 PM', 'Dinner: 7:00-10:00 PM'],
    inCharge: {
      name: 'Chef Manoj Verma',
      contact: '+91-9876543216',
      email: 'catering@gbu.ac.in'
    },
    bookingGuidelines: [
      'Complete catering service available',
      'Menu customization available',
      'Advance booking required minimum 5 days',
      'External catering allowed with permission'
    ],
    termsConditions: [
       "Cleaning Charges Per Day – Rs. 5,900.00 (Incl. GST)",
"Security Money – Rs. 50,000.00 (Rs. Fifty Thousand Only) in favour of Gautam Buddha University, Greater Noida through Cheque/Demand Draft.",
"Any other Charges as per other terms & conditions will be applicable"
    ],
    cancellationPolicy: [
      "Booking cancelled one month earlier: No charges",
"Booking cancelled before 15 days	: 10% of the entire booking",
"Booking cancelled before 02 days: 	15% of the entire booking",
"Last moment cancellation (24 hrs.): 	20% of the entire booking"
    ]
  },

  // Guest House Accommodation
  {
    id: 'guesthouse-a',
    name: 'Guest House - Category A',
    capacity: 2,
    type: 'accommodation',
    category: 'A',
    roomCount: 5,
    rentRate: { 
      peak: 3500, 
      offPeak: 2500,
      employee: 2000,
      student: 1500,
      outsider: 4000
    },
    description: 'Premium AC suite with living area, bedroom, attached bathroom, and modern amenities.',
    images: [
          "/assets/guest_house_hall_1.jpg",
      "/assets/convention_1.jpg",
      "/assets/guest_house_1.jpg"
    ],
    amenities: ['AC', 'TV', 'WiFi', 'Mini Fridge', 'Tea/Coffee Maker', 'Attached Bathroom'],
    timeSlots: ['Check-in: 2:00 PM', 'Check-out: 11:00 AM'],
    inCharge: {
      name: 'Mr. Sunil Kumar',
      contact: '+91-9876543217',
      email: 'guesthouse@gbu.ac.in'
    },
    bookingGuidelines: [
      'Advance booking recommended',
      'Valid ID proof required at check-in',
      'Room service available on request',
      'Parking facility available'
    ],
      termsConditions: [
      'GST as applicable to be paid extra.',
      'For Bulk Booking, in case of light failure, D.G. charges @ ₹5000/- per hour will be charged and Central AC facility will not be available on D.G.',
      'Security Money/Cleaning Charges & other charges etc. mentioned in other terms & Conditions will be applicable.'
    ],
      cancellationPolicy: [
      "Booking cancelled one month earlier: No charges",
"Booking cancelled before 15 days	: 10% of the entire booking",
"Booking cancelled before 02 days: 	15% of the entire booking",
"Last moment cancellation (24 hrs.): 	20% of the entire booking"
    ],
    downloadablePdfs: {
      rateChart: '/pdfs/guesthouse-rates.pdf',
      bookingRules: '/pdfs/guesthouse-rules.pdf'
    }
  },

  {
    id: 'guesthouse-b',
    name: 'Guest House - Category B',
    capacity: 2,
    type: 'accommodation',
    category: 'B',
    roomCount: 8,
    rentRate: { 
      peak: 3000, 
      offPeak: 2200,
      employee: 1800,
      student: 1300,
      outsider: 3500
    },
    description: 'Comfortable AC rooms with essential amenities for a pleasant stay.',
    images: [
         "/assets/convention_1.jpg",
      "/assets/guest_house_hall_1.jpg"
      
    ],
    amenities: ['AC', 'TV', 'WiFi', 'Attached Bathroom', 'Study Table'],
    timeSlots: ['Check-in: 2:00 PM', 'Check-out: 11:00 AM'],
    inCharge: {
      name: 'Mr. Sunil Kumar',
      contact: '+91-9876543217',
      email: 'guesthouse@gbu.ac.in'
    },
    bookingGuidelines: [
      'Suitable for short-term stays',
      'Basic amenities provided',
      'Common area access included'
    ],
    termsConditions: [
      'GST as applicable to be paid extra.',
      'For Bulk Booking, in case of light failure, D.G. charges @ ₹5000/- per hour will be charged and Central AC facility will not be available on D.G.',
      'Security Money/Cleaning Charges & other charges etc. mentioned in other terms & Conditions will be applicable.'
    ],
     cancellationPolicy: [
      "Booking cancelled one month earlier: No charges",
"Booking cancelled before 15 days	: 10% of the entire booking",
"Booking cancelled before 02 days: 	15% of the entire booking",
"Last moment cancellation (24 hrs.): 	20% of the entire booking"
    ]
  },

  // Convention Center Rooms
  {
    id: 'convention-rooms',
    name: 'Convention Center Rooms',
    capacity: 4,
    type: 'accommodation',
    category: 'Delegation',
    roomCount: 12,
    rentRate: { 
      peak: 4000, 
      offPeak: 3000,
      employee: 2500,
      student: 2000,
      outsider: 5000
    },
    description: 'Executive accommodation for delegations and VIP guests with premium facilities.',
    images: [
         "/assets/guest_house_1.jpg",
      "/assets/guest_house_2.jpg",
      
    ],
    amenities: ['AC', 'Premium Bedding', 'Work Desk', 'Mini Bar', 'Conference Access'],
    timeSlots: ['Check-in: 12:00 PM', 'Check-out: 12:00 PM'],
    inCharge: {
      name: 'Dr. Kavita Sharma',
      contact: '+91-9876543218',
      email: 'convention@gbu.ac.in'
    },
    bookingGuidelines: [
      'Reserved for official delegations',
      'Advance approval required',
      'Conference hall access included',
      'Dedicated support staff'
    ],
     termsConditions: [
      'GST as applicable to be paid extra.',
      'For Bulk Booking, in case of light failure, D.G. charges @ ₹5000/- per hour will be charged and Central AC facility will not be available on D.G.',
      'Security Money/Cleaning Charges & other charges etc. mentioned in other terms & Conditions will be applicable.'
    ],
     cancellationPolicy: [
      "Booking cancelled one month earlier: No charges",
"Booking cancelled before 15 days	: 10% of the entire booking",
"Booking cancelled before 02 days: 	15% of the entire booking",
"Last moment cancellation (24 hrs.): 	20% of the entire booking"
    ]
  },

  // sports facilities
  {
    id: 'cricket-ground',
    name: 'Cricket Ground',
    capacity: 500,
    type: 'sports',
    rentRate: { peak: 8000, offPeak: 6000 },
    description: 'Full-size cricket ground with pavilion and spectator seating. Perfect for tournaments and matches.',
    images: [
       "/assets/sports2.jpg",
      "/assets/sports1.jpg",
      "/assets/sports3.jpg"
    ],
    amenities: ['Pavilion', 'Scoreboard', 'Floodlights', 'Changing Rooms', 'Equipment Storage'],
    timeSlots: ['6:00 AM - 12:00 PM', '2:00 PM - 8:00 PM'],
    inCharge: {
      name: 'Coach Suresh Patel',
      contact: '+91-9876543211',
      email: 'sports@gbu.ac.in'
    },
    bookingGuidelines: [
      'Ground available for tournaments, practice sessions, and inter-college matches',
      'Advance booking required minimum 15 days for tournaments',
      'Ground maintenance charges applicable for extended use',
      'Own equipment preferred, university equipment subject to availability',
      'Medical facilities and ambulance on standby during tournaments'
    ],
    termsConditions: [
      'Users must follow ICC cricket rules and regulations',
      'Ground condition assessment required before major events',
      'Insurance coverage mandatory for tournaments',
      'Spectator management responsibility of the organizer',
      'Weather-related cancellations follow university policy'
    ],
     cancellationPolicy: [
      'Same-day cancellation: No refund',
      '24-48 hours notice: 50% refund',
      '48+ hours notice: 90% refund',
      'Equipment damage charges applicable',
      'Membership holders get priority rescheduling'
    ]
  },

  {
    id: 'football-ground',
    name: 'Football Ground',
    capacity: 1000,
    type: 'sports',
    rentRate: { peak: 10000, offPeak: 7500 },
    description: 'FIFA standard football ground with natural turf and modern facilities.',
    images: [
         "/assets/sports3.jpg",
      "/assets/sports1.jpg",
      "/assets/sports2.jpg"
    ],
    amenities: ['Natural Turf', 'Floodlights', 'Goal Posts', 'Spectator Stand', 'Changing Rooms'],
    timeSlots: ['6:00 AM - 10:00 AM', '4:00 PM - 8:00 PM'],
    inCharge: {
      name: 'Coach Rajesh Singh',
      contact: '+91-9876543212',
      email: 'sports@gbu.ac.in'
    },
    bookingGuidelines: [
      'Field maintenance required 24 hours before major events',
      'Proper football boots mandatory to protect turf',
      'Maximum 22 players plus officials allowed during matches',
      'Referee arrangements responsibility of booking party',
      'Ground inspection mandatory for external tournaments'
    ],
    termsConditions: [
      'FIFA/AIFF rules applicable for all official matches',
      'Ground closure during monsoon for maintenance',
      'Third-party insurance required for tournaments',
      'Security arrangements for spectators mandatory',
      'Post-event ground cleanup responsibility of organizers'
    ],
     cancellationPolicy: [
      'Same-day cancellation: No refund',
      '24-48 hours notice: 50% refund',
      '48+ hours notice: 90% refund',
      'Equipment damage charges applicable',
      'Membership holders get priority rescheduling'
    ]
  },

  {
    id: 'basketball-court',
    name: 'Basketball Court',
    capacity: 200,
    type: 'sports',
    rentRate: { peak: 3000, offPeak: 2000 },
    description: 'Indoor basketball court with wooden flooring and professional lighting.',
    images: [
       "/assets/sports2.jpg",
    
      "/assets/sports3.jpg"
    ],
    amenities: ['Wooden Floor', 'Professional Hoops', 'Scoreboard', 'AC', 'Spectator Seating'],
    timeSlots: ['6:00 AM - 9:00 AM', '10:00 AM - 1:00 PM', '3:00 PM - 6:00 PM', '7:00 PM - 10:00 PM'],
    inCharge: {
      name: 'Coach Amit Sharma',
      contact: '+91-9876543213',
      email: 'sports@gbu.ac.in'
    },
    bookingGuidelines: [
      'Only basketball shoes allowed on court to protect flooring',
      'Maximum 15 people allowed at one time including players and officials',
      'Court equipment available: basketballs, scoreboard, first-aid kit',
      'Air conditioning available during peak hours',
      'Tournament bookings require minimum 10 days advance notice'
    ],
    termsConditions: [
      'FIBA basketball rules applicable for official games',
      'Court surface maintenance responsibility of users',
      'Food and beverages not allowed on court',
      'Proper sports attire mandatory for all participants',
      'Coach supervision required for under-18 participants'
    ],
    cancellationPolicy: [
      'Same-day cancellation: No refund',
      '24-48 hours notice: 50% refund',
      '48+ hours notice: 90% refund',
      'Equipment damage charges applicable',
      'Membership holders get priority rescheduling'
    ]
  },

];
