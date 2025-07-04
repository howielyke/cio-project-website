
import { Users, Target, Mic, Award } from 'lucide-react';

export function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
          About The CIO Project
        </h1>
        <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
          The CIO Project is a podcast dedicated to exploring the minds and strategies of 
          Chief Information Officers and technology leaders who are shaping the future of enterprise.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-[#1A1A1A] rounded-lg p-8 mb-12">
        <div className="flex items-center mb-6">
          <Target className="w-8 h-8 text-[#007BFF] mr-3" />
          <h2 className="text-3xl font-bold text-[#F5F5F5]">Our Mission</h2>
        </div>
        <p className="text-[#A0A0A0] leading-relaxed text-lg">
          We believe that the most valuable insights come from real conversations with real leaders. 
          Our mission is to provide a platform where Chief Information Officers can share their 
          experiences, challenges, and vision for the future of technology in enterprise environments. 
          Through authentic dialogue, we aim to bridge the gap between technical innovation and 
          business strategy.
        </p>
      </div>

      {/* What We Cover */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#F5F5F5] mb-8 text-center">What We Cover</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1A1A1A] rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Mic className="w-6 h-6 text-[#007BFF] mr-3" />
              <h3 className="text-xl font-bold text-[#F5F5F5]">Leadership & Strategy</h3>
            </div>
            <p className="text-[#A0A0A0]">
              Deep dives into technology leadership, organizational transformation, 
              and strategic decision-making in the digital age.
            </p>
          </div>
          
          <div className="bg-[#1A1A1A] rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-[#007BFF] mr-3" />
              <h3 className="text-xl font-bold text-[#F5F5F5]">Innovation & Technology</h3>
            </div>
            <p className="text-[#A0A0A0]">
              Exploring cutting-edge technologies, emerging trends, and how they're 
              being implemented in enterprise environments.
            </p>
          </div>
          
          <div className="bg-[#1A1A1A] rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-[#007BFF] mr-3" />
              <h3 className="text-xl font-bold text-[#F5F5F5]">Culture & Teams</h3>
            </div>
            <p className="text-[#A0A0A0]">
              Building high-performing technology teams, fostering innovation culture, 
              and managing change in complex organizations.
            </p>
          </div>
          
          <div className="bg-[#1A1A1A] rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-[#007BFF] mr-3" />
              <h3 className="text-xl font-bold text-[#F5F5F5]">Business Impact</h3>
            </div>
            <p className="text-[#A0A0A0]">
              How technology investments drive business outcomes, ROI measurement, 
              and aligning IT strategy with business objectives.
            </p>
          </div>
        </div>
      </div>

      {/* Host Information */}
      <div className="bg-[#1A1A1A] rounded-lg p-8">
        <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6 text-center">Meet Your Host</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 bg-gradient-to-br from-[#007BFF]/20 to-[#0056B3]/20 rounded-lg flex items-center justify-center">
            <img
              src="https://i.pinimg.com/originals/46/89/e5/4689e549611d93a14c9d4db8bb2e186c.png"
              alt="Host"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4">Alex Johnson</h3>
            <p className="text-[#A0A0A0] leading-relaxed mb-4">
              Alex Johnson is a seasoned technology executive and entrepreneur with over 15 years 
              of experience in enterprise technology. Having served as CIO at multiple Fortune 500 
              companies, Alex brings a unique perspective to conversations about technology leadership, 
              digital transformation, and the evolving role of the CIO.
            </p>
            <p className="text-[#A0A0A0] leading-relaxed">
              Through The CIO Project, Alex combines his passion for technology with his love of 
              storytelling to create meaningful conversations that provide value to both current 
              and aspiring technology leaders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
