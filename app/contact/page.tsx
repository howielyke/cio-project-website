
import { Metadata } from 'next';
import { AudienceInquiryForm } from '@/components/audience-inquiry-form';
import { MessageSquare, Users, Lightbulb, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - The CIO Project',
  description: 'Submit questions, topic suggestions, and inquiries to The CIO Project hosts.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Connect with The CIO Project
            </h1>
            <p className="text-xl sm:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Share your questions, suggest topics, or reach out to Howie and Brian. 
              Your input shapes our conversations.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ask Questions</h3>
              <p className="text-gray-600">Have questions for our hosts? We'd love to address them on the show.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Suggest Topics</h3>
              <p className="text-gray-600">Know a hot tech topic we should cover? Let us know what interests you.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recommend Guests</h3>
              <p className="text-gray-600">Know someone who'd be great on the show? Introduce us!</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">General Inquiries</h3>
              <p className="text-gray-600">Have other questions or feedback? We're here to listen.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AudienceInquiryForm />
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Connect</h2>
          <div className="flex justify-center">
            <div className="bg-blue-50 rounded-lg p-6 max-w-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Response Time</h3>
              <p className="text-gray-600 mb-4">We typically respond within</p>
              <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                24-48 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
