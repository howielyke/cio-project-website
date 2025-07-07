
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatDistanceToNow } from 'date-fns';
import { Building, Mail, User, Calendar, DollarSign, MessageSquare, HelpCircle, Lightbulb, Users, Tag } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface Sponsor {
  id: string;
  name: string;
  email: string;
  company: string;
  title?: string | null;
  message?: string | null;
  budget?: string | null;
  createdAt: string;
  updatedAt: string;
}

interface AudienceInquiry {
  id: string;
  name: string;
  email: string;
  inquiryType: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

async function getSponsors(): Promise<Sponsor[]> {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/sponsors`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch sponsors');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching sponsors:', error);
    return [];
  }
}

async function getAudienceInquiries(): Promise<AudienceInquiry[]> {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/audience-inquiries`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch audience inquiries');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching audience inquiries:', error);
    return [];
  }
}

export default async function AdminPage() {
  const sponsors = await getSponsors();
  const audienceInquiries = await getAudienceInquiries();

  const getInquiryTypeInfo = (type: string) => {
    const typeInfo = {
      'question': { 
        label: 'Question for Hosts', 
        icon: HelpCircle, 
        color: 'text-blue-600', 
        bgColor: 'bg-blue-100' 
      },
      'topic-suggestion': { 
        label: 'Topic Suggestion', 
        icon: Lightbulb, 
        color: 'text-green-600', 
        bgColor: 'bg-green-100' 
      },
      'guest-recommendation': { 
        label: 'Guest Recommendation', 
        icon: Users, 
        color: 'text-purple-600', 
        bgColor: 'bg-purple-100' 
      },
      'general': { 
        label: 'General Inquiry', 
        icon: MessageSquare, 
        color: 'text-amber-600', 
        bgColor: 'bg-amber-100' 
      }
    };
    return typeInfo[type as keyof typeof typeInfo] || typeInfo.general;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="mt-1 text-sm text-gray-600">The CIO Project - Manage Submissions</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-sm bg-red-50 text-red-700 border-red-200">
                {sponsors.length} Sponsorship Inquiries
              </Badge>
              <Badge variant="outline" className="text-sm bg-blue-50 text-blue-700 border-blue-200">
                {audienceInquiries.length} Audience Inquiries
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="sponsors" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sponsors" className="flex items-center space-x-2">
              <Building className="h-4 w-4" />
              <span>Sponsorship Inquiries ({sponsors.length})</span>
            </TabsTrigger>
            <TabsTrigger value="audience" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Audience Inquiries ({audienceInquiries.length})</span>
            </TabsTrigger>
          </TabsList>

          {/* Sponsorship Submissions Tab */}
          <TabsContent value="sponsors" className="space-y-6">
            {sponsors.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Building className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No sponsorship inquiries yet</h3>
                  <p className="text-gray-600 text-center">Sponsorship inquiries will appear here when submitted.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {sponsors.map((sponsor) => (
                  <Card key={sponsor.id} className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-red-100 p-2 rounded-lg">
                            <Building className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg font-semibold text-gray-900">
                              {sponsor.company}
                            </CardTitle>
                            <div className="flex items-center space-x-2 mt-1">
                              <User className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{sponsor.name}</span>
                              {sponsor.title && (
                                <>
                                  <span className="text-gray-400">•</span>
                                  <span className="text-sm text-gray-600">{sponsor.title}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {formatDistanceToNow(new Date(sponsor.createdAt), { addSuffix: true })}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Contact Info */}
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <a 
                          href={`mailto:${sponsor.email}`}
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {sponsor.email}
                        </a>
                      </div>

                      {/* Budget */}
                      {sponsor.budget && (
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {sponsor.budget}
                          </Badge>
                        </div>
                      )}

                      {/* Message */}
                      {sponsor.message && (
                        <div className="bg-gray-50 rounded-lg p-4 mt-4">
                          <div className="flex items-start space-x-2 mb-2">
                            <MessageSquare className="h-4 w-4 text-gray-400 mt-0.5" />
                            <span className="text-sm font-medium text-gray-700">Message:</span>
                          </div>
                          <p className="text-sm text-gray-600 whitespace-pre-wrap leading-relaxed ml-6">
                            {sponsor.message}
                          </p>
                        </div>
                      )}

                      {/* Submission Details */}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>Submission ID: {sponsor.id}</span>
                          <span>
                            Submitted: {new Date(sponsor.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Audience Inquiries Tab */}
          <TabsContent value="audience" className="space-y-6">
            {audienceInquiries.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <MessageSquare className="h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No audience inquiries yet</h3>
                  <p className="text-gray-600 text-center">Audience inquiries will appear here when submitted.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {audienceInquiries.map((inquiry) => {
                  const typeInfo = getInquiryTypeInfo(inquiry.inquiryType);
                  const IconComponent = typeInfo.icon;
                  
                  return (
                    <Card key={inquiry.id} className="hover:shadow-lg transition-shadow duration-200">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={`${typeInfo.bgColor} p-2 rounded-lg`}>
                              <IconComponent className={`h-5 w-5 ${typeInfo.color}`} />
                            </div>
                            <div>
                              <CardTitle className="text-lg font-semibold text-gray-900">
                                {inquiry.name}
                              </CardTitle>
                              <div className="flex items-center space-x-2 mt-1">
                                <Tag className="h-4 w-4 text-gray-400" />
                                <Badge variant="outline" className={`text-xs ${typeInfo.bgColor} ${typeInfo.color} border-current`}>
                                  {typeInfo.label}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {formatDistanceToNow(new Date(inquiry.createdAt), { addSuffix: true })}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Contact Info */}
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <a 
                            href={`mailto:${inquiry.email}`}
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            {inquiry.email}
                          </a>
                        </div>

                        {/* Message */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start space-x-2 mb-2">
                            <MessageSquare className="h-4 w-4 text-gray-400 mt-0.5" />
                            <span className="text-sm font-medium text-gray-700">Message:</span>
                          </div>
                          <p className="text-sm text-gray-600 whitespace-pre-wrap leading-relaxed ml-6">
                            {inquiry.message}
                          </p>
                        </div>

                        {/* Submission Details */}
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>Submission ID: {inquiry.id}</span>
                            <span>
                              Submitted: {new Date(inquiry.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
