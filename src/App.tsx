import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Store, ExternalLink, Code2, ChevronDown, FileText, Briefcase, Calendar, Award, Download, Menu, X, Apple, Smartphone } from 'lucide-react';

import myImage from './assets/images/my_image.jpeg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">
  <span className="flex items-center">
  <img
  src={myImage}  // Importing and using the image
  alt="Profile"
  className="w-10 h-10 mr-2 rounded-full"
/>

    Masihur Rohman
  </span>
</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#experience" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Experience</a>
              <a href="#projects" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Projects</a>
              <a href="#skills" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Skills</a>
              <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contact</a>
              <a 
                href="#" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                onClick={(e) => {
                  e.preventDefault(); // Prevents the default action (navigation)
                  
                  // Optional: Show an alert or any pre-download action
                  alert("Resume download will start now!");
                  
                  // Trigger the download by creating a temporary <a> tag and simulating a click
                  const link = document.createElement('a');
                  link.href = "/src/assets/resume.pdf"; // Path to your file
                  link.download = "Resume"; // Name of the downloaded file
                  document.body.appendChild(link); // Append the link to the body
                  link.click(); // Programmatically click the link to start the download
                  document.body.removeChild(link); // Clean up by removing the link element
                }}
              >
                Resume
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 border-t border-gray-100">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#" 
                  className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#experience" 
                  className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </a>
                <a 
                  href="#projects" 
                  className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#skills" 
                  className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-800 hover:text-blue-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a 
                  href="#" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all inline-block w-fit"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the default action (navigation)
                    
                    // Optional: Show an alert or any pre-download action
                    alert("Resume download will start now!");
                    
                    // Trigger the download by creating a temporary <a> tag and simulating a click
                    const link = document.createElement('a');
                    link.href = "/src/assets/resume.pdf"; // Path to your file
                    link.download = "Resume"; // Name of the downloaded file
                    document.body.appendChild(link); // Append the link to the body
                    link.click(); // Programmatically click the link to start the download
                    document.body.removeChild(link); // Clean up by removing the link element
                  }}
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-600/5" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase animate-fade-in">
                Available for Freelance Projects
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Flutter Developer
              <span className="block text-2xl md:text-3xl text-blue-600 mt-4 font-normal">
                Transforming Ideas into Seamless Mobile Experiences
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              With 3.5 years of expertise in crafting beautiful, high-performance mobile applications 
              that delight users across iOS and Android platforms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <a 
                href="#contact" 
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Let's Work Together
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#projects" 
                className="group bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                View My Projects
                <ChevronDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
              </a>
              <a
                href="./assets/resume.pdf" // Path to your resume file in the public directory
                download="Resume" // The name of the downloaded file
                className="group bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault(); // Prevents the default action (navigation)
                  
                  // Optional: Show an alert or any pre-download action
                  alert("Resume download will start now!");
                  
                  // Trigger the download by creating a temporary <a> tag and simulating a click
                  const link = document.createElement('a');
                  link.href = "/src/assets/resume.pdf"; // Path to your file
                  link.download = "Resume"; // Name of the downloaded file
                  document.body.appendChild(link); // Append the link to the body
                  link.click(); // Programmatically click the link to start the download
                  document.body.removeChild(link); // Clean up by removing the link element
                }}
              >
                Download Resume
                <Download className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-600" />
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src='src/assets/images/about_me.jpeg'
                  alt="Professional Flutter Developer" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Who I Am</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  I'm a passionate mobile developer with 3.5 years of experience creating beautiful, 
                  high-performance applications. I specialize in Flutter development while also having 
                  expertise in native iOS and Android development.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  My approach combines technical expertise with a deep understanding of user experience 
                  design principles. I believe that great apps not only function flawlessly but also 
                  delight users with intuitive interfaces and smooth interactions.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center text-blue-600">
                    <Award className="w-5 h-5 mr-2" />
                    <span>3+ Published Apps</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Briefcase className="w-5 h-5 mr-2" />
                    <span>Freelance & Agency Experience</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>3.5 Years in Mobile Development</span>
                  </div>
                </div>
                <a 
                  href="#experience" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  View My Experience
                  <ChevronDown className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="group transform transition-all duration-300 hover:scale-105">
              <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-blue-100">
                <p className="text-5xl font-bold text-blue-600 mb-3">3.5+</p>
                <p className="text-gray-700 font-medium text-lg">Years of Experience</p>
                <p className="text-gray-500 text-sm mt-2">Building Production Apps</p>
              </div>
            </div>
            <div className="group transform transition-all duration-300 hover:scale-105">
              <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-blue-100">
                <p className="text-5xl font-bold text-blue-600 mb-3">3+</p>
                <p className="text-gray-700 font-medium text-lg">Published Apps</p>
                <p className="text-gray-500 text-sm mt-2">App & Play Store</p>
              </div>
            </div>
            <div className="group transform transition-all duration-300 hover:scale-105">
              <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-blue-100">
                <p className="text-5xl font-bold text-blue-600 mb-3">100%</p>
                <p className="text-gray-700 font-medium text-lg">Client Satisfaction</p>
                <p className="text-gray-500 text-sm mt-2">Across All Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Work History</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey in mobile application development, showcasing my growth and expertise.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-blue-600 pl-10 pb-10">
              {/* Timeline items */}
              <div className="mb-16 relative">
                <div className="absolute -left-14 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Software Engineer</h3>
                    <div className="flex items-center text-blue-600 mt-2 md:mt-0">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>2023 - Present</span>
                    </div>
                  </div>
                  <h4 className="text-xl text-blue-600 mb-4">Evident BD LTD</h4>
                  <p className="text-gray-600 mb-6">
                    Lead the development of complex mobile applications using Flutter, managing a team of junior developers
                    and implementing best practices for code quality and performance optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Flutter</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Android</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Swift</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">IOS</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Firebase</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Supabase</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Team Leadership</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Architecture Design</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-16 relative">
                <div className="absolute -left-14 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Mobile App Developer</h3>
                    <div className="flex items-center text-blue-600 mt-2 md:mt-0">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>2021 - 2023</span>
                    </div>
                  </div>
                  <h4 className="text-xl text-blue-600 mb-4">Glamworld IT Solutions</h4>
                  <p className="text-gray-600 mb-6">
                    Developed and maintained multiple Flutter applications for clients across various industries,
                    implementing complex UI designs and integrating with RESTful APIs and third-party services.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Flutter</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">REST APIs</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">State Management</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">UI/UX Implementation</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-14 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">Junior Mobile Developer</h3>
                    <div className="flex items-center text-blue-600 mt-2 md:mt-0">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>2020 - 2021</span>
                    </div>
                  </div>
                  <h4 className="text-xl text-blue-600 mb-4">SA Softhub & IT.</h4>
                  <p className="text-gray-600 mb-6">
                    Started my journey in mobile development, learning Flutter and contributing to the development
                    of a fitness tracking application. Collaborated with senior developers to improve code quality and performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Flutter Basics</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Dart</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Version Control</span>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Agile Development</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="#" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault(); // Prevents the default action (navigation)
                  
                  // Optional: Show an alert or any pre-download action
                  alert("Resume download will start now!");
                  
                  // Trigger the download by creating a temporary <a> tag and simulating a click
                  const link = document.createElement('a');
                  link.href = "/src/assets/resume.pdf"; // Path to your file
                  link.download = "Resume"; // Name of the downloaded file
                  document.body.appendChild(link); // Append the link to the body
                  link.click(); // Programmatically click the link to start the download
                  document.body.removeChild(link); // Clean up by removing the link element
                }}
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Full Resume
              </a>
            </div>
          </div>
        </div>
      </section>

