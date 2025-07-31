import tcclogo from "../../../assets/tcclogo.png";
import musiclogo from "../../../assets/musiclogo.png";
export const clubsData = [
  {
    id: 'tech-innovators',
    name: 'Tech Innovators Club',
    tagline: "Building Tomorrow's Technology Today",
    category: 'Technical',
    logo: tcclogo,
    banner: 'https://www.gbu.ac.in/Content/img/club/techno.jpg',
    memberCount: 156,
    description: 'A vibrant community of tech enthusiasts dedicated to exploring cutting-edge technologies, fostering innovation, and building solutions that matter. We bridge the gap between academic learning and real-world application.',
    objectives: [
      'Foster innovation and creativity in technology',
      'Provide hands-on experience with latest tech stacks',
      'Create networking opportunities with industry professionals',
      'Develop leadership and project management skills'
    ],
    history: 'Founded in 2019, Tech Innovators Club has grown from a small group of coding enthusiasts to one of the most active technical communities on campus. Our journey began with weekly coding sessions and has evolved into organizing hackathons, tech talks, and industry collaborations.',
    achievements: [
      'Winner of Inter-University Hackathon 2023',
      'Organized 15+ workshops with industry experts',
      '3 startup ideas incubated through club initiatives',
      'Placed 50+ members in tech internships'
    ],
    policies: {
      codeOfConduct: [
        'Respect all members regardless of skill level',
        'Contribute positively to club activities',
        'Maintain confidentiality of sensitive project information',
        'Follow ethical coding and development practices'
      ],
      eligibility: [
        'Open to all students regardless of branch',
        'Basic programming knowledge preferred',
        'Enthusiasm to learn and collaborate',
        'Commitment to attend regular meetings'
      ],
      responsibilities: [
        'President: Overall club leadership and strategic planning',
        'Vice-President: Event coordination and member engagement',
        'Secretary: Documentation and communication management',
        'Treasurer: Budget management and financial planning'
      ],
      meetingFrequency: 'Weekly meetings every Friday at 5:00 PM in Tech Lab'
    },
    team: {
      facultyCoordinator: {
        id: 'fc1',
        name: 'Dr. Priya Sharma',
        role: 'Faculty Coordinator',
        photo: '',
        department: 'Computer Science & Engineering'
      },
      president: {
        id: 'p1',
        name: 'Rahul Kumar',
        role: 'President',
        photo: '',
        department: 'CSE, 4th Year'
      },
      vicePresident: {
        id: 'vp1',
        name: 'Ananya Singh',
        role: 'Vice President',
        photo: '',
        department: 'IT, 3rd Year'
      },
      secretary: {
        id: 's1',
        name: 'Arjun Patel',
        role: 'Secretary',
        photo: '',
        department: 'CSE, 3rd Year'
      },
      treasurer: {
        id: 't1',
        name: 'Sneha Gupta',
        role: 'Treasurer',
        photo: '',
        department: 'IT, 2nd Year'
      },
      members: [
        {
          id: 'm1',
          name: 'Vikash Yadav',
          role: 'Technical Lead',
          photo: '',
          department: 'CSE, 4th Year'
        },
        {
          id: 'm2',
          name: 'Priyanka Joshi',
          role: 'Event Coordinator',
          photo: '',
          department: 'IT, 3rd Year'
        }
      ]
    },
    events: [
      {
        id: 'e1',
        title: 'AI/ML Workshop Series',
        date: '2024-01-15',
        description: 'Comprehensive workshop covering machine learning fundamentals and practical applications',
        image: '',
        type: 'workshop',
        registrationLink: '#'
      },
      {
        id: 'e2',
        title: 'CodeFest 2024',
        date: '2024-02-20',
        description: 'Annual coding competition with prizes worth ₹50,000',
        image: '',
        type: 'competition',
        registrationLink: '#'
      }
    ],
    socialMedia: {
      instagram: 'https://instagram.com/techinnovators_gbu',
      linkedin: 'https://linkedin.com/company/techinnovators-gbu',
      youtube: 'https://youtube.com/techinnovatorsgbu'
    },
    reports: [
      {
        id: 'r1',
        title: 'Annual Report 2023-24',
        year: '2023-24',
        downloadUrl: '#',
        summary: 'Comprehensive overview of club activities, achievements, and financial summary for the academic year 2023-24'
      },
      {
        id: 'r2',
        title: 'Annual Report 2022-23',
        year: '2022-23',
        downloadUrl: '#',
        summary: 'Complete documentation of club initiatives and member achievements for 2022-23'
      }
    ],
    joinFormUrl: 'https://forms.google.com/techinnovators'
  },
  {
    id: 'cultural-society',
    name: 'Cultural Society',
    tagline: 'Celebrating Art, Music, and Heritage',
    category: 'Cultural',
    logo: musiclogo,
    banner: 'https://www.gbu.ac.in/Content/img/indexpageimg.jpg',
    memberCount: 203,
    description: 'A vibrant platform for artistic expression, cultural preservation, and creative collaboration. We celebrate diversity through music, dance, drama, literature, and visual arts.',
    objectives: [
      'Promote cultural awareness and appreciation',
      'Provide platform for artistic expression',
      'Organize cultural events and festivals',
      'Preserve and showcase traditional arts'
    ],
    history: 'Established in 2018, Cultural Society has been the heartbeat of artistic activities on campus. From humble poetry readings to grand cultural festivals, we have created countless memories and nurtured artistic talents.',
    achievements: [
      'Organized the largest cultural fest in university history',
      'Won Best Cultural Club award for 3 consecutive years',
      'Collaborated with renowned artists and performers',
      'Raised ₹2,00,000 for charity through cultural programs'
    ],
    policies: {
      codeOfConduct: [
        'Respect all forms of artistic expression',
        'Maintain punctuality for rehearsals and events',
        'Support fellow artists and performers',
        'Uphold the cultural values of the institution'
      ],
      eligibility: [
        'Open to students from all academic programs',
        'Passion for arts and culture required',
        'No prior experience necessary',
        'Willingness to participate in events'
      ],
      responsibilities: [
        'President: Overall leadership and event planning',
        'Vice-President: Artist coordination and performance management',
        'Secretary: Documentation and member communication',
        'Treasurer: Budget allocation and expense management'
      ],
      meetingFrequency: 'Bi-weekly meetings every alternate Tuesday at 4:00 PM in Arts Hall'
    },
    team: {
      facultyCoordinator: {
        id: 'fc2',
        name: 'Prof. Kavita Mehta',
        role: 'Faculty Coordinator',
        photo: '',
        department: 'Fine Arts & Literature'
      },
      president: {
        id: 'p2',
        name: 'Aditya Raj',
        role: 'President',
        photo: '',
        department: 'English, 4th Year'
      },
      vicePresident: {
        id: 'vp2',
        name: 'Meera Kapoor',
        role: 'Vice President',
        photo: '',
        department: 'Music, 3rd Year'
      },
      secretary: {
        id: 's2',
        name: 'Rohan Verma',
        role: 'Secretary',
        photo: '',
        department: 'Drama, 2nd Year'
      },
      treasurer: {
        id: 't2',
        name: 'Ishita Sharma',
        role: 'Treasurer',
        photo: '',
        department: 'Fine Arts, 3rd Year'
      },
      members: [
        {
          id: 'm3',
          name: 'Karan Singh',
          role: 'Music Director',
          photo: '',
          department: 'Music, 4th Year'
        },
        {
          id: 'm4',
          name: 'Nisha Patel',
          role: 'Dance Coordinator',
          photo: '',
          department: 'Dance, 2nd Year'
        }
      ]
    },
    events: [
      {
        id: 'e3',
        title: 'Spring Cultural Festival',
        date: '2024-03-15',
        description: 'Annual cultural extravaganza featuring music, dance, drama, and art exhibitions',
        image: 'https://www.gbu.ac.in/Content/clubs/img/music/music1.jpg',
        type: 'cultural',
        registrationLink: '#'
      },
      {
        id: 'e4',
        title: 'Poetry Evening',
        date: '2024-01-30',
        description: 'An intimate evening of poetry recitation and spoken word performances',
        image: 'https://www.gbu.ac.in/Content/clubs/img/music/IMG_0591.jpg',
        type: 'cultural'
      }
    ],
    socialMedia: {
      instagram: 'https://instagram.com/cultural_society_gbu',
      youtube: 'https://youtube.com/culturalsocietygbu'
    },
    reports: [
      {
        id: 'r3',
        title: 'Cultural Activities Report 2023-24',
        year: '2023-24',
        downloadUrl: '#',
        summary: 'Detailed account of all cultural programs, artist collaborations, and community engagement activities'
      }
    ],
    joinFormUrl: 'https://forms.google.com/culturalsociety'
  },

  {
  id: 'nature-club-gbu',
  name: "Nature's Club – Trisha",
  tagline: 'Living in Harmony with Nature',
  category: 'Environmental',
  logo: '/assets/NatureClub.jpg',
  banner: 'https://www.gbu.ac.in/Content/img/club/nature.jpg',
  memberCount: 35,
  description: 'Trisha – Nature Club of Gautam Buddha University is a vibrant community devoted to environmental conservation, sustainability, biodiversity awareness, and green initiatives...',
  objectives: [ /* as before */ ],
  history: 'Founded in 2021 under the School of Environmental Sciences...',
  achievements: [ /* as before */ ],
  policies: { /* same as prior structure */ },
  team: {
    facultyCoordinator: {
      id: 'fc1',
      name: 'Dr. Nirmita Mehrotra',
      role: 'Faculty Coordinator',
      photo: '',
      department: 'School of Environmental Sciences',
      phone: '9818617933',
      email: 'nirmitam@gbu.ac.in'
    },
    president: {
      id: 'sc-arnav',
      name: 'Arnav Sharma',
      role: 'General Secretary',
      photo: '',
      phone: '73008800389',
      email: 'akshay.nain555@gmail.com'
    },
    vicePresident: null,
    secretary: {
      id: 'sc-rajan',
      name: 'Rajan Chauhan',
      role: 'Secretary',
      photo: '',
      phone: '9149345917',
      email: 'rajanchauhan3549@gmail.com'
    },
    treasurer: null,
    members: [
      {
        id: 'sc2',
        name: 'Pooja Bidhuri',
        role: 'Event Coordinator',
        photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        phone: '9643105100',
      },
      {
        id: 'sc3',
        name: 'Vineeta Bhardwaj',
        role: 'Social Media Coordinator',
        photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        phone: '9811003865',
      },
      {
        id: 'sc4',
        name: 'Aarushi Giri',
        role: 'Environmental Outreach Coordinator',
        photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        phone: '9315094419',
      },
      {
        id: 'sc5',
        name: 'Bhargvi Kumari',
        role: 'Membership Coordinator',
        photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        phone: '8057537898',
      },
      {
        id: 'v1',
        name: 'Niketan Keshari',
        role: 'Volunteer',
        photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        phone: '9012644865',
      },
      {
        id: 'v2',
        name: 'Anshika',
        role: 'Volunteer',
        photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        phone: '9319433263',
      },
      {
        id: 'v3',
        name: 'Deeptanshu',
        role: 'Volunteer',
        photo: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        phone: '9899862114',
      },
    ],
  },
  events: [
    {
      id: 'e1',
      title: 'Photography Contest',
      date: '2024-09-05',
      description:
        'Macro, Plant, and Animal Photography competition to showcase biodiversity and beauty of nature...',
      image: 'https://www.gbu.ac.in/Content/img/events/nature_photo.jpg',
      type: 'contest',
      registrationLink: 'https://forms.gle/naturephotogbu',
    },
    {
      id: 'e2',
      title: 'Creative Crafting with Nature',
      date: '2024-09-18',
      description:
        'Eco-crafting workshop using natural materials to create sustainable art...',
      image: 'https://www.gbu.ac.in/Content/img/events/crafting_green.jpg',
      type: 'workshop',
      registrationLink: 'https://forms.gle/craftinggreen',
    },
    {
      id: 'e3',
      title: 'Visit to Yamuna Biotech Park',
      date: '2024-10-10',
      description:
        'An academic visit to explore biotechnology’s role in environmental sustainability...',
      image: 'https://www.gbu.ac.in/Content/img/events/biotech_visit.jpg',
      type: 'field visit',
      registrationLink: 'https://forms.gle/biotechvisitgbu',
    },
    {
      id: 'e4',
      title: 'Poster Competition',
      date: '2024-11-01',
      description:
        'Poster-making competition based on themes like climate change, biodiversity, and nature conservation...',
      image: 'https://www.gbu.ac.in/Content/img/events/poster_enviro.jpg',
      type: 'competition',
      registrationLink: 'https://forms.gle/postergbu',
    },
    {
      id: 'e5',
      title: 'Nature-Based Quiz Contest',
      date: '2024-04-10',
      description:
        'Quiz contest covering topics on sustainability, environment, flora-fauna...',
      image: 'https://www.gbu.ac.in/Content/img/events/quiz_green.jpg',
      type: 'quiz',
      registrationLink: 'https://forms.gle/naturequizgbu',
    },
  ],
  socialMedia:  {
    instagram: 'https://instagram.com/natureclubgbu',
    linkedin: 'https://linkedin.com/company/natureclub-gbu',
    youtube: 'https://youtube.com/@natureclubgbu',
  },
  reports:  [
    {
      id: 'r1',
      title: 'Annual Report 2023-24',
      year: '2023-24',
      downloadUrl: 'https://www.gbu.ac.in/Content/pdf/reports/natureclub2023.pdf',
      summary:
        'Detailed report of the environmental activities, collaborations, and impact during 2023–24.',
    },
  ],
  joinFormUrl: 'https://forms.gle/joinnatureclubgbu'
},
 {
  id: 'mirage-society',
  name: 'The Mirage Society',
  tagline: 'Capturing Moments, Telling Stories',
  category: 'Audio Visual / Media',
  logo: '/assets/Mirage.jpg',
  banner: '/assets/Mirage.jpg',
  memberCount: 5, // Estimated team size
  description:
    'The official audio visual/media team of GBU (also known as Pradarsh), dedicated to photography, videography, and visual event coverage.',
  objectives: [
    'Document major university events through photography & videography',
    'Produce creative visual content (interviews, short films)',
    'Teach camera and editing skills to students',
    'Create promotional content for the university'
  ],
  history:
    'Founded to chronicle campus life through a lens, Mirage (Pradarsh) has evolved into GBU’s trusted media body for official coverage and creative narratives.',
  achievements: [
    'Organized “Art of Light” photo exhibition under Abhivyanjana',
    'Covered 100+ university events',
    'Produced multiple short films and interviews',
    'Conducted photography/media workshops for students'
  ],
  policies: {
    codeOfConduct: [
      'Respect privacy and obtain permission before capturing media',
      'Ensure professionalism during coverage',
      'Maintain integrity in storytelling',
      'Collaborate respectfully within the team'
    ],
    eligibility: [
      'Students interested in media, photography, production',
      'Basic camera/editing knowledge preferred',
      'Willingness to attend shoots and workshops',
      'Commitment to ethical visual documentation'
    ],
    responsibilities: [
      'Secretary: Team coordination and documentation',
      'General Secretary: Manages production strategy'
    ],
    meetingFrequency:
      'Meetings scheduled around event shoots and production deadlines'
  },
  team: {
    facultyCoordinator: {
      id: 'fc1',
      name: 'Dr. Ritika Joshi',
      role: 'Faculty Coordinator',
      department: 'Mass Communication and Media Studies',
      specialization: 'Photography & Production',
      photo: '',
      phone: '',
      email: ''
    },
    president: null,
    vicePresident: null,
    secretary: {
      id: 's1',
      name: 'Sheryl',
      role: 'Secretary',
      photo: '',
      department: '',
      phone: '9528846685',
      email: ''
    },
    treasurer: null,
    members: [
      {
        id: 'm1',
        name: 'Siddharth',
        role: 'General Secretary',
        photo: '',
        department: '',
        phone: '6202969798',
        email: ''
      }
    ]
  },
  events: [
    {
      id: 'e1',
      title: 'Art of Light Photo Exhibition',
      date: '2024-11-22', // Approximate date during Abhivyanjana
      description:
        'Photo exhibition showcasing lighting techniques, held under Abhivyanjana “Pradarsh” theme',
      image: '',
      type: 'exhibition',
      registrationLink: ''
    },
    {
      id: 'e2',
      title: 'Photography Workshop',
      date: 'TBD',
      description:
        'Hands on sessions on DSLR photography, lighting, and editing for beginners',
      image: '',
      type: 'workshop',
      registrationLink: ''
    },
    {
      id: 'e3',
      title: 'Campus Stories Short Film Series',
      date: 'TBD',
      description:
        'Short documentary series highlighting compelling narratives from GBU campus',
      image: '',
      type: 'production',
      registrationLink: ''
    }
  ],
  socialMedia: {
    instagram: '', // GBU's Frames GBU reels feature their work
    linkedin: '',
    youtube: ''
  },
  reports: [],
  joinFormUrl: ''
},

 {
  id: 'literary-club-arhant',
  name: 'Literary Club (Arhant)',
  tagline: 'Where Words Come Alive',
  category: 'Literary',
  logo: '/assets/literaryclub.jpeg',
  banner: '/assets/literaryclub.jpeg',
  memberCount: 5,
  description: 'A vibrant community for book lovers and aspiring writers, the Literary Club “Arhant” fosters a space for creative expression through writing, open-mics, and literary discussions.',
  objectives: [
    'Promote love for reading and writing',
    'Provide a platform for aspiring writers and performers',
    'Encourage experimentation and creativity',
    'Collaborate with authors, publishers, and literary groups',
    'Organize literary competitions to engage talent'
  ],
  history: 'Established to nurture literary talent on campus, Arhant hosts poetry readings, workshops, and competitions, serving as a core cultural body within GBU.',
  achievements: [
    'Organized annual events like Spell Nerd and Kavya Sangam',
    'Hosted guest sessions with literary figures',
    'Facilitated inter-university literary exchanges',
    'Promoted budding writers through publishing support'
  ],
  policies: {
    codeOfConduct: [
      'Respect diverse literary expression',
      'Maintain decorum during sessions',
      'Provide positive feedback to peers',
      'Promote originality and avoid plagiarism'
    ],
    eligibility: [
      'Open to all students with literary interest',
      'Respect for creative freedom',
      'Willing to participate in events',
      'Commitment to ethical conduct'
    ],
    responsibilities: [
      'General Secretary: Leads planning and collaborations',
      'Secretary: Manages communications and documentation'
    ],
    meetingFrequency: 'Weekly meetings every Wednesday at 4:00 PM in the Literary Hall'
  },
  team: {
    facultyCoordinator: [
      {
        id: 'fc1',
        name: 'Dr. Om Prakash',
        role: 'Faculty Coordinator',
        photo: '',
        phone: '+918800259977',
        department: ''
      },
      
    {
        id: 'fc2',
        name: 'Ms. Priyanka Singh',
        role: 'Faculty Coordinator',
        photo: '',
        phone: '+919650845746',
        department: ''
      },
    {
        id: 'fc3',
        name: 'Dr. Bipasha Som Gune',
        role: 'Faculty Coordinator',
        photo: '',
        phone: '+919560965071',
        department: ''
      },
    ],
    secretary: {
      id: 's1',
      name: 'Moh. Shoaib Khan',
      role: 'General Secretary',
      photo: '',
      phone: '+919140279180',
      email: 'zain.khan830@gmail.com',
      department: ''
    },
    treasurer: null,
    members: [
      {
        id: 'm1',
        name: 'Utkarsh Singh',
        role: 'Secretary',
        photo: '',
        phone: '+919305089149',
        department: ''
      },
      {
        id: 'm2',
        name: 'Sneha Tiwari',
        role: 'General Secretary',
        photo: '',
        phone: '+919711753879',
        department: ''
      },
      {
        id: 'm3',
        name: 'Ayush Jaiswal',
        role: 'General Secretary',
        photo: '',
        phone: '+918630332017',
        department: ''
      }
    ]
  },
  events: [
    {
      id: 'e1',
      title: 'Spell Nerd',
      date: '2024-04-27',
      description: 'Campus spelling competition testing vocabulary and linguistic skills.',
      image: '',
      type: 'competition',
      registrationLink: ''
    },
    {
      id: 'e2',
      title: 'Kavya Sangam',
      date: 'TBD',
      description: 'An open-mic & poetry reading event blending classical and contemporary styles.',
      image: '',
      type: 'open mic',
      registrationLink: ''
    },
    {
      id: 'e3',
      title: 'Sarfarosh',
      date: 'TBD',
      description: 'Performance event featuring poetry, storytelling, and monologues.',
      image: '',
      type: 'performance',
      registrationLink: ''
    }
  ],
  socialMedia: {
    instagram: 'https://www.instagram.com/didacticclub/' ,
    linkedin: '',
    youtube: ''
  },
  reports: [],
  joinFormUrl: ''
},

{
    id: 'yoga-meditation-club',
    name: 'Yoga & Meditation Club',
    tagline: 'Find Balance, Breathe Peace',
    category: 'Wellness',
    logo: '/assets/yoga.png',
    banner: '/assets/yoga.png',
    memberCount: 10,
    description: 'The Yoga and Meditation Club at GBU is a peaceful sanctuary for students to practice mindfulness, balance, and holistic well-being through yoga, pranayama, and meditation',
    objectives: [
      'Promote physical and mental well-being',
    'Encourage mindfulness and emotional resilience',
    'Provide a calm, inclusive space for holistic practices',
    'Foster self-awareness and personal growth'

    ],
    history: 'Established to support students’ holistic development, the club has been offering structured yoga and meditation sessions regularly.',
    achievements: [
      'Hosted weekly guided yoga and meditation sessions',
    'Invited certified yoga instructors and wellness coaches',
    'Organized stress relief camps and exam support workshops',
    'Built a consistent student community for holistic health'

    ],
    policies: {
      codeOfConduct: [
              'Respect participants and instructors',
      'Maintain silence and focus during sessions',
      'Follow safety guidelines during asanas',
      'Promote inclusivity and wellness'

      ],
      eligibility: [
        'Open to all GBU students',
      'Interest in mindfulness or yoga',
      'Commitment to regular attendance',
      'Respect for discipline and peaceful atmosphere'

      ],
      responsibilities: [
        'President: Overall club leadership and strategic planning',
        'Vice-President: Event coordination and member engagement',
        'Secretary: Documentation and communication management',
        'Treasurer: Budget management and financial planning'
      ],
      meetingFrequency: 'Weekly sessions every Monday & Thursday at 6:30 AM in Meditation Hall'
    },
    team: {
      facultyCoordinator: {
        id: 'fc1',
        name: 'Dr. Nagendra Singh',
        role: 'Faculty Coordinator',
        photo: '',
        department: 'Computer Science & Engineering'
      },
    
      facultyCoordinator: {
        id: 'fc2',
        name: 'Dr. Jitendra Rathore',
        role: 'Faculty Coordinator',
        photo: '',
        department: ''
      },
      facultyCoordinator: {
        id: 'fc3',
        name: 'Dr. Manish T. Meshram',
        role: 'Faculty Coordinator',
        photo: '',
        department: ''
      },
      // president: {
      //   id: '',
      //   name: '',
      //   role: '',
      //   photo: '',
      //   department: ''
      // },
      // vicePresident: {
      //   id: '',
      //   name: '',
      //   role: '',
      //   photo: '',
      //   department: ''
      // },
      secretary: {
        id: 's1',
        name: 'Anupam Tiwari',
        role: 'Secretary',
        photo: '',
        department: ''
      },
      // treasurer: {
      //   id: '',
      //   name: '',
      //   role: '',
      //   photo: '',
      //   department: ''
      // },
      members: [
        {
          id: 'm1',
          name: 'Abhishek Kumar',
          role: 'General Secretary',
          photo: '',
          department: ''
        },
        {
          id: 'm2',
          name: 'Ekta Chauhan',
          role: 'Joint Secretary',
          photo: '',
          department: ''
        }
      ]
    },
    events: [
      {
        id: 'e1',
        title: '10 Day Basic Hybrid Course on Yoga & Mindfulness',
        date: '2025 02 17 to 2025 02 26',
        description: 'A 10-day hybrid (online + in-person) course covering yoga asanas, pranayama, mindfulness meditation and daily practice integration',
        image: '/assests/yoga.png',
        type: 'online & in-person course',
        registrationLink: '#'
      },
      
    ],
    socialMedia: {
      instagram: '',
      linkedin: '',
      youtube: ''
    },
    reports: [
      {
        id: 'r1',
        title: 'Annual Report 2023-24',
        year: '2023-24',
        downloadUrl: '#',
        summary: 'Comprehensive overview of club activities, achievements, and financial summary for the academic year 2023-24'
      },
      {
        id: 'r2',
        title: 'Annual Report 2022-23',
        year: '2022-23',
        downloadUrl: '#',
        summary: 'Complete documentation of club initiatives and member achievements for 2022-23'
      }
    ],
    joinFormUrl: ''
  },

  {
  id: 'drishtikon-debate-society',
  name: 'Drishtikon Debate Society',
  tagline: 'Where Every Viewpoint Matters',
  category: 'Debate',
  logo: '/assets/debate.jpg',
  banner: '/assets/debate.jpg',
  memberCount: 7,
  description: 'Drishtikon Debate Society is the beating heart of intellectual discourse at Gautam Buddha University. It is a dynamic space where students sharpen critical thinking, hone public speaking, and engage in thought-provoking discussions across diverse topics. Rooted in the belief that diverse perspectives lead to better solutions, the club nurtures an inclusive culture of healthy debate, active listening, and respectful dialogue. From regular debates to high-profile panels, Drishtikon offers opportunities for all—from beginners to seasoned debaters—to grow, lead, and be heard.',
  objectives: [
    'Foster critical thinking and respectful argumentation',
    'Enhance public speaking and communication skills',
    'Promote understanding through diverse perspectives',
    'Encourage active listening and leadership among members',
    'Create a platform for structured intellectual engagement'
  ],
  history: 'Founded to promote meaningful debates at GBU, Drishtikon has grown into a respected society known for engaging panels, thought-provoking competitions, and inclusive discussion forums.',
  achievements: [
    'Conducted 5+ major debate events in AY 2023–24',
    'Hosted inter-university panel discussions and summits',
    'Provided a launchpad for student leaders and thinkers',
    'Fostered a diverse and inclusive debating community'
  ],
  policies: {
    codeOfConduct: [
      'Respect all opinions and viewpoints',
      'Avoid personal attacks; argue the idea, not the person',
      'Maintain decorum during sessions and events',
      'Promote inclusivity, fairness, and intellectual honesty'
    ],
    eligibility: [
      'Open to all GBU students',
      'No prior debate experience required',
      'Willingness to learn, listen, and engage constructively',
      'Active participation in meetings and competitions'
    ],
    responsibilities: [
      'General Secretary: Oversees club operations and event planning',
      'Ex-General Secretary: Provides mentorship and legacy guidance'
    ],
    meetingFrequency: 'Bi-weekly debate sessions on Fridays at 4:00 PM in Discussion Hall B'
  },
    team: {
      facultyCoordinator: [
        {
          id: 'fc1',
          name: 'Dr. Manjri Suman',
          role: 'Faculty Coordinator',
          photo: '',
          
          department: ''
        },
        {
          id: 'fc2',
          name: 'Dr. Tanvi Vats',
          role: 'Faculty Coordinator',
          photo: '',
          
          department: '—'
        },
        {
          id: 'fc3',
          name: 'Dr. Vibhavari',
          role: 'Faculty Coordinator',
          photo: '',
          
          department: ''
        }
      ],
      president: null,
      vicePresident: null,
      secretary: {
        id: 's1',
        name: 'Tiyziys',
        role: 'General Secretary',
        photo: '',
        
        department: ''
      },
      treasurer: null,
      members: [
        {
          id: 'm1',
          name: 'Sakshi Jha',
          role: 'General Secretary',
          photo: '',
          
          department: ''
        },
        {
          id: 'm2',
          name: 'Karan Pandey',
          role: 'Ex-General Secretary',
          photo: '',
          
          department: ''
        },
        {
          id: 'm3',
          name: 'Shrishti Singh Rawal',
          role: 'Ex-General Secretary',
          photo: '',
          
          department: ''
        }
      ]
    },
    events: [
      {
        id: 'e1',
        title: 'Speech Competition – 75 YEARS OF BHARAT',
        date: '2023-08-11',
        description: 'Speech competition on the occasion of the 75th Independence Day, reflecting on India\'s journey.',
        image: '',
        type: 'competition',
        registrationLink: '#'
      },
      {
        id: 'e2',
        title: 'February Rendezvous',
        date: '2024-02-09',
        description: 'Debate: "Educational Evolution: Are Indian systems adapting?" & Panel: "Working 70 Hours: A Need or a Capitalist’s Dream?"',
        image: '',
        type: 'debate + panel',
        registrationLink: '#'
      },
      {
        id: 'e3',
        title: 'Beyond The Binary – Glitch Summit',
        date: '2024-04-13',
        description: 'A panel discussion on inclusivity and representation at the Glitch Fest.',
        image: '',
        type: 'panel discussion',
        registrationLink: '#'
      },
      {
        id: 'e4',
        title: 'Vaad-Vivaad: Women Reservation and Real Equality',
        date: '2024-10-12',
        description: 'A spirited debate on whether reservation for women leads to real equality in India.',
        image: '',
        type: 'debate',
        registrationLink: '#'
      },
      {
        id: 'e5',
        title: 'Debate: Veganism as Capitalist Propaganda?',
        date: '2024-11-22',
        description: 'Debating whether veganism is morally driven or a capitalist marketing trend.',
        image: '',
        type: 'debate',
        registrationLink: '#'
      }
    ],
    socialMedia: {
      instagram: '',
      linkedin: '',
      youtube: ''
    },
    reports: [
      {
      id: 'r1',
      title: 'Annual Report 2023-24',
      year: '2023-24',
      downloadUrl: 'https://www.gbu.ac.in/Content/pdf/reports/natureclub2023.pdf',
      summary:
        'Detailed report of the environmental activities, collaborations, and impact during 2023–24.',
    },
  ],
    joinFormUrl: ''
  },
  {
    id: 'nrityangana-dance-club',
    name: 'Nrityangana Dance Club',
    tagline: 'Dance – The Hidden Language of the Soul',
    category: 'Cultural',
    logo: '/assets/dance.jpeg', // Replace with actual logo path or import
    banner: '/assets/dance.jpeg', // Replace with actual banner if available
    memberCount: 2, // Update as needed
    description: '“Dance is the hidden language of the soul.” These beautiful words by Martha Graham capture the spirit of Nrityangana, the official Dance Club of Gautam Buddha University. Dancing is more than movement — it is an expression of joy, freedom, and connection. Nrityangana provides a stage to explore known and hidden talents. It is a space where confidence blossoms, memories are made, and every student, regardless of background or experience, can express themselves. Through classes, performances, and inclusive opportunities, we aim to spread happiness and inspire the soul.',
    objectives: [
      'Promote dance as a means of expression and well-being',
      'Provide a platform for students to showcase dance talent',
      'Encourage both experienced and novice dancers to participate',
      'Foster creativity, confidence, and community through dance',
      'Support physical and mental fitness via regular practice'
    ],
    history: 'Nrityangana was founded to nurture the love of dance within the university community. Since its beginning, the club has organized performances, trained new dancers, and brought cultural vibrancy to university events.',
    achievements: [
      'Performed in annual cultural fests and national days',
      'Conducted open workshops for beginners and enthusiasts',
      'Won inter-university dance contests',
      'Represented GBU in cultural festivals across campuses'
    ],
    policies: {
      codeOfConduct: [
        'Respect all dance forms and performers',
        'Maintain discipline during rehearsals and events',
        'Uphold team spirit and cooperation',
        'Encourage creativity, inclusivity, and safety in practice'
      ],
      eligibility: [
        'Open to all students of GBU',
        'No prior dance experience required',
        'Commitment to practice sessions and performances',
        'Respect for the club’s values and team culture'
      ],
      responsibilities: [
        'General Secretary: Leads planning and choreography coordination',
        'Secretary: Manages communication and event execution'
      ],
      meetingFrequency: 'Practice sessions twice a week; performance rehearsals as scheduled'
    },
    team: {
      facultyCoordinator: [
        {
          id: 'fc1',
          name: 'Dr. Vandna Singh',
          role: 'Faculty Coordinator',
          photo: '',
          
          department: ''
        },
        {
          id: 'fc2',
          name: 'Dr. Deepali Singh',
          role: 'Faculty Coordinator',
          photo: '',
          
          department: ''
        },
        {
          id: 'fc3',
          name: 'Dr. Deepti Goyal',
          role: 'Faculty Coordinator',
          photo: '',
          
          department: ''
        }
      ],
      president: null,
      vicePresident: null,
      secretary: {
        id: 's1',
        name: 'Prashant Singh',
        role: 'Secretary',
        photo: '',
       
        department: ''
      },
      treasurer: null,
      members: [
        {
          id: 'm1',
          name: 'Shivangi Malik',
          role: 'General Secretary',
          photo: '',
          
          department: ''
        }
      ]
    },
    events: [],
    socialMedia: {
      instagram: '',
      linkedin: '',
      youtube: ''
    },
    reports: [
      {
      id: 'r1',
      title: 'Annual Report 2023-24',
      year: '2023-24',
      downloadUrl: 'https://www.gbu.ac.in/Content/pdf/reports/natureclub2023.pdf',
      summary:
        'Detailed report of the environmental activities, collaborations, and impact during 2023–24.',
    },
  ],
    joinFormUrl: ''
  }

];
