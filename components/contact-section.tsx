
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-[#A0A0A0]">
            Have a question or want to be featured on the show?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-6">
                Let's Connect
              </h3>
              <p className="text-[#A0A0A0] mb-8">
                We're always looking for innovative CIOs and technology leaders to share their insights. 
                Whether you're interested in being a guest, sponsoring the show, or just want to say hello, 
                we'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#007BFF]" />
                <div>
                  <p className="text-[#F5F5F5] font-medium">Email</p>
                  <p className="text-[#A0A0A0]">hello@cioproject.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#007BFF]" />
                <div>
                  <p className="text-[#F5F5F5] font-medium">Phone</p>
                  <p className="text-[#A0A0A0]">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#007BFF]" />
                <div>
                  <p className="text-[#F5F5F5] font-medium">Location</p>
                  <p className="text-[#A0A0A0]">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-[#111111] rounded-lg p-8">
            {showSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">
                  Thank You!
                </h3>
                <p className="text-[#A0A0A0]">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-[#F5F5F5] font-medium mb-2 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F5F5] focus:border-[#007BFF]"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-[#F5F5F5] font-medium mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F5F5] focus:border-[#007BFF]"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-[#F5F5F5] font-medium mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F5F5] focus:border-[#007BFF]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-[#F5F5F5] font-medium mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-[#1A1A1A] border-[#2A2A2A] text-[#F5F5F5] focus:border-[#007BFF]"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-white font-medium w-full py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