{/* Project Section */}
<section id="projects" className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Discover some of my most impactful mobile applications that showcase 
        my expertise in Flutter development.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {[
        {
          title: "Attendance Keeper- HR Solution",
          description: "Attendance Keeper streamlines HR management with Flutter, Firebase, FastAPI, TensorFlow, and VGGFace technologies for automated attendance records, employee monitoring, and real-time data collection. This mobile app includes advanced facial recognition and spoof detection to monitor employee behaviors and performance, making it an essential tool for businesses seeking efficient workforce management.",
          image: "src/assets/images/attendance_keeper.png?w=800&auto=format&fit=crop&q=60",
          tags: ["Flutter", "Firebase", "Provider"],
          appStoreUrl: "https://apps.apple.com/us/app/attendance-keeper-hr-solution/id1605725955",
          playStoreUrl: "https://play.google.com/store/apps/details?id=net.attendancekeeper.app&pcampaignid=web_share"
        },
        {
          title: "Westace Clothing",
          description: "Westace Clothing is a stylish e-commerce app offering a wide range of fashion products for all your wardrobe needs.",
          image: "src/assets/images/westace_clothin.png?w=800&auto=format&fit=crop&q=60",
          tags: ["Flutter", "REST API", "Stripe"],
          appStoreUrl: "https://apps.apple.com/us/app/westace-clothing/id1615741648",
          playStoreUrl: "https://play.google.com/store/apps/details?id=com.westaceclothing.westaceclothing&pcampaignid=web_share"
        },
        {
          title: "Inventory Keeper",
          description: "Inventory Keeper is a store management app that helps track stock, manage inventory, and streamline operations for businesses.",
          image: "src/assets/images/inventory_keeper.png?w=800&auto=format&fit=crop&q=60",
          tags: ["Flutter", "WebSocket", "Provider"],
          appStoreUrl: "https://apps.apple.com/us/app/inventory-keeper-application/id1573838848",
          playStoreUrl: "https://play.google.com/store/apps/details?id=net.inventorykeeper.android&pcampaignid=web_share"
        },
        {
          title: "MYE Companion App",
          description: "MYE Companion App is a comprehensive tool to efficiently manage your e-commerce store, track orders, and monitor inventory.",
          image: "src/assets/images/mye.png?w=800&auto=format&fit=crop&q=60",
          tags: ["Flutter", "WebSocket", "Provider"],
          appStoreUrl: "https://apps.apple.com/us/app/mye-companion-app/id1636452773",
          playStoreUrl: "https://play.google.com/store/apps/details?id=com.evidentbd.mye_companion_app&pcampaignid=web_share"
        }
      ].map((project, index) => (
        <div 
          key={index} 
          className="group bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className="relative overflow-hidden">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href={project.appStoreUrl} 
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Store className="w-5 h-5 mr-2" />
                App Store
              </a>
              <a 
                href={project.playStoreUrl} 
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Store className="w-5 h-5 mr-2" />
                Play Store
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and methodologies I use to build 
              exceptional mobile applications.
            </p>
          </div>
          
          {/* Platform Skills */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Development Platforms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Code2 className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-900 mb-3">Flutter</h3>
                <p className="text-gray-600 mb-4">Cross-platform development with a single codebase for iOS and Android applications.</p>
                <p className="text-blue-600 text-sm font-medium">Expert Level</p>
              </div>
              
              <div className="group p-8 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Apple className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-900 mb-3">iOS Native</h3>
                <p className="text-gray-600 mb-4">Native iOS development using Swift and SwiftUI for high-performance Apple applications.</p>
                <p className="text-blue-600 text-sm font-medium">Intermediate Level</p>
              </div>
              
              <div className="group p-8 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <Smartphone className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl text-gray-900 mb-3">Android Native</h3>
                <p className="text-gray-600 mb-4">Native Android development using Kotlin and Jetpack Compose for optimized Android apps.</p>
                <p className="text-blue-600 text-sm font-medium">Intermediate Level</p>
              </div>
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Dart', level: 'Expert' },
              { name: 'Swift', level: 'Intermediate' },
              { name: 'Kotlin', level: 'Intermediate' },
              { name: 'Firebase', level: 'Advanced' },
              { name: 'REST APIs', level: 'Advanced' },
              { name: 'State Management', level: 'Expert' },
              { name: 'UI/UX Design', level: 'Advanced' },
              { name: 'Clean Architecture', level: 'Advanced' },
              { name: 'Git', level: 'Advanced' },
              { name: 'CI/CD', level: 'Intermediate' },
              { name: 'App Store Connect', level: 'Advanced' },
              { name: 'Google Play Console', level: 'Advanced' }
            ].map((skill, index) => (
              <div 
                key={index}
                className="group p-6 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Code2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">{skill.name}</h3>
                <p className="text-blue-600 text-sm font-medium">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring your mobile app idea to life? Let's discuss how we can work together 
              to create something amazing.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="mailto:masihur96@gmail.com"
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Me</h3>
                <p className="text-gray-600">masihur96@gmail.com</p>
              </a>
              <a 
                href="tel:+8801740719204"
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Me</h3>
                <p className="text-gray-600">+8801740719204</p>
              </a>
              <a 
                href="https://github.com/masihur96"
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">GitHub</h3>
                <p className="text-gray-600">View My Open Source Work</p>
              </a>
              <a 
                href="https://www.linkedin.com/in/masihur-rohman-279b201b6/"
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">LinkedIn</h3>
                <p className="text-gray-600">Let's Connect Professionally</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p className="mb-4">© {new Date().getFullYear()} Masihhur Rohman. All rights reserved.</p>
            <p className="text-sm">
              Crafted with passion using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;