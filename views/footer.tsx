import Link from 'next/link'
import { LinkedInLogoIcon, InstagramLogoIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nextorium</h3>
            <p className="text-sm text-background/80 mb-4">
              Guiding minds. Shaping futures. Inspiring change.
            </p>
            <p className="text-xs text-background/60">
              Global education and mentorship hub for learners worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#tutoring" className="hover:text-accent transition-colors">Tutoring</Link></li>
              <li><Link href="/services#test-prep" className="hover:text-accent transition-colors">Test Prep</Link></li>
              <li><Link href="/services#mentorship" className="hover:text-accent transition-colors">Mentorship</Link></li>
              <li><Link href="/services#outreach" className="hover:text-accent transition-colors">Outreach</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                <LinkedInLogoIcon width={20} height={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
                <InstagramLogoIcon width={20} height={20} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-accent transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p>
                <a href="mailto:info@nextoriumacademy.com" className="hover:text-accent transition-colors flex items-center gap-2">
                  <EnvelopeOpenIcon width={16} height={16} />
                  info@nextoriumacademy.com
                </a>
              </p>
              <p className="text-background/80">Monday – Saturday: Available</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/70">
            <p>&copy; {currentYear} Nextorium Academy Consult. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
