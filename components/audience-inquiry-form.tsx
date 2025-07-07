
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Mail, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export function AudienceInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedInquiryType, setSelectedInquiryType] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      inquiryType: selectedInquiryType,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/audience-inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: 'Thank you for reaching out!',
          description: 'We\'ve received your message and will get back to you soon.',
        });
        (e.target as HTMLFormElement).reset();
        setSelectedInquiryType('');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPlaceholderText = () => {
    switch (selectedInquiryType) {
      case 'question':
        return 'What would you like to ask Howie and Brian? Your question might be featured on an upcoming episode!';
      case 'topic-suggestion':
        return 'What technology topics, trends, or issues would you like to hear discussed on the show?';
      case 'guest-recommendation':
        return 'Who do you think would make a great guest? Please include their name, company, and why you\'d recommend them.';
      case 'general':
        return 'Share your thoughts, feedback, or any other inquiries you have for the team.';
      default:
        return 'Tell us more about your inquiry...';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="podcast-card">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Get in Touch
          </CardTitle>
          <p className="text-gray-600 leading-relaxed">
            Whether you have questions for our hosts, ideas for future episodes, or want to suggest 
            a guest, we'd love to hear from you. Your input helps shape The CIO Project.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Your Name *
                </label>
                <Input
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="border-gray-300 focus:border-red-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Address *
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="border-gray-300 focus:border-red-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                Type of Inquiry *
              </label>
              <Select value={selectedInquiryType} onValueChange={setSelectedInquiryType} required>
                <SelectTrigger className="border-gray-300 focus:border-red-500">
                  <SelectValue placeholder="What would you like to discuss?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="question">Question for the Hosts</SelectItem>
                  <SelectItem value="topic-suggestion">Topic Suggestion</SelectItem>
                  <SelectItem value="guest-recommendation">Guest Recommendation</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Your Message *
              </label>
              <Textarea
                name="message"
                required
                placeholder={getPlaceholderText()}
                rows={6}
                className="border-gray-300 focus:border-red-500"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || !selectedInquiryType}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              We read every message and aim to respond within 24-48 hours. 
              Your information is kept private and secure.
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
