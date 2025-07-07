
import { SponsorForm } from '@/components/sponsor-form';
import { Target, Users, TrendingUp, Award, CheckCircle, Mic } from 'lucide-react';

const audienceStats = [
  {
    icon: Users,
    stat: 'C-Suite',
    description: 'Primary audience of current CIOs, CTOs, and CISOs'
  },
  {
    icon: Target,
    stat: '85%',
    description: 'Technology decision-makers and influencers'
  },
  {
    icon: TrendingUp,
    stat: 'Growing',
    description: 'Rapidly expanding community of IT leaders'
  },
  {
    icon: Award,
    stat: 'Premium',
    description: 'High-value audience with significant budgets'
  }
];

const benefits = [
  'Direct access to C-suite technology decision-makers',
  'Association with trusted, authentic industry voices',
  'Targeted reach to IT budget holders and influencers',
  'Brand integration in high-quality, professional content',
  'Long-term visibility through evergreen podcast content',
  'Cross-promotion across multiple platforms and channels'
];

const opportunities = [
  {
    title: 'Episode Sponsorship',
    description: 'Full episode sponsorship with host-read ads and content integration',
    features: ['Pre-roll and mid-roll mentions', 'Host endorsement', 'Show notes inclusion', 'Social media promotion']
  },
  {
    title: 'Series Partnership',
    description: 'Multi-episode partnership with deeper brand integration',
    features: ['Exclusive category sponsorship', 'Custom content creation', 'Event collaboration', 'Thought leadership opportunities']
  },
  {
    title: 'Custom Programs',
    description: 'Tailored sponsorship packages designed around your specific goals',
    features: ['Branded content series', 'Executive interviews', 'Industry roundtables', 'Event partnerships']
  }
];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Partner with The CIO Project
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Reach the most influential technology leaders through authentic conversations 
              that drive real engagement. Join us in creating content that matters to the 
              C-suite executives who make critical technology decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-blue-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why The CIO Project?
              </h2>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                In a crowded marketplace, authentic trust and genuine engagement are rare. 
                Our hosts' credibility and our commitment to real conversations create 
                an environment where your message resonates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {audienceStats.map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-amber-500 flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{item.stat}</div>
                    <div className="text-blue-100 text-sm">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Partnership Benefits
                </h2>
                <p className="text-lg text-gray-600">
                  When you partner with The CIO Project, you're not just buying ad space - 
                  you're joining a conversation that your target audience genuinely values.
                </p>
              </div>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-8 border border-slate-300">
                <div className="h-full flex flex-col justify-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
                    <Mic className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">Authentic Integration</h3>
                    <p className="text-gray-600">
                      Our sponsors become part of the conversation, not interruptions to it. 
                      Howie and Brian personally vet and endorse every partnership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Sponsorship Opportunities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the partnership level that aligns with your goals and budget. 
                All options include our commitment to authentic, value-driven integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                    <p className="text-gray-600">{opportunity.description}</p>
                  </div>

                  <ul className="space-y-3 list-disc list-inside">
                    {opportunity.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 text-left">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to reach the technology leaders who matter most to your business? 
              Let's discuss how The CIO Project can help you achieve your marketing goals.
            </p>
          </div>

          <SponsorForm />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our hosts bring decades of credibility and established relationships within 
              the technology leadership community. When they endorse a partner, 
              it carries real weight.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="text-xl font-bold text-amber-400">40+</div>
                <div className="text-sm text-gray-400">Years Combined Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-amber-400">Fortune 500</div>
                <div className="text-sm text-gray-400">Company Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-amber-400">C-Suite</div>
                <div className="text-sm text-gray-400">Current Roles</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-amber-400">Global</div>
                <div className="text-sm text-gray-400">Industry Recognition</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
