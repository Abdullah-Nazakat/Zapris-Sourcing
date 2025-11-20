// app/page.jsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
// import Logo from '../../public/logo.png'

/**
 * Single-file landing page (Option A)
 * - TailwindCSS required
 * - Contact form posts to /api/contact-us (server route you provided)
 * - Arabic-style component names used (SafhaZapris, QismRaisiya, etc.)
 */

const StatCard = ({ label, value }) => (
  <div className="bg-white/10 rounded-xl p-3 md:p-4 backdrop-blur-sm">
    <div className="text-sm font-medium opacity-80">{label}</div>
    <div className="mt-1 font-semibold text-white">{value}</div>
  </div>
)

const QismRaisiya = () => {
  return (
    <header className="relative text-white overflow-hidden">

      {/* Top blur logo bar */}
      {/* <div className="absolute top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/10 z-30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">
          <Image src={Logo} alt="Zapris Logo" width={140} height={40} className="drop-shadow-md" />
        </div>
      </div> */}

      {/* Background Image + Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[2px] -z-10"
        style={{ backgroundImage: "url('/logo.png')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-600/80 via-indigo-600/80 to-purple-600/80 -z-5" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT: Text Content */}
          <div className="md:w-11/12">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Zapris Sourcing
            </h1>

            <p className="mt-4 text-lg md:text-xl opacity-95">
              Trusted Global Sourcing, Simplified — your on-ground sourcing office in China & Pakistan.
              We identify, verify, and manage production directly from factories — faster, safer and transparent.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white/95 text-sky-700 font-semibold px-6 py-3 shadow-lg transform hover:scale-105 transition"
              >
                Book your free consultation
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 text-white px-6 py-3 shadow-sm hover:bg-white/10 transition"
              >
                See our process
              </a>
            </div>
          </div>

          {/* RIGHT: Smart Stat Cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <StatCard label="150+ Projects" value="Completed" />
            <StatCard label="200+ Factories" value="Verified" />
            <StatCard label="10+ Countries" value="Served" />
            <StatCard label="98.7%" value="On-time production" />
          </div>

        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute -right-36 -bottom-36 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-36 -top-28 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
    </header>
  )
}

const QismKarateen = () => {
  const clients = [
    'SME’s, Start-Ups & Private Label Founders',
    'Importers & Procurement Managers',
    'Amazon, D2C & E-Commerce Businesses',
    'Distributors & Retail Chains',
    'OEM/ODM Product Development',
  ]

  return (
    <section id="who" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4 text-sky-400">We Work With</h2>
      <p className="text-neutral-600 mb-8">
        From startups to retail chains — anyone who needs reliable, verified, and efficient sourcing from China & Pakistan.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((c, i) => (
          <div
            key={i}
            className="rounded-2xl p-6 bg-gradient-to-br from-white/6 to-white/3 border
             border-white/5 hover:scale-102 transform transition shadow-md"
          >
            <h3 className="font-semibold text-white">{c}</h3>
            <p className="mt-2 text-sm text-neutral-300">
              Tailored sourcing, QA, and logistics for your business model.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

const QismCase = () => {
  const cases = [
    { industry: 'Apparel', route: 'China → UK', outcome: 'DDP within 25 days', timeline: '4 weeks' },
    { industry: 'Fitness Gear', route: 'China → USA', outcome: 'DDP within 10 days', timeline: '10 days' },
    { industry: 'Décor Products', route: 'China → Dubai', outcome: 'QA & DDP', timeline: '4 weeks' },
    { industry: 'OEM Backpacks', route: 'China → USA', outcome: 'Costs cut by 18%', timeline: '30 days' },
    { industry: 'Wellness Product', route: 'China → Denmark', outcome: 'Prototype in 14 days', timeline: '3 weeks' },
    { industry: 'Cosmetics', route: 'China → Pakistan', outcome: '5,000 pcs DDP to Pakistan', timeline: '30 days' },
    { industry: 'Electronics', route: 'China → Germany', outcome: 'Built custom PCB, CE compliant', timeline: '3 weeks' },
  ]

  return (
    <section id="case-studies" className="bg-neutral-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
        <p className="text-neutral-600 mb-6">Selected outcomes across industries and geographies.</p>

        <div className="overflow-x-auto rounded-xl shadow">
          <table className="min-w-full bg-white">
            <thead className="bg-sky-50 border-b">
              <tr>
                <th className="text-left p-4">Industry</th>
                <th className="text-left p-4">Route</th>
                <th className="text-left p-4">Outcome</th>
                <th className="text-left p-4">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c, idx) => (
                <tr key={idx} className={idx % 2 ? 'bg-white' : 'bg-neutral-50'}>
                  <td className="p-4 font-medium">{c.industry}</td>
                  <td className="p-4 text-sm">{c.route}</td>
                  <td className="p-4 text-sm">{c.outcome}</td>
                  <td className="p-4 text-sm">{c.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const QismSanaiya = () => {
  const industries = [
    {
      title: 'Textiles & Apparel',
      bullets: ['Yarn, Fabric, Garments', 'Home Textiles, Accessories', 'OEM/ODM production'],
    },
    {
      title: 'Machinery & Equipment',
      bullets: ['Textile machinery, parts', 'Industrial components', 'End-to-end sourcing'],
    },
    {
      title: 'Electronics & Engineering',
      bullets: ['Electronics, precision parts', 'PCB, molds and components', 'QA & shipment management'],
    },
    {
      title: 'E-commerce & FBA',
      bullets: ['Amazon FBA, Shopify brands', 'Private label support', 'Product sourcing & logistics'],
    },
    {
      title: 'Industrial & Chemical',
      bullets: ['Printing supplies, packaging', 'Procurement & compliance'],
    },
    {
      title: 'Retail & Distribution',
      bullets: ['Multi-category SKUs', 'Consolidated sourcing & shipment efficiency'],
    },
  ]

  return (
    <section id="industries" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">Industries We Work With</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <article key={i} className="p-6 rounded-2xl bg-white/6 border border-white/5 shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-xl text-white">{ind.title}</h3>
            <ul className="mt-3 text-sm text-neutral-300 space-y-1">
              {ind.bullets.map((b, k) => (
                <li key={k}>• {b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

const QismNatija = () => {
  const stats = [
    { label: 'Projects Completed', value: '150+' },
    { label: 'Verified Factories', value: '200+' },
    { label: 'Countries Served', value: '10+' },
    { label: 'Avg. Cost Reduction', value: '20–28%' },
    { label: 'On-Time Production Rate', value: '98.7%' },
    { label: 'Repeat Client Rate', value: '98%' },
  ]

  return (
    <section id="results" className="bg-gradient-to-b from-white to-sky-50 py-14">
      <div className="max-w-7xl mx-auto px-6 text-gray-700">
        <h2 className="text-3xl font-bold mb-6">Track Record & Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white shadow hover:scale-102 transform transition">
              <div className="text-sm text-neutral-500">{s.label}</div>
              <div className="mt-2 font-extrabold text-2xl">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const QismProcess = () => {
  const steps = [
    'Product Understanding & Specification Setup',
    'Supplier Identification & Screening',
    'Factory Audit & Documentation',
    'Quotation & Negotiation',
    'Sample Approval & Production Planning',
    'Pre-Shipment QA Inspection',
    'Logistics Coordination (CIF/DDP/DDU)',
    'Final Delivery & After-Sales Support',
  ]

  return (
    <section id="process" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-4">Our Complete Process</h2>
      <p className="text-neutral-600 mb-6">A modular end-to-end workflow — choose any service or let us manage everything.</p>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((s, idx) => (
          <li key={idx} className="flex gap-4 items-start">
            <div className="flex-none w-10 h-10 rounded-full bg-sky-600 text-white grid place-items-center font-semibold">
              {idx + 1}
            </div>
            <div>
              <div className="font-semibold text-sky-400">{s}</div>
              <div className="text-sm text-neutral-400">Step {idx + 1} description & deliverables.</div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <a href="#contact" className="inline-block rounded-2xl bg-sky-600 px-6 py-3 font-semibold text-white hover:opacity-95 transition">
          Start a project
        </a>
      </div>
    </section>
  )
}

const QismPain = () => {
  return (
    <section className="bg-gradient-to-b from-white to-sky-50  py-16">
      <div className="max-w-7xl mx-auto px-6 text-sky-400">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">Pain Points We Solve</h3>
            <ul className="space-y-2 text-gray-500">
              <li>• Unverified suppliers and factory scams</li>
              <li>• Poor communication & hidden costs</li>
              <li>• Missed deadlines & low-quality shipments</li>
              <li>• No accountability & performance tracking</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Guarantee & Risk Reversal</h3>
            <ul className="space-y-2 text-gray-500">
              <li>• 100% Refund - If Benchmarks Are Not Met</li>
              <li>• Replacement Assurance - If Quality Test Fails</li>
              <li>• Transparency – Zero Leakage Guarantee</li>
            </ul>
            <p className="mt-4 text-indigo-500">
              We remove your risk — so you can focus on growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- QismContact (integrated with /api/contact-us) ---------- */
const QismContact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [responseMsg, setResponseMsg] = useState(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setResponseMsg(null)

    // basic client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setResponseMsg({ type: 'error', text: 'Name, email and message are required.' })
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setResponseMsg({ type: 'error', text: data.error || 'Submission failed.' })
      } else {
        setResponseMsg({ type: 'success', text: data.message || 'Thank you! We received your message.' })
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      }
    } catch (err) {
      setResponseMsg({ type: 'error', text: 'Network error. Try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-neutral-600">Request your free copy of technical PDFs or book a consultation.</p>

          <div className="rounded-2xl p-6 bg-white/6 border border-white/5">
            <h4 className="font-semibold text-white">Technical PDFs</h4>
            <ul className="mt-3 text-neutral-300 space-y-2">
              <li>• Factory Verification Blueprint</li>
              <li>• Product Development Checklist</li>
              <li>• Shipping & Logistics Simplified</li>
              <li>• Quality Control Handbook</li>
              <li>• Import Cost Calculator</li>
              <li>• Zapris Sourcing Playbook</li>
            </ul>
            <p className="mt-3 text-sm text-neutral-400">Request: info@zaprissourcing.com</p>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="mailto:waqas@zaprissourcing.com" className="rounded-2xl bg-sky-600 px-5 py-3 text-white text-center">Email: waqas@zaprissourcing.com</a>
            <a href="https://wa.me/8613610361940" target="_blank" rel="noreferrer" className="rounded-2xl border border-sky-600 px-5 py-3 text-sky-600 text-center">WhatsApp: +86 136 1036 1940</a>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="rounded-2xl bg-white p-6 shadow text-gray-700">
          <h4 className="font-semibold mb-3">Book a free consultation</h4>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-neutral-700">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="Your name" className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-neutral-700">Email</label>
              <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="you@company.com" className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-neutral-700">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} type="text" placeholder="+1 234 567 890" className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-neutral-700">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Inquiry Subject" className="mt-1 w-full rounded-md border px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-neutral-700">Brief Project Description</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows="4" placeholder="Tell us about your product / volumes / timeline" className="mt-1 w-full rounded-md border px-3 py-2"></textarea>
            </div>

            {responseMsg && (
              <p className={`text-sm font-medium ${responseMsg.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {responseMsg.text}
              </p>
            )}

            <div className="flex gap-3">
              <button type="submit" disabled={loading} className={`rounded-2xl cursor-pointer bg-sky-600 px-5 py-2 text-white font-semibold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {loading ? 'Sending...' : 'Request Callback'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <p className="mt-8 text-sm text-neutral-500">Website: www.zaprissourcing.com</p>
    </section>
  )
}

export default function SafhaZapris() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-900/5 to-transparent text-white">
      <QismRaisiya />
      <QismKarateen />
      <QismCase />
      <QismSanaiya />
      <QismNatija />
      <QismProcess />
      <QismPain />
      <QismContact />

      <footer className="bg-neutral-900/20 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-neutral-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© {new Date().getFullYear()} Zapris Sourcing — Trusted Global Sourcing</div>
          <div className="flex gap-4">
            <a href="https://zaprissourcing.com" className="hover:underline">Website</a>
            <a href="mailto:waqas@zaprissourcing.com" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
