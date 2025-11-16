'use client'

import { Button } from '@radix-ui/themes'
import { useState } from 'react'


export default function JoinOurTeam() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    expertise: '',
    statement: '',
    cv: null as File | null
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Application submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ fullName: '', email: '', phone: '', expertise: '', statement: '', cv: null })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, cv: e.target.files![0] }))
    }
  }

  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Join the Nextorium Network</h1>
          <p className="text-xl text-primary-foreground/90">
            Empower learners. Inspire futures. Grow with us.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-primary">Why Join Us?</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            At Nextorium Academy Consult, we're more than a tutoring organization — we're a community of educators, mentors, and changemakers working to shape the next generation. If you're passionate about teaching, mentoring, or creating opportunities for others to succeed, we'd love to have you on our team.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">What We Offer:</h3>
              <ul className="space-y-3">
                {[
                  'Flexible teaching schedule (Online or hybrid)',
                  'Competitive compensation and professional growth',
                  'Access to a supportive, global learning network',
                  'Opportunities to contribute to outreach and impact projects'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 "></span>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">We're Looking For:</h3>
              <ul className="space-y-3">
                {[
                  'Skilled in teaching core subjects',
                  'Experienced in test prep',
                  'Passionate about mentorship',
                  'Reliable, empathetic, and innovative'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 "></span>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 rounded-lg border border-border">
          <h2 className="text-2xl font-bold mb-6 text-primary">Apply Now</h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
              Thank you for your application! We'll review it and get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
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
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="expertise" className="block text-sm font-medium text-foreground mb-2">
                Area(s) of Expertise / Subjects
              </label>
              <input
                type="text"
                id="expertise"
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
                placeholder="e.g., Mathematics, SAT Prep, Physics, etc."
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-foreground mb-2">
                Upload CV or Resume (PDF/DOC)
              </label>
              <input
                type="file"
                id="cv"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-2 border border-border rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="statement" className="block text-sm font-medium text-foreground mb-2">
                Brief Statement: Why do you want to join Nextorium?
              </label>
              <textarea
                id="statement"
                name="statement"
                value={formData.statement}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <Button type="submit" size="3" className="w-full bg-primary hover:bg-primary/90">
              Submit Application
            </Button>
          </form>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">At Nextorium, You Don't Just Teach</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            You transform lives. Join us in building a world where every learner has the tools and mentorship to reach their full potential.
          </p>
        </div>
      </section>
    </main>
  )
}
