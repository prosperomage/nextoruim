import Link from "next/link";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Theme } from "@radix-ui/themes";

export default function Home() {
  return (
    <Theme>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="min-h-screen bg-linear-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground flex items-center pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
                  Building the Next Generation of Thinkers, Leaders, and
                  Innovators
                </h1>
                <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 text-balance">
                  Nextorium Academy Consult is a global education and mentorship
                  hub helping students unlock their potential through
                  personalized tutoring, guided mentorship, and test preparation
                  built for success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button
                      size="3"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Get Started
                      <ArrowRightIcon className="ml-2" width={20} height={20} />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      size="3"
                      variant="outline"
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative h-96 bg-primary-foreground/10 rounded-lg overflow-hidden">
                  <img
                    src="/students-studying-together-in-classroom.jpg"
                    alt="Students studying together"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/mentors-and-students-collaborating-together.jpg"
                  alt="Mentorship"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-primary">
                  More Than a Tutoring Platform — A Movement for Lifelong
                  Learning
                </h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  At Nextorium, we believe learning should spark growth beyond
                  the classroom. Our academy connects students, mentors, and
                  educators from around the world to create pathways for
                  academic excellence, personal development, and opportunity.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold group"
                >
                  Read Our Story
                  <ArrowRightIcon
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-primary">
                What We Offer
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Comprehensive education solutions tailored to help you succeed
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {/* Tutoring */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Tutoring
                </h3>
                <p className="text-foreground/70">
                  Tailored lessons in Mathematics, Science, and English for all
                  levels. We focus on clarity, understanding, and confidence.
                </p>
              </div>

              {/* Test Prep */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Test Preparation
                </h3>
                <p className="text-foreground/70">
                  Comprehensive programs for IGCSE, SAT, GMAT, WAEC, NECO, and
                  JAMB with proven strategies for outstanding results.
                </p>
              </div>

              {/* Mentorship */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Mentorship
                </h3>
                <p className="text-foreground/70">
                  Personalized guidance to help students set goals, build
                  discipline, and make smart academic and career choices.
                </p>
              </div>

              {/* Outreach */}
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  Educational Outreach
                </h3>
                <p className="text-foreground/70">
                  Expanding access to quality education in underserved
                  communities through workshops and support programs.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/services">
                <Button size="3" className="bg-primary hover:bg-primary/90">
                  Explore Our Programs
                  <ArrowRightIcon className="ml-2" width={20} height={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 text-primary">
                  Why Nextorium?
                </h2>
                <ul className="space-y-6">
                  {[
                    "Global approach, local understanding",
                    "Professional tutors and mentors who care",
                    "Innovative learning tools and flexible scheduling",
                    "Commitment to academic growth and personal development",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-accent rounded-full shrink-0 flex items-center justify-center text-sm font-bold text-accent-foreground mt-1">
                        ✓
                      </div>
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg border border-primary/10">
                <p className="text-2xl font-semibold text-primary italic mb-6 leading-relaxed text-balance">
                  "Education is not just about passing exams — it's about
                  preparing for life. That's what we do at Nextorium."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-16 text-center text-primary">
              Success Stories
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <p className="text-lg mb-4 italic text-foreground">
                  "My son's confidence in math has grown tremendously since
                  joining Nextorium."
                </p>
                <p className="text-sm font-semibold text-primary">
                  Parent, Lagos, Nigeria
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
                <p className="text-lg mb-4 italic text-foreground">
                  "Nextorium helped me score above 1400 on the SAT. The
                  mentorship made all the difference."
                </p>
                <p className="text-sm font-semibold text-primary">
                  Student, United States
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/blog">
                <Button
                  variant="outline"
                  size="3"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  See More Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Start your journey with a free consultation. Let's map out your
              learning goals and show you how Nextorium can help.
            </p>
            <Link href="/contact">
              <Button
                size="3"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Book a Free Consultation
                <ArrowRightIcon className="ml-2" width={20} height={20} />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </Theme>
  );
}
