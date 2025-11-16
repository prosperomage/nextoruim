import Link from 'next/link'

import { CheckCircledIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'

export default function Services() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-foreground/90">
            Personalized Learning. Proven Results. Lifelong Impact.
          </p>
        </div>
      </section>

      {/* Tutoring Programs */}
      <section id="tutoring" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary">1. Tutoring Programs</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                At Nextorium Academy Consult, we make learning simple, structured, and engaging. Our tutoring programs are built around each learner's strengths, pace, and goals — helping students gain mastery, not just grades.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mb-4">Subjects We Cover:</h3>
              <ul className="space-y-2 mb-8">
                {['Mathematics', 'English Language & Literature', 'Basic & Applied Sciences', 'Economics and Social Studies', 'Further Mathematics and Physics', 'Chemistry and Biology'].map((subject) => (
                  <li key={subject} className="flex items-center gap-3 text-foreground/70">
                    <CheckCircledIcon width={18} height={18} className="text-accent shrink-0" />
                    {subject}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Levels:</h3>
              <ul className="space-y-2 mb-8">
                {['Pre-School & Kindergarten', 'Lower & Upper Primary (Grades 1–6)', 'Junior Secondary / Middle School', 'Senior Secondary / High School', 'Foundation & Pre-University'].map((level) => (
                  <li key={level} className="flex items-center gap-3 text-foreground/70">
                    <CheckCircledIcon width={18} height={18} className="text-accent shrink-0" />
                    {level}
                  </li>
                ))}
              </ul>

              <div className="bg-secondary p-6 rounded-lg border border-secondary-foreground/10">
                <p className="font-semibold text-foreground mb-2">Mode:</p>
                <p className="text-foreground/70">Online, In-Person, or Hybrid Learning</p>
              </div>
            </div>
          </div>

          <Link href="/contact">
            <Button size="3" className="bg-primary hover:bg-primary/90">
              Explore Tutoring Options
              <ArrowRightIcon className="ml-2" width={20} height={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Mentorship */}
      <section id="mentorship" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary">2. Mentorship & Academic Guidance</h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed mb-12 max-w-3xl">
            We believe every learner deserves guidance beyond the classroom. Our mentorship programs help students develop confidence, focus, and life skills that go hand-in-hand with academic success.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-primary mb-6">We Offer:</h3>
              <ul className="space-y-3">
                {[
                  'Academic Goal Setting and Progress Tracking',
                  'Study Skills and Time Management Coaching',
                  'Career and University Guidance',
                  'Personal Development Workshops'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircledIcon width={20} height={20} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <p className="text-foreground/80 leading-relaxed">
                Our mentors serve as role models, providing support, encouragement, and perspective that shape students into balanced achievers.
              </p>
            </div>
          </div>

          <Link href="/contact">
            <Button size="3" className="bg-primary hover:bg-primary/90">
              Meet Our Mentors
              <ArrowRightIcon className="ml-2" width={20} height={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Test Preparation */}
      <section id="test-prep" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-primary">3. Test Preparation</h2>
          <p className="text-lg text-foreground/80 leading-relaxed mb-12">
            Success in standardized tests takes more than intelligence, it takes strategy, structure, and support. Our Test Prep division is designed to help students perform at their best in both local and international exams.
          </p>

          {/* USA Test Prep */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">USA Test Preparation</h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              We prepare students for a wide range of American academic assessments through targeted lessons, practice simulations, and test-day readiness coaching.
            </p>
            <div className="bg-white p-8 rounded-lg border border-border mb-6">
              <h4 className="font-semibold text-foreground mb-4">We Cover:</h4>
              <ul className="space-y-2 grid md:grid-cols-2 gap-4">
                {[
                  'PSAT (Preliminary SAT)',
                  'SAT',
                  'ACT',
                  'HSPT (High School Placement Test)',
                  'AP (Advanced Placement) Exams',
                  'GED (General Education Development)'
                ].map((exam) => (
                  <li key={exam} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {exam}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-foreground/80 text-sm">
              Each program includes diagnostic testing, individual progress tracking, and one-on-one review sessions.
            </p>
          </div>

          {/* UK Test Prep */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">UK Test Preparation</h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              For students aiming to study in or from the United Kingdom, we offer personalized preparation for key national and international exams.
            </p>
            <div className="bg-white p-8 rounded-lg border border-border mb-6">
              <h4 className="font-semibold text-foreground mb-4">We Cover:</h4>
              <ul className="space-y-2 grid md:grid-cols-2 gap-4">
                {[
                  'GCSE & IGCSE',
                  'A-Levels',
                  '11+ and 13+ Entrance Exams',
                  'UKiset',
                  'IELTS'
                ].map((exam) => (
                  <li key={exam} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {exam}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-foreground/80 text-sm">
              Our UK prep curriculum focuses on exam mastery, analytical skills, and clear communication, the skills British education systems value most.
            </p>
          </div>

          {/* Canada Test Prep */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">Canada Test Preparation</h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              For Canadian learners or students pursuing studies in Canada, our prep programs combine academic coaching with test strategy and confidence-building.
            </p>
            <div className="bg-white p-8 rounded-lg border border-border mb-6">
              <h4 className="font-semibold text-foreground mb-4">We Cover:</h4>
              <ul className="space-y-2 grid md:grid-cols-2 gap-4">
                {[
                  'SSAT (Secondary School Admission Test)',
                  'CAEL (Canadian Academic English Language Test)',
                  'CELPIP',
                  'GED Canada',
                  'SAT/ACT'
                ].map((exam) => (
                  <li key={exam} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {exam}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-foreground/80 text-sm">
              Our approach helps students adapt to both North American and international testing standards with clarity and ease.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Outreach */}
      <section id="outreach" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary">4. Educational Outreach</h2>
          
          <p className="text-lg text-foreground/80 leading-relaxed mb-12">
            Education should reach everyone, not just those who can afford it. Through our outreach initiatives, Nextorium Academy Consult partners with schools, community centers, and NGOs to expand access to learning in underserved areas.
          </p>

          <div className="bg-white p-8 rounded-lg border border-border mb-12">
            <h3 className="font-semibold text-foreground mb-6">Outreach Programs Include:</h3>
            <ul className="space-y-4">
              {[
                'Free and subsidized tutoring for rural and low-income students',
                'Teacher training and digital education workshops',
                'Learning resource drives and mobile classrooms',
                'Mentorship programs that connect university students with secondary learners'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircledIcon width={20} height={20} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-foreground/80 leading-relaxed mb-8">
            Each outreach project reflects our belief that every child deserves a chance to learn, dream, and grow.
          </p>

          <Link href="/contact">
            <Button size="3" className="bg-primary hover:bg-primary/90">
              Partner With Us
              <ArrowRightIcon className="ml-2" width={20} height={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">At Nextorium, Every Service Connects to One Goal</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Empowering the next generation with knowledge, discipline, and vision.
          </p>
          <Link href="/contact">
            <Button size="3" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Book a Free Consultation Today
              <ArrowRightIcon className="ml-2" width={20} height={20} />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
