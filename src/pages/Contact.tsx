import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    information: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  useEffect(() => {
    document.title = "Contact Us - MaizeTech";
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Initialize EmailJS with public key
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      // Get EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS is not configured. Please set environment variables.');
      }
      
      // Prepare template parameters
      const templateParams = {
        to_email: '5157828321@vtext.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.information,
        reply_to: formData.email,
      };
      
      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Success
      setSubmitStatus({ 
        type: 'success', 
        message: "Thank you for your message! We'll get back to you soon." 
      });
      
      // Reset form after successful submission
      setFormData({ name: "", email: "", subject: "", information: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or email us directly at brownconner15@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="relative pt-8 pb-16 flex items-center">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-subtle" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8 animate-fade-up opacity-0 animation-delay-100">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary mb-4">
                  <Mail className="w-7 h-7 text-primary-foreground" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Get in <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-muted-foreground">
                  Have a question or want to work together? We'd love to hear from you.
                </p>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-card animate-fade-up opacity-0 animation-delay-200">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary/50"
                    />
                  </div>

                  {/* Information/Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="information" className="text-foreground">
                      Information
                    </Label>
                    <Textarea
                      id="information"
                      name="information"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.information}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus.type && (
                    <Alert 
                      variant={submitStatus.type === 'error' ? 'destructive' : 'default'}
                      className={submitStatus.type === 'success' ? 'bg-green-500/10 border-green-500/50 text-green-400' : ''}
                    >
                      {submitStatus.type === 'success' ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <AlertCircle className="h-4 w-4" />
                      )}
                      <AlertDescription>
                        {submitStatus.message}
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="mt-8 text-center animate-fade-up opacity-0 animation-delay-300">
                <p className="text-muted-foreground mb-3 text-sm">
                  Or reach out directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a 
                    href="mailto:brownconner15@gmail.com" 
                    className="text-primary hover:text-accent transition-smooth"
                  >
                    brownconner15@gmail.com
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <a 
                    href="tel:+13195413291" 
                    className="text-primary hover:text-accent transition-smooth"
                  >
                    +1 (319) 541-3291
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

