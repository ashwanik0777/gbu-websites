 import React, { useState } from 'react';
import {
  Mail, Phone, Search, Filter, X, BookOpen
} from 'lucide-react';
import BannerSection from '../../components/HeroBanner';
const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedQualification, setSelectedQualification] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  // Department data with counts
  const departments = [
    { id: 'All', name: 'All Departments', count: 27 },
    { id: 'cse', name: 'CSE', count: 15 },
    { id: 'it', name: 'IT', count: 4 },
    { id: 'ece', name: 'ECE', count: 6 },
    { id: 'ocfd', name: 'OCFD', count: 32 }
  ];

  const experienceRanges = [
    'All',
    '0-5 years',
    '6-10 years',
    '11-15 years',
    '16+ years'
  ];

  const qualifications = [
    'All',
    'PhD',
    'M.Tech',
    'M.Sc',
    'MBA',
    'B.Tech'
  ];

  // Faculty data
  const facultyData = {
    cse: {
      name: "Computer Science & Engineering",
      shortName: "CSE",
      color: "from-blue-500 to-blue-600",
      lightColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      faculty: {
        professor: [],
        associateProfessor: [],
        assistantProfessor: [
          {
            id: 1,
            name: "Dr. Arpit Bhardwaj",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/6735c61d170ee_WhatsApp%20Image%202024-11-14%20at%203.12.33%20PM.jpeg",
            specialization: "Machine Learning, Deep Learning, EEG Signal, Genetic Programming",
            email: "arpit.bhardwaj@gbu.ac.in",
            phone: "8878853111",
            experience: "5+ years",
            qualification: "PhD",
            education: "Ph.D: Computer Science, IIT Indore, M.Tech: SGSITS Indore, B.Tech: SDITS Khandwa"
          },
          {
            id: 2,
            name: "Dr. Arun Solanki",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/67c6a617c08be_cropped-arun.jpg",
            specialization: "Artificial Intelligence, Machine Learning, Deep Learning, NLP",
            email: "asolanki@gbu.ac.in",
            phone: "Coming Soon",
            experience: "8+ years",
            qualification: "PhD",
            education: "PhD(2014), Computer Science and Engineering, Gautam Buddha University, Greater Noida"
          },
          {
            id: 3,
            name: "Dr. Aarti Gautam Dinker",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/6605300c5c849_aarti.jpg",
            specialization: "Not Available",
            email: "aarti@gbu.ac.in",
            phone: "Not mentioned",
            experience: "5+ years",
            qualification: "PhD",
            education: "Ph.D."
          },
          {
            id: 4,
            name: "Dr. Anika",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/672ee826e3b19_Anika.jpg",
            specialization: "Data Structures and Algorithms, Data Science and Artificial Intelligence",
            email: "anika@gbu.ac.in",
            phone: "Unavailable",
            experience: "5+ years",
            qualification: "PhD",
            education: "B.Tech. (CSE), M.E. (CSE) and Ph.D. (CSE)"
          },
          {
            id: 5,
            name: "Dr. Anurag Singh Baghel",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/66052f4f5757a_asb.jpg",
            specialization: "Artificial Intelligence, Soft Computing, Optimization Techniques, Algorithm Design, Embedded Systems",
            email: "asb@gbu.ac.in",
            phone: "Coming Soon",
            experience: "10+ years",
            qualification: "PhD",
            education: "D.Phil(2010), University of Allahabad, Prayagraj"
          },
          {
            id: 6,
            name: "Dr. Gaurav Kumar",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/6721e9346dac1_Photo-removebg-preview.png",
            specialization: "Recommendation Systems, Machine learning, Decision Support Systems, Sentiment Analysis, Cyber Scams",
            email: "gaurav.kumar@gbu.ac.in",
            phone: "8586968801",
            experience: "5+ years",
            qualification: "PhD",
            education: "B.Tech (Guru Gobind Singh University), M.Tech and PhD (Jawaharlal Nehru University)"
          },
          {
            id: 7,
            name: "Dr. Nitesh Singh Bhati",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/671b256dd035a_WhatsApp%20Image%202024-10-25%20at%2010.05.19%20AM.jpeg",
            specialization: "Cyber Security, Machine Learning, Information Security, Artificial Intelligence",
            email: "nsbhati@gbu.ac.in",
            phone: "Coming Soon",
            experience: "5+ years",
            qualification: "PhD",
            education: "Ph.D(CSE), M.Tech(CSE), B.Tech(CSE)"
          },
          {
            id: 8,
            name: "Dr. Pradeep Tomar",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/6603cfe3be87c_pradeep-tomar.jpg",
            specialization: "Software Engineering, Artificial Intelligence",
            email: "pradeep.tomar@gbu.ac.in",
            phone: "+91-9899874830",
            experience: "10+ years",
            qualification: "PhD",
            education: "Ph.D. (CS), M.Tech. (CSE), MCA"
          },
          {
            id: 9,
            name: "Dr. Rajendra Bahadur Singh",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/6613ce13d7538_RBS_PIC.jpeg",
            specialization: "Soft Computing, Data Analytics, IC Floorplanning",
            email: "rajendra@gbu.ac.in",
            phone: "9719886323",
            experience: "8+ years",
            qualification: "PhD",
            education: "Ph.D, M.Tech, B.Tech"
          },
          {
            id: 10,
            name: "Dr. Raju Pal",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/660a761667ced_CS%20Raju%20Pal.jpg",
            specialization: "Machine Learning, Computer Vision, and Artificial Intelligence",
            email: "raju.pal@gbu.ac.in",
            phone: "7840045107",
            experience: "5+ years",
            qualification: "PhD",
            education: "PhD (CSE), M.Tech. (CSE), B.Tech (IT)"
          },
          {
            id: 11,
            name: "Dr. Rakesh Kumar",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/67c6cc28b50d0_SML_8821.JPG",
            specialization: "Multicast Network, Vehicular IoT, Security Protocols, Wireless Sensor Networks and Artificial Intelligence",
            email: "rakesh.k@gbu.ac.in",
            phone: "Unavailable",
            experience: "5+ years",
            qualification: "PhD",
            education: "B.Tech., M.Tech., Ph.D."
          },
          {
            id: 12,
            name: "Dr. Shiraz Khurana",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/672b4e0fd48e8_image%20(1).png",
            specialization: "Machine Learning, Virtual Reality, Augmented Reality, Computer Vision",
            email: "shiraz.khurana@gbu.ac.in",
            phone: "9466786100",
            experience: "5+ years",
            qualification: "PhD",
            education: "B.Tech, M.Tech, Ph.D"
          },
          {
            id: 13,
            name: "Dr. Rakesh Kumar",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/674dcc857a182_photo2.jpg",
            specialization: "Software Engineering, Machine Learning, Data Science, Artificial Intelligence",
            email: "rakesh.kumar@gbu.ac.in",
            phone: "+91-9026422990",
            experience: "5+ years",
            qualification: "PhD",
            education: "B.Tech., M.Tech., Ph.D.: IIT (BHU)"
          },
          {
            id: 14,
            name: "Dr. Vimlesh Kumar Ray",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/66052fd60f82d_vimlesh.jpg",
            specialization: "signal and system, Control theory, Network theory, Ad-hoc wireless networks",
            email: "vimlesh@gbu.ac.in",
            phone: "Coming Soon",
            experience: "5+ years",
            qualification: "PhD",
            education: "PhD ( Ad-hoc wireless networks),M.Tech.( Wireless communication and networks) , B.Tech. (Electronics and communication engineering)"
          },
          {
            id: 15,
            name: "Mr. Kartikeya Tiwari",
            title: "Assistant Professor",
            department: "Department of Computer Science & Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/66475c0d84def_IMG-20240517-WA0009%20(1).jpg",
            specialization: "Programming, Database Management, Algorithm Design, Data Structure",
            email: "kartikeya@gbu.ac.in",
            phone: "9415033569",
            experience: "5+ years",
            qualification: "M.Tech",
            education: "M.Tech (CSE), B.Tech (IT)"
          }
        ]
      }
    },
    it: {
      name: "Information Technology",
      shortName: "IT",
      color: "from-emerald-500 to-emerald-600",
      lightColor: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-700",
      faculty: {
        professor: [
          {
            id: 1,
            name: "Prof. Sanjay Kumar Sharma",
            title: "Professor",
            department: "Department of Information Technology",
            image: "https://faculty.gbu.ac.in/uploads/photos/66052fb965b32_sanjay.sharma.jpg",
            specialization: "Information Technology, Artificial Intelligence, Nanotechnology, Research Methodology, Research & Publication Ethics",
            email: "sanjay.sharma@gbu.ac.in",
            phone: "Coming Soon",
            experience: "25+ years",
            qualification: "PhD",
            education: "Ph. D. 1993, Kurukshetra University, Kurukshetra"
          }
        ],
        associateProfessor: [],
        assistantProfessor: [
          {
            id: 2,
            name: "Dr. Neeta Singh",
            title: "Assistant Professor",
            department: "Department of Information Technology",
            image: "https://faculty.gbu.ac.in/uploads/photos/67c48c839f452_280409.png",
            specialization: "Computer Networks, Wireless Networks, Mobile Computing, Wireless Technology, MANETs, VANETs, Next Generation Networks",
            email: "neeta@gbu.ac.in",
            phone: "9990715153",
            experience: "10+ years",
            qualification: "PhD",
            education: "Ph.D. (Computer Science), M.Tech. ICT, Masters in Computers and Management, BSc.(PCM)"
          },
          {
            id: 3,
            name: "Dr. Akash Kumar",
            title: "Assistant Professor",
            department: "Department of Information Technology",
            image: "https://faculty.gbu.ac.in/uploads/photos/6763ee8f77b1f_Akash%20Kumar%20(PWC2016003).jpg",
            specialization: "Battery Less Wireless Sensor Network, Internet of Things, Energy Harvesting, UAVs, Machine Learning, BlockChain",
            email: "akash.kumar@gbu.ac.in",
            phone: "9549539572",
            experience: "5+ years",
            qualification: "PhD",
            education: "Ph.D. (IIIT-Allahabad), M.Tech. (IIIT-Allahabad), B.Tech. (UCE, RTU, Kota)"
          },
          {
            id: 4,
            name: "Dr. Maneet Singh",
            title: "Assistant Professor",
            department: "Department of Information Technology",
            image: "https://faculty.gbu.ac.in/uploads/photos/67c1a9f10e9e1_profile_pic_ManeetSingh.jpg",
            specialization: "Opinion Mining, Social Network Analysis, Computational Social Science and Machine Learning",
            email: "maneet.singh@gbu.ac.in",
            phone: "Coming Soon",
            experience: "5+ years",
            qualification: "PhD",
            education: "PhD (Indian Institute of Technology Ropar)"
          }
        ]
      }
    },
    ece: {
      name: "Electronics & Communication Engineering",
      shortName: "ECE",
      color: "from-purple-500 to-purple-600",
      lightColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      faculty: {
        professor: [],
        associateProfessor: [],
        assistantProfessor: [
          {
            id: 1,
            name: "Dr. Vidushi Sharma",
            title: "Assistant Professor",
            department: "Department of Electronics and Communication Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/66052f0435179_vidushi.jpg",
            specialization: "Information technology, Sensor network, Internet of things, Technology Management",
            email: "vidushi@gbu.ac.in",
            phone: "Coming Soon",
            experience: "8+ years",
            qualification: "PhD",
            education: "Ph.D. Computer Science, M.Tech. , M.Sc. Computer Science"
          },
          {
            id: 2,
            name: "Dr. Mangal Das",
            title: "Assistant Professor",
            department: "Department of Electronics and Communication Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/676049327abf5_Mangal_Das_2024-min.JPG",
            specialization: "Semiconductor Fabrication Nanotechnology Robotics AI/ML",
            email: "mangal.das@gbu.ac.in",
            phone: "Coming Soon",
            experience: "5+ years",
            qualification: "PhD",
            education: "Indian Institute of Technology Indore"
          },
          {
            id: 3,
            name: "Dr. Navaid Zafar Rizvi",
            title: "Assistant Professor",
            department: "Department of Electronics and Communication Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/66066a93789f0_navaid-rizvi.jpg",
            specialization: "Machine Intelligence for ICs, MEMS/VLSI Design, Antenna & Microwave Techniques & RF Technology, Microsystems Fabrication",
            email: "navaid@gbu.ac.in",
            phone: "Coming Soon",
            experience: "10+ years",
            qualification: "PhD",
            education: "PhD , M.S- Inf. & Comm. Engg. (TUD-Darmstadt, Germany), M.S- Microsystems Engg. (HFU, Germany)"
          },
          {
            id: 4,
            name: "Dr. Priyanka Goyal",
            title: "Assistant Professor",
            department: "Department of Electronics and Communication Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/66052fa591258_priyankag.jpg",
            specialization: "Field of teaching- Basic electronics, Analog Communication, Network Analysis and Synthesis, VHDL, Verilog, Low Power VLSI, Automation and Physical Design, Principles",
            email: "priyankag@gbu.ac.in",
            phone: "Coming Soon",
            experience: "5+ years",
            qualification: "PhD",
            education: "PhD (2018) in Optoelectronics and VLSI (On-chip optical interconnects)"
          },
          {
            id: 5,
            name: "Dr. Rajesh Mishra",
            title: "Assistant Professor",
            department: "Department of Electronics and Communication Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/67c341c729a98_rajesh%20photo.jpg",
            specialization: "Networks, Signal Processing, Communication Systems, Reliability Engineering, RAMS",
            email: "rmishra@gbu.ac.in",
            phone: "+919717949251",
            experience: "10+ years",
            qualification: "PhD",
            education: "B.E. (Electronics Engineering), M. Tech. & Ph.D. (IIT Kharagpur)"
          },
          {
            id: 6,
            name: "Dr. Vivek Chaudhary",
            title: "Assistant Professor",
            department: "Department of Electronics and Communication Engineering",
            image: "https://faculty.gbu.ac.in/uploads/photos/67a9de3a1a667_PhotoGraph_Vivek.jpg",
            specialization: "Wireless Communication, Physical Layer Security, Integrated Sensing and Communication, Full-Duplex Radios, New Waveforms for Next Generation Wireless Networks",
            email: "vivek.chaudhary@gbu.ac.in",
            phone: "Coming Soon",
            experience: "5+ years",
            qualification: "PhD",
            education: "PhD. (IIT Delhi) || M.Tech (IIT Roorkee) || B.Tech (UPTU, Lucknow)"
          }
        ]
      }
    },
    ocfd: {
      name: "OCFD Faculty",
      shortName: "OCFD",
      color: "from-orange-500 to-orange-600",
      lightColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
      faculty: {
        professor: [],
        associateProfessor: [],
        assistantProfessor: [
          {
            id: 1,
            name: "Aakash",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Aakash.jpg",
            specialization: "",
            email: "Aakash@gbu.ac.in",
            phone: "9286894749",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "Integrated M. Tech"
          },
          {
            id: 2,
            name: "Akanksha Singh Rajput",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Akanksha%20Singh%20Rajput.jpg",
            specialization: "",
            email: "akanksharajput.ocfd@gbu.ac.in",
            phone: "987302113",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "B.Tech (CSE), M.Tech (CSE from IIT Guwahati)"
          },
          {
            id: 3,
            name: "Anupriya Priyadarshani",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Anupriya%20Priyadarshani.jpg",
            specialization: "",
            email: "anucsnec@gmail.com",
            phone: "9687787496",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.TECH (Data Science & AI), IIIT RANCHI / B.TECH (CSE), NCE"
          },
          {
            id: 4,
            name: "Archana",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Archana.jpg",
            specialization: "",
            email: "archana.ocfd@gbu.ac.in",
            phone: "9412878115",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.Tech (CSE), Ph.D. (Pursuing)"
          },
          {
            id: 5,
            name: "Ashi Gautam",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Ashi%20Gautam.jpg",
            specialization: "",
            email: "ashigautam.ocfd@gbu.ac.in",
            phone: "8285828005",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.Tech"
          },
          {
            id: 6,
            name: "Charu Singh",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Charu%20Singh.jpg",
            specialization: "",
            email: "charusingh.ocfd@gbu.ac.in",
            phone: "7080488876",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.Tech (CSE), Ph.D.(CSE) Pursuing"
          },
          {
            id: 7,
            name: "Sangeeta",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Sangeeta.jpg",
            specialization: "",
            email: "sangeeta.ocfd@gbu.ac.in",
            phone: "8744908838",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "B.Tech (CSE), M.Tech (Software Engineering)"
          },
          {
            id: 8,
            name: "Prashant Gaurav",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Prashant%20Gaurav.jpg",
            specialization: "",
            email: "prashantgaurav.ocfd@gbu.ac.in",
            phone: "9798246370",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "B.Tech (CSE), M.Tech (Artificial Intelligence and Robotics)"
          },
          {
            id: 9,
            name: "Shashi Prabha Chahal",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Shashi%20Prabha%20Chahal.jpg",
            specialization: "",
            email: "shashi.cs2101@gmail.com",
            phone: "9315884954",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.Tech(CSE), Ph.D (pursuing)"
          },
          {
            id: 10,
            name: "Sumedha Dangi",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Sumedha%20Dangi.jpg",
            specialization: "",
            email: "sumedha.ocfd@gbu.ac.in",
            phone: "8848725684",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "Pursuing Ph.D., M.Tech, B.Tech."
          },
          {
            id: 11,
            name: "Vikash Patel",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Vikash%20Patel.jpg",
            specialization: "",
            email: "vikashpatel.ocfd@gbu.ac.in",
            phone: "9654173780",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "B. Tech (CSE), M.Tech(Artificial Intelligence and Robotics)"
          },
          {
            id: 12,
            name: "Vishvajeet Yadav",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Vishvajeet%20Yadav.jpg",
            specialization: "",
            email: "vishvajeetyadav.ocfd@gbu.ac.in",
            phone: "9628349743",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.Tech(Artificial Intelligence and Robotics), B.Tech(CSE)"
          },
          {
            id: 13,
            name: "Anjana Mall",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Anjana%20Mall.jpg",
            specialization: "",
            email: "anjana71086@gmail.com",
            phone: "09754127644",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "BE, M. Tech, PhD.(Pursuing) (ECE)"
          },
          {
            id: 14,
            name: "Harishchandra Prasad",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/harishchandra%20prasad.jpg",
            specialization: "",
            email: "harishfet77@gmail.com",
            phone: "7906431303",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "B.E.,M.Tech, PhD.(Pursuing)"
          },
          {
            id: 15,
            name: "Anand Prakash Raw",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Anand%20Prakash%20Raw.jpg",
            specialization: "",
            email: "anandprao0712@gmail.com",
            phone: "9076853989",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "B.Tech. (IT), M.Tech. (Computer Science and Technology)"
          },
          {
            id: 16,
            name: "Dr Ana Kumar",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Dr%20Ana%20Kumar.jpeg",
            specialization: "",
            email: "anakumar98277@gmail.com",
            phone: "9529156840",
            experience: "2+ years",
            qualification: "PhD",
            education: "B.TECH, M.TECH, PHD"
          },
          {
            id: 17,
            name: "Kamala Kant Yadav",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Kamala%20Kant%20Yadav.png",
            specialization: "",
            email: "kamlakant17@gmail.com",
            phone: "7985755009",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.Tech (CSE), B.Tech (IT), UGC-NET and GATE Qualified"
          },
          {
            id: 18,
            name: "Deepshikha Gautam",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Deepshikha.jpg",
            specialization: "",
            email: "deepgtm27@gmail.com",
            phone: "8800753935",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "Integrated B.tech- M.tech"
          },
          {
            id: 19,
            name: "Shiromani Balmukund Rahi",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Nidhi%20Sahni%20(SUBSR%20Assistant%20Professor).jpg",
            specialization: "",
            email: "sbrahi@gmail.com",
            phone: "9264991975",
            experience: "2+ years",
            qualification: "PhD",
            education: "M.Tech, Ph.D. PDF"
          },
          {
            id: 20,
            name: "Diazy Singh",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/daizy%20singh.jpeg",
            specialization: "",
            email: "DAIZY.SINGH2511@GMAIL.COM",
            phone: "8750698263",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.tec (wireless and communications Network) B.tec (Electronic and communications Engineering)"
          },
          {
            id: 21,
            name: "Brijesh Sahani",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Brijesh%20Sahani%20(1).jpeg",
            specialization: "",
            email: "brijesh08.sahani07@gmail.com",
            phone: "9559368331",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.Tech (ECE)"
          },
          {
            id: 22,
            name: "Neeraj Kaushik",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/kaushik.jpg",
            specialization: "",
            email: "kaushikneeraj6178@gmail.com",
            phone: "9999929416",
            experience: "2+ years",
            qualification: "MCA",
            education: "MCA,PhD(pursuing)"
          },
          {
            id: 23,
            name: "Sugandha Yadav",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Sugandha.jpg",
            specialization: "",
            email: "sugandhayadav555@gmail.com",
            phone: "9899494690",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M Tech"
          },
          {
            id: 24,
            name: "Aniruddh Singh",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Aniruddh.jpg",
            specialization: "",
            email: "aniruddhsingh3011@gmail.com",
            phone: "7291951506",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "Integrated dual degree Btech+Mtech"
          },
          {
            id: 25,
            name: "Sarvesh Kumar",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Mathematics%20with%20S-4.jpg",
            specialization: "",
            email: "sarve9787@gmail.com",
            phone: "9540509787",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "B.Tech. and M.Tech."
          },
          {
            id: 26,
            name: "Bhupendra Kumar",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Bhupendra%20Kumar.jpg",
            specialization: "",
            email: "bkumar1984@gmail.com",
            phone: "9015642832",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.tech"
          },
          {
            id: 27,
            name: "Preeti Paras",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/PREETI%20SINGH.jpg",
            specialization: "",
            email: "preetiparas100@gmail.com",
            phone: "7599997481",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.Tech & MCA"
          },
          {
            id: 28,
            name: "Preeti Bhati",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/preeti%20bhati.jpg",
            specialization: "",
            email: "bpreeti.bhati@gmail.com",
            phone: "9910849698",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "B.Tech , M.Tech"
          },
          {
            id: 29,
            name: "Prakash Chandra Saraswat",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Prakash%20Chandra%20Saraswat.jpeg",
            specialization: "",
            email: "prakash.saraswat73@gmail.com",
            phone: "9803199996",
            experience: "2+ years",
            qualification: "MCA",
            education: "M.C.A.,M.B.A"
          },
          {
            id: 30,
            name: "Usman Ahmad",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/Usman%20Ahmad.jpg",
            specialization: "",
            email: "usmanahmad7866692@gmail.com",
            phone: "9013858872",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "M.Tech"
          },
          {
            id: 31,
            name: "Atul Kumar",
            title: "Assistant Professor",
            department: "OCFD",
            image: "https://www.gbu.ac.in/USICT/media/img/faculty/atul%20kumar.jpg",
            specialization: "",
            email: "atulk9888@gmail.com",
            phone: "9891007332",
            experience: "2+ years",
            qualification: "M.Tech",
            education: "B.Tech,M.Tech"
          }
        ]
      }
    }
  };

  // Convert hierarchical faculty data to flat array
 const getAllFaculty = () => {
    const all = [];
    Object.entries(facultyData).forEach(([deptId, dept]) => {
      Object.values(dept.faculty).forEach(levelList => {
        levelList.forEach(entry => {
          all.push({
            ...entry,
            deptId
          });
        });
      });
    });
    return all;
  };
  const filteredFaculty = getAllFaculty().filter(faculty => {
     const matchesSearch = 
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (faculty.specialization|| '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesDepartment = selectedDepartment === 'All' || faculty.deptId === selectedDepartment;
const expYears = parseInt(faculty.experience) || 0;
   const matchesExperience =
      selectedExperience === 'All' ||
      (selectedExperience === '0-5 years' && expYears <= 5) ||
      (selectedExperience === '6-10 years' && expYears >= 6 && expYears <= 10) ||
      (selectedExperience === '11-15 years' && expYears >= 11 && expYears <= 15) ||
      (selectedExperience === '16+ years' && expYears >= 16);

  const matchesQualification = selectedQualification === 'All' || faculty.qualification === selectedQualification;

  return matchesSearch && matchesDepartment && matchesExperience && matchesQualification;
  });

  const clearFilters = () => {
    setSelectedDepartment('All');
    setSelectedExperience('All');
    setSelectedQualification('All');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Dark Overlay */}

<BannerSection
        title="Meet Our Faculty Members"
        subtitle="Dedicated to Excellence in Teaching, Research, and Innovation"
        bgtheme={5}
        />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Department Pills */}
        <div className="flex flex-wrap gap-4 mb-8">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2
                ${selectedDepartment === dept.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {dept.name}
              <span className={`${
                selectedDepartment === dept.id ? 'bg-blue-700' : 'bg-gray-100'
              } px-2 py-0.5 rounded-full text-sm`}>
                {dept.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search faculty by name, designation, specialization, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
        </div>

          <div className="mt-4 flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Filter className="w-4 h-4" />
              <span>More Filters</span>
            </button>
            {(selectedDepartment !== 'All' || selectedExperience !== 'All' || selectedQualification !== 'All' || searchTerm) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 text-red-600 hover:text-red-700"
              >
                <X className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            )}
          </div>
        </div>

        {showFilters && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {experienceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Qualification</label>
                <select
                  value={selectedQualification}
                  onChange={(e) => setSelectedQualification(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {qualifications.map((qual) => (
                    <option key={qual} value={qual}>{qual}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Department Sections */}
         {['cse', 'it', 'ece', 'ocfd'].map((deptId) => {
  // Get department data
  const deptData = facultyData[deptId];
  
  // ✅ Get filtered faculty for this department only
  const deptFilteredFaculty = filteredFaculty.filter(f => f.deptId === deptId);

  // Only render if any match
  if (deptFilteredFaculty.length > 0) {
    return (
      <div key={deptId} className="mb-12">
        <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/assets/GBU.webp)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70" />

          <div className="relative h-full flex flex-col justify-center px-8 py-6">
            <h2 className="text-3xl font-bold text-white mb-2">{deptData.name}</h2>
            <p className="text-gray-300 text-lg">{deptData.shortName} Department</p>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] font-bold text-white/10">
              {deptData.shortName}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {deptFilteredFaculty.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{faculty.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{faculty.title}</p>
                  <div className="w-full space-y-3 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-semibold text-gray-600 mb-1">Specialization</p>
                      <p className="text-gray-800">{faculty.specialization || "N/A"}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-blue-600">{faculty.experience}</p>
                        <p className="text-xs text-gray-600">Experience</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-green-600">{faculty.publications || "N/A"}</p>
                        <p className="text-xs text-gray-600">Publications</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-semibold text-gray-600 mb-1">Education</p>
                      <p className="text-sm text-gray-800">{faculty.education}</p>
                    </div>
                  </div>
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{faculty.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{faculty.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
})}

      </div>
    </div>
  );
};

export default Faculty;
