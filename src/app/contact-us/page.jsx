"use client"
import React, { useState } from "react";

const QismContact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  // Handle Inputs
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);

    try {
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setResponseMsg({
          type: "error",
          text: data.error || "Something went wrong.",
        });
      } else {
        setResponseMsg({
          type: "success",
          text: "Thank you! We received your message.",
        });

        // clear form on success
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      setResponseMsg({ type: "error", text: "Network error. Try again." });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* LEFT SIDE */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-neutral-600">
            Request your free copy of technical PDFs or book a consultation.
          </p>

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
            <p className="mt-3 text-sm text-neutral-400">
              Request: info@zaprissourcing.com
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="mailto:waqas@zaprissourcing.com"
              className="rounded-2xl bg-sky-600 px-5 py-3 text-white text-center"
            >
              Email: waqas@zaprissourcing.com
            </a>
            <a
              href="https://wa.me/8613610361940"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-sky-600 px-5 py-3 text-sky-600 text-center"
            >
              WhatsApp: +86 136 1036 1940
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="rounded-2xl bg-white p-6 shadow text-gray-500">
          <h4 className="font-semibold mb-3">Book a free consultation</h4>

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <div>
              <label className="block text-sm text-neutral-700">Name</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-1 w-full rounded-md border px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-700">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="mt-1 w-full rounded-md border px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-700">Phone</label>
              <input
                name="phone"
                type="text"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-700">Subject</label>
              <input
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Inquiry Subject"
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-neutral-700">
                Brief Project Description
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your product / volumes / timeline"
                rows="4"
                className="mt-1 w-full rounded-md border px-3 py-2"
                required
              ></textarea>
            </div>

            {responseMsg && (
              <p
                className={`text-sm font-medium ${
                  responseMsg.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {responseMsg.text}
              </p>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className={`rounded-2xl cursor-pointer bg-sky-600 px-5 py-2 text-white font-semibold ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Request Callback"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <p className="mt-8 text-sm text-neutral-500">
        Website: www.zaprissourcing.com
      </p>
    </section>
  );
};

export default QismContact;