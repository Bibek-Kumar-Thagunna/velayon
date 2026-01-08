import { GridBackground } from "../components/GridBackground";
import { PhoneMockup } from "../components/ui/PhoneMockup";
import { MobileNav } from "../components/ui/MobileNav";

export default function AttendifySubdomain() {
  return (
    <GridBackground suppressHydrationWarning>
      <div className="min-h-screen text-white">
        {/* Navigation - Responsive */}
        <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#2A2A2A]">
          <div className="max-w-7xl mx-auto px-[clamp(1rem,4vw,2rem)] py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="text-lg sm:text-xl font-bold">Attendify</div>
                <span className="text-xs text-[#6B7280] hidden sm:inline">by Velayon</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                  Features
                </a>
                <a href="#pricing" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
                  Pricing
                </a>
                <button className="px-4 py-2 bg-[#22C55E] text-black font-medium rounded-lg text-sm hover:bg-[#16A34A] transition-colors">
                  Start Free Trial
                </button>
              </div>

              {/* Mobile Menu Button */}
              <MobileNav />
            </div>
          </div>
        </nav>

        {/* Hero - Responsive Architecture */}
        <section className="relative min-h-[100dvh] flex items-center px-[clamp(1rem,4vw,2rem)] pt-[clamp(5rem,15vh,8rem)] pb-[clamp(3rem,8vh,6rem)] overflow-hidden">
          <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] lg:gap-[clamp(3rem,6vw,6rem)] items-center">

            {/* Left: Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#2A2A2A] rounded-full mb-6 sm:mb-8 bg-[#0A0A0A]/50">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-xs font-mono text-[#A1A1AA]">300+ daily active users</span>
              </div>

              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold mb-[clamp(1rem,2vw,1.5rem)] leading-[1.1]">
                Smart attendance.
                <br />
                <span className="text-[#22C55E]">Zero hassle.</span>
              </h1>

              <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#A1A1AA] mb-[clamp(1.5rem,3vw,2rem)] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Track student attendance with QR codes and location verification.
                Real-time analytics. No manual entry. Built for educational institutions.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#22C55E] text-black font-semibold rounded-lg hover:bg-[#16A34A] transition-colors">
                  Start Free Trial
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 border border-[#333333] text-white rounded-lg hover:border-[#555555] transition-colors">
                  Watch Demo
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 text-xs sm:text-sm text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <span className="text-[#22C55E]">✓</span>
                  <span>Free for 50 students</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#22C55E]">✓</span>
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#22C55E]">✓</span>
                  <span>Setup in 5 mins</span>
                </div>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              {/* Decorative blob - responsive */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[500px] aspect-square bg-[#22C55E] rounded-full blur-[120px] opacity-10 pointer-events-none" />
              <PhoneMockup />
            </div>

          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-[clamp(4rem,10vh,8rem)] px-[clamp(1rem,4vw,2rem)]">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
            <div className="text-center mb-[clamp(2rem,5vw,4rem)]">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">
                Everything you need
              </h2>
              <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#A1A1AA]">
                Built by educators, for educators
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[clamp(1rem,2vw,2rem)]">
              {/* QR Code */}
              <div className="border border-[#2A2A2A] rounded-lg p-[clamp(1.25rem,3vw,2rem)] bg-[#0A0A0A]/50">
                <div className="text-3xl sm:text-4xl mb-4">📱</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">QR Code Check-in</h3>
                <p className="text-sm sm:text-base text-[#A1A1AA]">
                  Students scan a QR code to mark attendance. Quick, contactless, and secure.
                </p>
              </div>

              {/* Location */}
              <div className="border border-[#2A2A2A] rounded-lg p-[clamp(1.25rem,3vw,2rem)] bg-[#0A0A0A]/50">
                <div className="text-3xl sm:text-4xl mb-4">📍</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Location Verification</h3>
                <p className="text-sm sm:text-base text-[#A1A1AA]">
                  Prevent proxy attendance with optional location-based authentication.
                </p>
              </div>

              {/* Analytics */}
              <div className="border border-[#2A2A2A] rounded-lg p-[clamp(1.25rem,3vw,2rem)] bg-[#0A0A0A]/50 sm:col-span-2 md:col-span-1">
                <div className="text-3xl sm:text-4xl mb-4">📊</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Real-time Analytics</h3>
                <p className="text-sm sm:text-base text-[#A1A1AA]">
                  Dashboard for teachers and admins. Track trends, generate reports instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-[clamp(4rem,10vh,8rem)] px-[clamp(1rem,4vw,2rem)] bg-[#0A0A0A]/30">
          <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
            <div className="text-center mb-[clamp(2rem,5vw,4rem)]">
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#A1A1AA]">
                Start free. Scale as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-[clamp(1rem,3vw,2rem)]">
              {/* Free */}
              <div className="border border-[#2A2A2A] rounded-lg p-[clamp(1.5rem,3vw,2rem)] bg-[#0A0A0A]/50">
                <div className="text-sm font-mono text-[#6B7280] mb-2">FREE</div>
                <div className="text-3xl sm:text-4xl font-bold mb-4">$0<span className="text-lg text-[#A1A1AA]">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E]">✓</span>
                    <span className="text-[#A1A1AA]">Up to 50 students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E]">✓</span>
                    <span className="text-[#A1A1AA]">QR code attendance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E]">✓</span>
                    <span className="text-[#A1A1AA]">Basic analytics</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 border border-[#333333] text-white rounded-lg hover:border-[#555555] transition-colors">
                  Get Started
                </button>
              </div>

              {/* Pro */}
              <div className="border border-[#22C55E] rounded-lg p-[clamp(1.5rem,3vw,2rem)] bg-[#0A0A0A]/50 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-[#22C55E] text-black text-xs font-bold rounded-full">
                    MOST POPULAR
                  </span>
                </div>
                <div className="text-sm font-mono text-[#22C55E] mb-2">PRO</div>
                <div className="text-3xl sm:text-4xl font-bold mb-4">$5<span className="text-lg text-[#A1A1AA]">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E]">✓</span>
                    <span className="text-[#E5E5E5]">Unlimited students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E]">✓</span>
                    <span className="text-[#E5E5E5]">Location verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E]">✓</span>
                    <span className="text-[#E5E5E5]">Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E]">✓</span>
                    <span className="text-[#E5E5E5]">Export reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#22C55E]">✓</span>
                    <span className="text-[#E5E5E5]">Priority support</span>
                  </li>
                </ul>
                <button className="w-full px-6 py-3 bg-[#22C55E] text-black font-semibold rounded-lg hover:bg-[#16A34A] transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-[clamp(4rem,10vh,8rem)] px-[clamp(1rem,4vw,2rem)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">
              Ready to modernize attendance?
            </h2>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-[#A1A1AA] mb-8">
              Join 300+ daily users. Start your free trial today.
            </p>
            <button className="px-8 py-4 bg-[#22C55E] text-black font-semibold rounded-lg hover:bg-[#16A34A] transition-colors">
              Start Free Trial
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#2A2A2A] py-[clamp(2rem,5vh,3rem)] px-[clamp(1rem,4vw,2rem)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
              <div className="text-center md:text-left">
                <div className="text-lg sm:text-xl font-bold mb-2">Attendify</div>
                <p className="text-sm text-[#6B7280]">
                  Built by <a href="https://velayon.com" className="hover:text-white transition-colors">Velayon</a>
                </p>
              </div>
              <div className="flex gap-6 sm:gap-8 text-sm">
                <a href="#features" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Features
                </a>
                <a href="#pricing" className="text-[#A1A1AA] hover:text-white transition-colors">
                  Pricing
                </a>
                <a href="https://velayon.com" className="text-[#A1A1AA] hover:text-white transition-colors">
                  About Velayon
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </GridBackground>
  );
}
