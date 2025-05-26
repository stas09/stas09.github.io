export default function Team() {
  // Team members data from the research team
  const teamMembers = [
    {
      id: 1,
      name: "Stanislav Puida",
      role: "Security Specialist",
      department: "Business Digitalization Management",
      expertise: "Penetration Testing, Vulnerability Assessment",
      image: "/avatar1.png",
      bio: "Specializes in business security assessments with over 5 years of experience in cybersecurity and penetration testing."
    },
    {
      id: 2,
      name: "Damla Goztas",
      role: "Communication Specialist",
      department: "Communication Studies",
      expertise: "Security Awareness Training, Phishing Campaign Design",
      image: "/avatar2.png",
      bio: "Expert in designing social engineering tests and developing effective security awareness training programs."
    },
    {
      id: 3,
      name: "Deimantė Laureckytė",
      role: "Information Security Analyst",
      department: "Information Management",
      expertise: "Compliance Frameworks, Risk Assessment",
      image: "/avatar3.png",
      bio: "Focuses on helping businesses meet industry compliance requirements through comprehensive security assessments."
    },
    {
      id: 4,
      name: "Jr. Assist. Prof. Beldyga Natalia Ewa",
      role: "Academic Advisor",
      department: "Cybersecurity Research",
      expertise: "Cybersecurity Research, Threat Intelligence",
      image: "/avatar4.png",
      bio: "Provides academic oversight and research-based methodologies to ensure the assessment services meet the highest industry standards."
    }
  ];

  return (
    <div className="px-2">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Our Expert Team</h1>
        <p className="text-gray-600">
          Meet the cybersecurity specialists who will help protect your business from emerging threats.
        </p>
      </div>

      {/* Team Overview */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
            <i className="bi bi-shield-check text-white text-xl"></i>
          </div>
          <div className="ml-4">
            <h2 className="font-semibold text-gray-800 text-lg">World-Class Security Expertise</h2>
            <p className="text-gray-600 mt-1">
              Our team combines academic research with practical industry experience to deliver comprehensive 
              cybersecurity assessment services. We specialize in identifying vulnerabilities before 
              attackers can exploit them, helping organizations strengthen their security posture.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="flex items-center p-2 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="bi bi-shield text-secondary"></i>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium">Penetration Testing</h3>
                  <p className="text-xs text-gray-600">Identify exploitable vulnerabilities</p>
                </div>
              </div>
              
              <div className="flex items-center p-2 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="bi bi-envelope text-secondary"></i>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium">Phishing Simulations</h3>
                  <p className="text-xs text-gray-600">Test employee awareness</p>
                </div>
              </div>
              
              <div className="flex items-center p-2 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="bi bi-mortarboard text-secondary"></i>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium">Security Training</h3>
                  <p className="text-xs text-gray-600">Enhance staff awareness</p>
                </div>
              </div>
              
              <div className="flex items-center p-2 bg-blue-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="bi bi-file-earmark-text text-secondary"></i>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium">Compliance Assessment</h3>
                  <p className="text-xs text-gray-600">Meet regulatory requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">{member.name.charAt(0)}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm font-medium text-secondary">{member.role}</p>
              <p className="text-xs text-gray-600 mb-3">{member.department}</p>
              
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Expertise</h4>
              <p className="text-sm text-gray-700 mb-3">{member.expertise}</p>
              
              <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
              
              <div className="flex space-x-2">
                <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
                  Contact
                </button>
                <button className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications and Credentials */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Certifications & Credentials</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2">
              <i className="bi bi-patch-check-fill text-2xl text-blue-500"></i>
            </div>
            <h3 className="font-medium text-sm text-center">Certified Ethical Hacker (CEH)</h3>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2">
              <i className="bi bi-patch-check-fill text-2xl text-blue-500"></i>
            </div>
            <h3 className="font-medium text-sm text-center">Certified Information Systems Security Professional (CISSP)</h3>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2">
              <i className="bi bi-patch-check-fill text-2xl text-blue-500"></i>
            </div>
            <h3 className="font-medium text-sm text-center">Offensive Security Certified Professional (OSCP)</h3>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-2">
              <i className="bi bi-patch-check-fill text-2xl text-blue-500"></i>
            </div>
            <h3 className="font-medium text-sm text-center">CompTIA Security+ Certification</h3>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="font-semibold text-primary">TS</span>
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-800">Tech Solutions Ltd</h3>
                <p className="text-xs text-gray-600">Financial Sector</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "The team's detailed phishing assessment helped us identify critical vulnerabilities in our email security. Their recommendations led to a 70% reduction in successful phishing attempts."
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="font-semibold text-primary">HC</span>
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-800">HealthCare Connect</h3>
                <p className="text-xs text-gray-600">Healthcare Industry</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "As a healthcare provider, compliance is critical for us. The team's assessment helped us meet HIPAA requirements while strengthening our overall security posture."
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="font-semibold text-primary">RM</span>
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-800">Retail Matters</h3>
                <p className="text-xs text-gray-600">E-commerce</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "Their security training transformed our team's approach to cybersecurity. We've seen a measurable improvement in our ability to identify and report potential threats."
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-lg shadow-md p-6 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-2">Ready to secure your business?</h2>
          <p className="mb-6">Our team of experts is ready to help you assess and strengthen your cybersecurity posture.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
            <button className="bg-secondary border border-white text-white font-medium py-2 px-6 rounded-lg hover:bg-secondary-dark transition-colors">
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}