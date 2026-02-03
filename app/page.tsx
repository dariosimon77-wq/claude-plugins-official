import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, Shield, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f4kCGYxPuAJf6kJhKrxkiAGx5Ap8i8.png" 
                alt="SYNA Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-semibold">SYNA</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="#products" className="text-sm text-white/70 hover:text-white transition-colors">
                Products
              </Link>
              <Link href="#resources" className="text-sm text-white/70 hover:text-white transition-colors">
                Resources
              </Link>
              <Link href="#company" className="text-sm text-white/70 hover:text-white transition-colors">
                Company
              </Link>
            </div>

            <Button variant="secondary" className="bg-white text-black hover:bg-white/90">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm text-white/70">Announcing Series A Funding</span>
              <ArrowRight className="h-4 w-4 text-white/70" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Fixed Income Trading
              <br />
              <span className="text-white/80">for Wealth Platforms</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto text-balance">
              Quickly deploy our suite of fixed income APIs designed for retail. Our industry-leading APIs power fixed income investing for firms representing $3T+ in assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 text-base">
                Request Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-base">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Execution</h3>
              <p className="text-white/60 leading-relaxed">
                Streamline fixed income trading with automated execution. Connect to liquidity providers and execute trades in milliseconds.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
              <p className="text-white/60 leading-relaxed">
                Create custom risk policies, monitor open orders, and take control with comprehensive risk management tools.
              </p>
            </div>

            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Strategies</h3>
              <p className="text-white/60 leading-relaxed">
                Build ladders, automate reinvestment and rebalancing, and create custom trading strategies for your clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">$3T+</div>
              <div className="text-white/60">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-white/60">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50ms</div>
              <div className="text-white/60">Average Latency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/60">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Ready to transform your fixed income trading?
          </h2>
          <p className="text-xl text-white/60 mb-8 text-balance">
            Join leading wealth platforms already using SYNA to power their fixed income offerings.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90 text-base">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f4kCGYxPuAJf6kJhKrxkiAGx5Ap8i8.png" 
                  alt="SYNA Logo" 
                  className="h-6 w-6"
                />
                <span className="font-semibold">SYNA</span>
              </div>
              <p className="text-sm text-white/60">
                Fixed income trading infrastructure for the modern wealth platform.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="#" className="hover:text-white transition-colors">Trading API</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Market Data</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Analytics</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/60">
            © 2026 SYNA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
