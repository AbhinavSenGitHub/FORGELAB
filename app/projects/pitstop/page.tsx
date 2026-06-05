"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, Play, CheckCircle2, ShieldCheck, Clock, FileCheck,
  Car, MapPin, BarChart3, Receipt, Phone, Bell, FileText, UserCheck,
  Scan, Camera, Image as ImageIcon, MessageSquare, Globe, Navigation
} from "lucide-react";
import Link from "next/link";

export default function PitstopPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0a0a0b] text-slate-100 selection:bg-rose-500/30 font-sans overflow-hidden">

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-rose-500/15 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-500/12 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern-strong opacity-[0.05]" />
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-xl bg-[#0a0a0b]/70 border-b border-white/[0.06]">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white transition-transform group-hover:-translate-x-1">
            <ArrowRight className="w-4 h-4 rotate-180" />
          </div>
          <span className="text-sm font-bold tracking-widest uppercase text-slate-300 font-mono">Back to FORGELAB</span>
        </Link>
        <span className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full ember-bead bg-gradient-to-br from-amber-300 via-orange-500 to-rose-500" />
          <span className="text-xl font-display font-bold tracking-tighter text-white">PITSTOP<span className="text-rose-400">.</span></span>
        </span>
      </nav>

      <main className="relative z-10 pt-40 pb-32">

        {/* HERO SECTION */}
        <section className="px-6 md:px-12 max-w-[1600px] mx-auto min-h-[85vh] flex flex-col justify-center items-center">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left: Content */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 font-bold text-xs uppercase tracking-widest w-fit font-mono"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500"></span>
                </span>
                Smart Vehicle Care
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]"
              >
                AI-Powered <br/>
                <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Vehicle Service.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl"
              >
                Transform vehicle maintenance with intelligent inspection, real-time tracking, and seamless service management. Experience hassle-free car care powered by cutting-edge AI technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mt-4"
              >
                <button className="px-8 py-4 rounded-full bg-white text-slate-950 font-bold tracking-wide hover:bg-slate-200 transition-colors shadow-xl shadow-black/30">
                  Get Started
                </button>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="px-8 py-4 rounded-full bg-white/[0.04] text-white font-bold tracking-wide hover:bg-white/[0.08] transition-colors flex items-center gap-3 border border-white/10"
                >
                  <Play className="w-4 h-4 fill-current" /> Watch Demo
                </button>
              </motion.div>
            </div>

            {/* Right: Premium Mockup Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative h-[700px] w-full flex items-center justify-center perspective-[2000px]"
            >
              {/* Main Phone Mockup */}
              <div className="relative w-[320px] h-[650px] bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(244,63,94,0.35)] border-[8px] border-slate-900 overflow-hidden z-20 flex flex-col transform-gpu rotate-y-[-10deg] rotate-x-[5deg] translate-x-12">

                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full z-50 flex items-center justify-between px-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>

                {/* Status Bar */}
                <div className="h-12 w-full flex items-center justify-between px-6 pt-2 text-[10px] font-bold z-40 relative text-slate-900">
                  <span>9:41</span>
                  <div className="flex gap-1.5 items-center">
                     <div className="w-4 h-2.5 rounded-sm border border-black flex justify-end p-[1px]"><div className="w-2 h-full bg-black rounded-[1px]" /></div>
                  </div>
                </div>

                {/* App Content */}
                <div className="flex-1 bg-slate-50 flex flex-col p-6 overflow-hidden relative">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight text-slate-900">Vehicle Status</h3>
                      <p className="text-sm font-bold text-slate-400">BMW 320d • Active Service</p>
                    </div>
                  </div>

                  {/* Service Timeline */}
                  <div className="flex-1 relative">
                    <div className="absolute left-[15px] top-4 bottom-12 w-0.5 bg-slate-200" />

                    <div className="flex gap-4 mb-8 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Check-in Complete</h4>
                        <p className="text-xs text-slate-500 font-medium">10:30 AM • Completed</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-8 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-rose-500/30">
                        <div className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Service in Progress</h4>
                        <p className="text-xs text-rose-500 font-bold">⏱ Currently working</p>
                      </div>
                    </div>

                    <div className="flex gap-4 relative z-10 opacity-50">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">Ready for Delivery</h4>
                        <p className="text-xs text-slate-500 font-medium">Pending completion</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Scan Banner */}
                  <div className="mt-auto bg-slate-900 text-white p-5 rounded-2xl relative overflow-hidden shadow-2xl">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-rose-500/30 blur-2xl rounded-full" />
                    <Scan className="w-6 h-6 text-rose-400 mb-3" />
                    <h4 className="font-bold mb-1">AI Inspection Active</h4>
                    <p className="text-xs text-slate-300">3 issues detected • 2 parts need approval</p>
                    <button className="mt-4 w-full py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-xs font-bold backdrop-blur-md border border-white/10">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating AI Scan Card */}
              <motion.div
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-12 w-64 bg-[#101012]/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 z-30 transform-gpu rotate-y-[15deg] translate-z-[50px]"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-rose-500/15 flex items-center justify-center text-rose-400">
                      <Scan className="w-4 h-4" />
                    </div>
                    <span className="font-black text-sm text-white tracking-wide">AI Scan</span>
                  </div>
                  <span className="px-2 py-1 bg-emerald-500/15 text-emerald-400 text-[10px] font-bold rounded-full animate-pulse">Real-time</span>
                </div>

                {/* Scanning Animation lines */}
                <div className="relative h-24 w-full bg-white/[0.04] rounded-xl overflow-hidden mb-4 border border-white/10">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
                   {/* Scanning laser */}
                   <motion.div
                     animate={{ top: ["0%", "100%", "0%"] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     className="absolute left-0 right-0 h-0.5 bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,1)] z-10"
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <Car className="w-12 h-12 text-slate-600" />
                   </div>
                </div>

                <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified</span>
                  <span>100% Safe</span>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </section>

        {/* WHY CHOOSE PITSTOP */}
        <section className="px-6 md:px-12 py-32 max-w-[1400px] mx-auto bg-white/[0.02] rounded-[3rem] border border-white/[0.06] mt-20 relative z-20">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-rose-400 font-mono font-bold text-sm tracking-widest uppercase">/ Why Pitstop</span>
            <h2 className="mt-3 text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-6">Why Choose Pitstop?</h2>
            <p className="text-xl text-slate-400 font-medium">Industry-leading technology meets exceptional customer service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">

            {/* Feature 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="flex flex-col gap-6">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/15 flex items-center justify-center text-rose-400 border border-rose-500/20">
                <Scan className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold tracking-tight text-white">Advanced AI-Powered <br/> Vehicle Inspection</h3>
              <p className="text-lg text-slate-400 leading-relaxed font-medium">Upload images or audio descriptions of your damaged vehicle for instant analysis. Our system identifies damaged parts, assesses severity, and suggests solutions.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }} className="flex flex-col gap-6 md:mt-24">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/15 flex items-center justify-center text-blue-400 border border-blue-500/20">
                <Navigation className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold tracking-tight text-white">Real-Time Service <br/> Tracking</h3>
              <p className="text-lg text-slate-400 leading-relaxed font-medium">Complete visibility throughout the service journey. Track updates from check-in to delivery. Push notifications keep you informed with live photos of your vehicle.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="flex flex-col gap-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <FileCheck className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold tracking-tight text-white">Seamless Insurance <br/> Claim Integration</h3>
              <p className="text-lg text-slate-400 leading-relaxed font-medium">Select insurance claim options while booking. The app clearly shows which repairs are covered based on damage assessment, ensuring full transparency.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }} className="flex flex-col gap-6 md:mt-24">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/15 flex items-center justify-center text-purple-400 border border-purple-500/20">
                <Receipt className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-bold tracking-tight text-white">Transparent Part <br/> Replacement Approval</h3>
              <p className="text-lg text-slate-400 leading-relaxed font-medium">No surprise bills. Service advisors send detailed replacement requests with pricing. Approve, reject, or request alternatives in real-time with full control.</p>
            </motion.div>

          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-6 md:px-12 py-40 max-w-[1400px] mx-auto">
           <div className="mb-20 text-center">
              <span className="text-rose-400 font-mono font-bold text-sm tracking-widest uppercase">/ Process</span>
              <h2 className="mt-3 text-5xl md:text-7xl font-display font-bold tracking-tighter text-white mb-6">How It Works</h2>
              <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">Empowering Your Vehicle Care. Book, track, and manage your car service with cutting-edge technology and exceptional customer experience.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Car Service Booking", desc: "Users can easily book car service appointments through the app with multiple service types available." },
                { step: "02", title: "Pick-up & Drop Facility", desc: "Convenient doorstep car pickup and drop option available. Eliminates the need to drive to the center." },
                { step: "03", title: "Service Progress Tracking", desc: "Real-time timeline view of the car service stages. Monitor every step — from check-in to delivery." },
                { step: "04", title: "Cost Control", desc: "Advisors send part replacement approval requests. Approve or reject to avoid unwanted costs." }
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-6 p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-rose-500/40 hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="text-6xl font-display font-bold text-white/10 group-hover:text-rose-500/40 transition-colors duration-500">{item.step}</div>
                  <h4 className="text-xl font-bold text-white mt-2">{item.title}</h4>
                  <p className="text-slate-400 font-medium">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* COMPLETE FEATURE SUITE (BENTO GRID) */}
        <section className="px-6 md:px-12 pb-32 max-w-[1600px] mx-auto">
          <div className="mb-20">
            <span className="text-rose-400 font-mono font-bold text-sm tracking-widest uppercase">/ Feature Suite</span>
            <h2 className="mt-3 text-4xl md:text-6xl font-display font-bold tracking-tighter text-white mb-6">Complete Feature Suite</h2>
            <p className="text-xl text-slate-400 font-medium max-w-2xl">Everything you need for hassle-free vehicle maintenance and repair management.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              { title: "Roadside Assistance", desc: "24/7 Roadside Assistance (RSA) feature for emergencies like breakdowns or accidents.", icon: <Car className="w-6 h-6"/>, color: "bg-blue-500/15 text-blue-400" },
              { title: "Emergency Contacts", desc: "Quick-access emergency contact feature for instant help whenever you need it.", icon: <Phone className="w-6 h-6"/>, color: "bg-red-500/15 text-red-400" },
              { title: "Push Notifications", desc: "Real-time updates on service progress, approvals, payments, and exclusive offers.", icon: <Bell className="w-6 h-6"/>, color: "bg-amber-500/15 text-amber-400" },
              { title: "Insurance Integration", desc: "Claim insurance directly while booking a service with seamless partner integration.", icon: <ShieldCheck className="w-6 h-6"/>, color: "bg-emerald-500/15 text-emerald-400" },
              { title: "User & Vehicle Verification", desc: "Verification of insurance, RC, and car details to ensure authenticity and authorized use.", icon: <UserCheck className="w-6 h-6"/>, color: "bg-indigo-500/15 text-indigo-400" },
              { title: "AI-Powered Self Inspection", desc: "AI-based damage detection by uploading car photos or recording a short video/audio message.", icon: <Scan className="w-6 h-6"/>, color: "bg-rose-500/15 text-rose-400" },
              { title: "Geo-Tagging Images", desc: "Every uploaded car image is geo-tagged to maintain transparency and authenticity.", icon: <MapPin className="w-6 h-6"/>, color: "bg-cyan-500/15 text-cyan-400" },
              { title: "Before & After Comparison", desc: "View before and after images of your car once the repair is completed.", icon: <ImageIcon className="w-6 h-6"/>, color: "bg-purple-500/15 text-purple-400" },
              { title: "AI Avatar Chatbot", desc: "Interactive AI avatar assistant to help users with booking, queries, and issue resolution.", icon: <MessageSquare className="w-6 h-6"/>, color: "bg-pink-500/15 text-pink-400" },
              { title: "Localization Support", desc: "Multi-language support to make the app accessible to users across regions.", icon: <Globe className="w-6 h-6"/>, color: "bg-white/10 text-slate-300" }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.color} transition-transform group-hover:scale-110`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}

          </div>
        </section>

      </main>

      {/* Footer CTA */}
      <section className="bg-black py-32 px-6 text-center relative overflow-hidden border-t border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full max-w-4xl bg-gradient-to-b from-rose-500/20 to-transparent blur-[150px] rounded-full pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">Ready to revolutionize <br/> vehicle care?</h2>
          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-lg hover:brightness-110 transition-all shadow-[0_8px_30px_-8px_rgba(244,63,94,0.6)]">
            Start Your Project
          </button>
          <p className="mt-12 text-sm font-mono font-bold tracking-widest uppercase text-slate-500 flex items-center justify-center gap-2.5">
            <span className="w-2 h-2 rounded-full ember-bead bg-gradient-to-br from-amber-300 via-orange-500 to-rose-500" />
            Forged by FORGELAB°
          </p>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/85 backdrop-blur-sm" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-black/50" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors"
            >
              ✕
            </button>
            <iframe
              src="https://www.youtube.com/embed/TVA29ugY5Rc?autoplay=1"
              title="Pitstop Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
}
