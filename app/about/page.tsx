import Link from 'next/link';
import { Eye, CheckCircle, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#ECFEFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#CFFAFE', color: '#0891B2' }}>
              <Eye className="w-4 h-4" />
              Clear · Simple · Reliable
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              Clear & Simple Identity Verification<br /><span style={{ color: '#0891B2' }}>No Confusion, Just Results</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              Clear Verify makes identity verification straightforward and stress-free. We believe verification should be clear, not complicated — so we built a platform that guides you through every step with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              Too many verification services are confusing and frustrating. Clear Verify was built to change that — making the process transparent, simple, and easy to understand.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              We believe everyone deserves a clear path to verifying their identity. No jargon, no hidden steps — just a clean, straightforward process from start to finish.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Thousands of people trust Clear Verify because we make the complex simple. Your peace of mind is our priority.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFFAFE' }}>
                  <Eye className="w-5 h-5" style={{ color: '#0891B2' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Crystal Clear Process</h3>
                  <p style={{ color: '#6B7280' }}>Every step is explained clearly — no confusing jargon, no hidden requirements.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFFAFE' }}>
                  <CheckCircle className="w-5 h-5" style={{ color: '#0891B2' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Reliable Results</h3>
                  <p style={{ color: '#6B7280' }}>Get accurate, dependable verification results you can count on every time.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CFFAFE' }}>
                  <Heart className="w-5 h-5" style={{ color: '#0891B2' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Peace of Mind</h3>
                  <p style={{ color: '#6B7280' }}>Know exactly what's happening at every stage. Transparency is at the core of everything we do.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
