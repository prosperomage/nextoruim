import Link from 'next/link'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'How to Ace the Digital SAT — 2025 Edition',
      excerpt: 'Master the latest SAT format with our comprehensive strategies and expert tips.',
      category: 'Test Preparation',
      image: '/student-taking-sat-exam.jpg'
    },
    {
      id: 2,
      title: 'Mentorship that Transforms: A Student\'s Story from Lagos to Toronto',
      excerpt: 'Discover how personalized mentorship helped one student achieve their dreams.',
      category: 'Success Stories',
      image: '/mentor-teaching-student.jpg'
    },
    {
      id: 3,
      title: 'The Future of Learning in Africa — Our Perspective',
      excerpt: 'Exploring educational innovation and opportunity across the African continent.',
      category: 'Outreach & Impact',
      image: '/african-classroom-learning.jpg'
    },
    {
      id: 4,
      title: 'How to Beat Procrastination and Study Smart',
      excerpt: 'Proven techniques to develop better study habits and boost productivity.',
      category: 'Study Tips',
      image: '/focused-student-studying.jpg'
    },
    {
      id: 5,
      title: 'SAT vs. ACT — Which Test Is Right for You?',
      excerpt: 'Compare these two major exams and find the best fit for your strengths.',
      category: 'Test Preparation',
      image: '/student-choosing-between-exams.jpg'
    },
    {
      id: 6,
      title: 'Building Confidence in Your Academic Journey',
      excerpt: 'Learn strategies to overcome self-doubt and unlock your full potential.',
      category: 'Mentorship',
      image: '/confident-student.jpg'
    }
  ]

  const categories = [
    'Study Tips & Learning Strategies',
    'Test Preparation Guides',
    'Mentorship & Personal Growth',
    'Parenting & Educational Support',
    'Outreach & Impact Stories'
  ]

  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Insights & Resources</h1>
          <p className="text-xl text-primary-foreground/90">
            Practical advice, expert insights, and inspiring stories for students, parents, and educators.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-foreground/80 leading-relaxed mb-2">
            At Nextorium Academy Consult, we believe learning continues beyond the classroom. Our Blog and Resources hub is where we share ideas, strategies, and inspiration to help students study smarter, parents stay informed, and educators grow in their practice.
          </p>
          <p className="text-foreground/60 italic">
            "Because great learning starts with great insight."
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-primary">Featured Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {articles.slice(0, 3).map((article) => (
              <div key={article.id} className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-accent font-semibold mb-2">{article.category}</p>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{article.title}</h3>
                  <p className="text-foreground/70 mb-6">{article.excerpt}</p>
                  <Link href="#" className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2">
                    Read More
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-primary">All Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {articles.map((article) => (
              <div key={article.id} className="bg-muted/50 rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <p className="text-xs text-accent font-semibold mb-2">{article.category}</p>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{article.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{article.excerpt}</p>
                  <Link href="#" className="text-primary hover:text-primary/80 text-sm font-semibold inline-flex items-center gap-1">
                    Read More
                    <ArrowRightIcon width={14} height={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 mb-20">
            <h3 className="text-xl font-bold mb-6 text-primary">Browse by Category</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="text-foreground hover:text-primary font-medium transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected. Keep Learning.</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Join our community of students, parents, and educators receiving curated articles, study tips, and learning opportunities straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
              required
            />
            <Button size="3" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/70 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-12 bg-background text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-foreground/70 italic">
            Knowledge shared is knowledge multiplied. Keep exploring, keep learning, and keep growing with Nextorium Academy Consult.
          </p>
        </div>
      </section>
    </main>
  )
}
