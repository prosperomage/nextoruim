import Link from 'next/link'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'

export default function About() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About Nextorium Academy Consult</h1>
          <p className="text-xl text-primary-foreground/90">
            Guiding Minds. Shaping Futures. Inspiring Change.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary">Who We Are</h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Nextorium Academy Consult is a global learning and mentorship company dedicated to helping students reach their full potential.
            </p>
            <p>
              We go beyond traditional tutoring, combining academic support, personal mentorship, and educational outreach to create well-rounded learners who are ready to thrive in school and in life.
            </p>
            <p>
              Our work connects students, educators, and mentors across borders, bridging the gap between access and excellence. We deliver learning experiences that are personal, purposeful, and transformative.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">Our Vision</h3>
              <p className="text-foreground/80 leading-relaxed">
                To become a global leader in transforming education through mentorship, innovation, and opportunity, empowering learners everywhere to discover their potential and shape a better future.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed">
                At Nextorium Academy Consult, our mission is to provide world-class tutoring, mentorship, and test preparation while driving educational outreach that equips students, regardless of background, with the skills, confidence, and mindset to thrive in a changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary">Our Story: The Meaning Behind "Nextorium"</h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              The name Nextorium was born from the idea of what's next; the next level of learning, the next generation of thinkers, and the next step toward opportunity.
            </p>
            <p>
              It represents a space where learning becomes a lifelong journey.
            </p>
            <p>
              Founded by a passionate educator with a vision to reimagine tutoring and mentorship, Nextorium Academy Consult stands as a hub for growth — academic, personal, and social.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center text-primary">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Excellence', desc: 'We hold ourselves and our students to the highest standards of performance and integrity.' },
              { title: 'Mentorship', desc: 'Every learner deserves guidance, not just instruction.' },
              { title: 'Innovation', desc: 'We adapt modern teaching tools and creative methods to inspire curiosity and growth.' },
              { title: 'Accessibility', desc: 'Education should reach every learner, no matter where they are.' },
              { title: 'Community Impact', desc: 'We give back through outreach programs that expand access to quality education.' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold mb-4 text-primary">{value.title}</h3>
                <p className="text-foreground/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary">Our Team</h2>
          <div className="bg-primary/5 p-8 rounded-lg border border-primary/10">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nextorium brings together a diverse team of tutors, mentors, and educators with one shared passion — helping learners grow.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mt-6">
              Each member brings unique expertise, empathy, and energy to every session, ensuring that every student receives not just knowledge, but guidance that lasts.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Journey */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            We're building a global community of learners, mentors, and changemakers. Whether you're a student, parent, tutor, or partner, there's a place for you at Nextorium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-our-team">
              <Button size="3" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Our Team
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="3" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
