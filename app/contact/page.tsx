"use client";

import { useState } from "react";

import { EnvelopeClosedIcon, ClockIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "Tutoring",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "Tutoring",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-primary-foreground/90">
            Let's build something remarkable together.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
            Whether you're a parent seeking a tutor, a student ready to level
            up, or a partner interested in collaborating, we'd love to hear from
            you. Our team is here to answer your questions, guide your next
            steps, and help you get started on your learning journey with
            Nextorium Academy Consult.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Contact Info Cards */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:info@nextoriumacademy.com"
                className="text-primary hover:underline"
              >
                info@nextoriumacademy.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border">
              <EnvelopeClosedIcon
                className="w-8 h-8 text-primary mb-4"
                width={32}
                height={32}
              />
              <h3 className="font-semibold text-foreground mb-2">
                Phone / WhatsApp
              </h3>
              <a href="tel:+234" className="text-primary hover:underline">
                +234 (Contact us for number)
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border">
              <ClockIcon
                className="w-8 h-8 text-primary mb-4"
                width={32}
                height={32}
              />
              <h3 className="font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-foreground/70 text-sm">
                Monday – Saturday: 24 Hours
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Send us a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message / Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option>Tutoring</option>
                  <option>Test Prep</option>
                  <option>Mentorship</option>
                  <option>Outreach Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <Button
                type="submit"
                size="3"
                className="w-full bg-primary hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground/70 mb-4">Follow us on social media:</p>
          <div className="flex justify-center gap-6">
            {["Facebook", "Instagram", "LinkedIn", "YouTube", "WhatsApp"].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-primary hover:text-primary/70 font-medium transition-colors"
                >
                  {platform}
                </a>
              )
            )}
          </div>
          <p className="text-foreground/60 text-sm mt-8 italic">
            "Every great achievement begins with a single conversation. Let's
            start yours."
          </p>
        </div>
      </section>
    </main>
  );
}
