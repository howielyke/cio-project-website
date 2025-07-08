
import { HostProfile } from '@/components/host-profile';
import { Quote, Mic, Users, Target } from 'lucide-react';
import Link from 'next/link';

const hosts = [
  {
    name: 'Howie L Lyke',
    title: 'CEO & Veteran IT Strategist',
    company: 'Sherpa Techs LLC',
    bio: 'With nearly four decades of IT leadership strategy experience, Howie brings unparalleled insights into technology transformation and executive leadership. His career spans multiple industries and organizational transformations, making him one of the most respected voices in enterprise technology strategy.',
    experience: '40+ years in IT leadership',
    achievements: [
      'CEO of Sherpa Techs LLC',
      'Led digital transformations for Fortune 500 companies across multiple industries',
      'Pioneered innovative IT governance frameworks adopted by major corporations',
      'Mentored dozens of emerging CIO leaders throughout his career',
      'Expert in enterprise architecture and strategic technology planning'
    ],
    image: '/howie-speaking.png',
    linkedinUrl: '#'
  },
  {
    name: 'Brian Shield',
    title: 'SVP, CTO & CIO',
    company: 'Boston Red Sox',
    bio: 'Brian serves as the SVP, CTO & CIO of the Boston Red Sox and National Chair of InspireCIO, bringing cutting-edge technology leadership to both sports entertainment and the broader IT community. His unique position at the intersection of sports, technology, and fan experience provides fascinating insights into modern technology challenges.',
    experience: 'Current C-suite technology executive',
    achievements: [
      'SVP, CTO & CIO at Boston Red Sox',
      'National Chair of InspireCIO organization promoting IT leadership excellence',
      'Champion of diversity and inclusion in technology workforce development',
      'Expert in fan experience technology and sports industry digital transformation',
      'Recognized leader in applying enterprise technology to entertainment industry'
    ],
    image: '/brian-shield.jpeg',
    linkedinUrl: '#'
  }
];

const values = [
  {
    icon: Quote,
    title: 'Authentic Conversations',
    description: 'We believe the best insights come from honest, unfiltered discussions about real challenges and experiences.'
  },
  {
    icon: Mic,
    title: 'Peer-to-Peer Learning',
    description: 'Our content is by technology leaders, for technology leaders - creating genuine value for our executive audience.'
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'We\'re fostering a community where current and aspiring IT leaders can learn, connect, and grow together.'
  },
  {
    icon: Target,
    title: 'Actionable Insights',
    description: 'Every conversation aims to provide practical wisdom that listeners can apply in their own leadership journey.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About The CIO Project
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The CIO Project was born from a simple observation: the technology leadership space 
              was filled with sanitized corporate content, but lacked the authentic, unfiltered 
              conversations that actually drive meaningful change. We created this podcast to fill 
              that gap with "Confessions; Real Talk; Real Tech."
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Mission
            </h2>
            <blockquote className="text-xl md:text-2xl text-blue-100 italic leading-relaxed">
              "To create a space where technology leaders can have the conversations that matter most - 
              the ones that happen behind closed doors, filled with real challenges, honest failures, 
              and hard-won wisdom."
            </blockquote>
            <div className="pt-4">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500 text-gray-900 font-medium">
                <Mic className="h-5 w-5 mr-2" />
                Beverage in hand, real talk guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What We Stand For
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our approach to technology leadership conversations is grounded in these core principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center space-y-4 p-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-900 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Hosts */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Meet Your Hosts
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Two industry veterans who bring decades of real-world experience and 
                complementary perspectives to every conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {hosts.map((host, index) => (
                <HostProfile key={host.name} host={host} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Story Behind the Podcast */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why We Started This
              </h2>
            </div>

            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                The CIO Project emerged from countless conversations between technology leaders who 
                were hungry for something different. Too many industry events featured the same 
                polished presentations. Too many podcasts stuck to safe, corporate-approved talking 
                points. Meanwhile, the most valuable learning happened in informal settings - 
                over coffee, during networking breaks, or in those honest moments after the 
                official presentation ended.
              </p>

              <p>
                Howie and Brian recognized this gap and decided to create the podcast they themselves 
                wanted to listen to. A show where a CIO could admit that their last digital 
                transformation didn't go as planned. Where a CTO could share the leadership lessons 
                they learned from their biggest failure. Where real challenges get real discussion, 
                and where the audience consists of peers who understand the weight of technology 
                leadership decisions.
              </p>

              <p>
                The "beverage in hand" ethos isn't just about creating a relaxed atmosphere - it's 
                about acknowledging that the best business conversations often happen in informal 
                settings where people can be genuinely themselves. That's the environment we're 
                recreating in audio form, one conversation at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Join the Conversation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to be part of a community that values authentic leadership discussions? 
              Start with our latest episode and discover what real talk sounds like.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/latest" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block text-center">
              Listen to Latest Episode
            </Link>
            <Link href="/episodes" className="border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block text-center">
              View All Episodes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
