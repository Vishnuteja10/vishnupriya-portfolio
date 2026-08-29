"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [nYears, setNYears] = useState(2);
  const [nBrands, setNBrands] = useState(7);
  const [nReturn, setNReturn] = useState(32);
  const [barsIn, setBarsIn] = useState(false);
  const [sel, setSel] = useState(3);
  const [hov, setHov] = useState<{ r: number; c: number } | null>(null);
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  // References for IntersectionObserver
  const kpisRef = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<HTMLElement[]>([]);
  const hasTickerRun = useRef(false);

  // Timeline data
  const timeline = [
    { stage: 'Year 1', title: 'SEO Foundation', body: 'Content strategy, competitor analysis, blog and Pinterest strategy for brands like Haritha Foods and Tatva Hills Superfoods.', meta: 'Execution' },
    { stage: 'Transition', title: 'Retention Marketing', body: 'Segmentation, campaign scheduling and flow execution across WhatsApp, Email and SMS.', meta: 'Ownership' },
    { stage: 'Year 2', title: 'Retention Strategist', body: 'Independent ownership of 4+ accounts, expanded to 7+. Moved from execution to full-funnel strategy.', meta: 'Data → Lifecycle Design → CRM → Reporting' }
  ];

  // Expertise data
  const expertise = [
    { n: '01', title: 'Retention Rate Diagnostics & Recovery', body: 'Cohort analysis, RFM scoring, identifying which product or segment is dragging down repeat rate, and building recovery flows.' },
    { n: '02', title: 'Email Deliverability & Domain Reputation', body: 'Spam rate control, warmup strategy, platform migration and sender reputation recovery.' },
    { n: '03', title: 'AOV & Cross-sell Strategy', body: 'Bundling, upsell and cross-sell flow design, and post-purchase nurture sequencing.' },
    { n: '04', title: 'Lifecycle Funnel Architecture', body: 'End-to-end flow builds — welcome, abandonment, post-purchase, win-back and VIP — mapped to lifecycle stage.' },
    { n: '05', title: 'Cohort & Segmentation Strategy', body: 'Pack-size and reorder-cycle cohorts, concern-based segmentation and behavioral triggers.' },
    { n: '06', title: 'Data & Reporting', body: 'GA4 setup, UTM strategy, Shopify analytics and client-facing performance reporting.' },
    { n: '07', title: 'Cross-platform CRM Execution', body: 'Convertway, SagePilot, Bitespeed, Mailchimp, Brevo and KwikEngage.' }
  ];

  // Backbone data
  const backbone = [
    { n: '01', title: 'Lifecycle Stage Mapping', body: 'Where each customer actually is between first and next purchase.' },
    { n: '02', title: 'Segmentation Logic', body: 'Cohorts defined by behavior and reorder cycle, not demographics.' },
    { n: '03', title: 'Channel × Trigger Matrix', body: 'Which channel fires on which behavioral trigger, and at what cadence.' },
    { n: '04', title: 'Continuous Diagnostic Loop', body: 'Read the response layer monthly; feed findings back into the three layers above.' }
  ];

  // KPI rows data
  const kpiRows = [
    { kpi: 'Retention Rate', diagnosis: 'Reorder timing misaligned with actual usage cycles.', flow: 'Post-purchase + Reorder + Win-back' },
    { kpi: 'AOV', diagnosis: 'Single-product buyers never see the adjacent product.', flow: 'Cross-sell + Upsell + Bundling' },
    { kpi: 'Deliverability', diagnosis: 'Sender reputation eroded by cadence and list quality.', flow: 'Sending cadence + Hygiene + Warmup' },
    { kpi: 'Funnel Drop-off', diagnosis: 'Structural leak, not a messaging problem.', flow: 'Abandonment + Trigger diagnostics' }
  ];

  // Stack data
  const stack = [
    { label: 'CRM & Marketing Automation', items: 'Mailchimp · Brevo · Bitespeed · SagePilot · Convertway · KwikEngage' },
    { label: 'Analytics & Reporting', items: 'GA4 · Shopify Analytics · UTM Tracking Frameworks' },
    { label: 'Channels', items: 'Email · WhatsApp · SMS · RCS · AI Calling · Web Push' }
  ];

  // Cohort details
  const rows = [
    { label: 'C1', note: 'before diagnosis', vals: [100, 52, 28, 20, 17, 16] },
    { label: 'C2', note: 'flows rebuilt', vals: [100, 58, 33, 25, 21, 20] },
    { label: 'C3', note: 'reorder cohorts', vals: [100, 64, 40, 32, 28, 27] },
    { label: 'C4', note: 'lifecycle system live', vals: [100, 71, 48, 39, 35, 32] }
  ];

  const cases = [
    {
      n: '01', title: 'Domain Reputation & Deliverability Recovery', industry: 'D2C wellness / nutrition',
      headline: 'Inbox restored',
      problem: 'Email domain reputation had degraded, spam rates were high, and campaigns were landing in spam and promotions instead of the inbox — killing downstream retention metrics.',
      approach: 'Diagnosed the root cause of reputation decay, planned and executed a structured platform migration and warmup strategy, and rebuilt sending cadence and list hygiene practices.',
      resultBig: 'Deliverability recovered',
      result: 'Significant measurable improvement in deliverability and inbox placement, restoring the effectiveness of downstream retention flows.',
      relevant: 'Your emails are going to spam, or open rates have quietly dropped over time.',
      brand: 'Brand undisclosed',
      diagnostic: 'Traced the reputation decay to its root cause across sending history, cadence and list quality — not to creative or offer.',
      solution: 'Planned and executed a structured platform migration and warmup, then rebuilt sending cadence and list hygiene practices.',
      diagTag: 'Root cause: sender reputation',
      solTag: 'Platform migration + warmup'
    },
    {
      n: '02', title: 'Retention Rate Turnaround', industry: 'D2C wellness',
      headline: '14% → 32%',
      problem: 'Returning customer rate had fallen and needed structural recovery rather than more campaigns.',
      approach: 'Ran cohort and product-level retention diagnostics to isolate which products and segments were driving churn. Rebuilt post-purchase nurture around actual reorder cycles and restructured broadcast strategy around those findings.',
      resultBig: '14% → 32%',
      result: 'Returning customer rate more than doubled.',
      relevant: 'Your repeat purchase rate has plateaued or declined and you don’t know which segment or product is responsible.',
      note: 'Brand name withheld until the engagement association is confirmed.',
      brand: 'Brand withheld until confirmed',
      diagnostic: 'Cohort and product-level retention diagnostics to isolate which products and segments were actually driving churn.',
      solution: 'Rebuilt post-purchase nurture around real reorder cycles and restructured broadcast strategy around those findings.',
      diagTag: 'Cohort + product-level analysis',
      solTag: 'Post-purchase rebuild'
    },
    {
      n: '03', title: 'Reorder Cohort & M1–M2 Growth', industry: 'Pharma-backed wellness',
      headline: 'M1 → M2 lift',
      problem: 'The hero product, Bitter Drops, came in three pack sizes, each creating a distinct reorder cycle. Existing flows weren’t accounting for these differences.',
      approach: 'Mapped each pack size to its own reorder cohort. Refined lifecycle copy for review and UGC capture, and designed cross-sell sequencing around actual product usage cycles.',
      resultBig: 'M1 & M2 retention up',
      result: 'Measurable improvement in M1 and M2 retention for the hero product cohort.',
      relevant: 'You sell products in multiple sizes or variants but your flows treat every buyer the same way.',
      brand: 'Arth by Emcure',
      diagnostic: 'Found three pack sizes of the hero product, each producing a distinct reorder cycle that existing flows ignored.',
      solution: 'Mapped each pack size to its own reorder cohort, refined lifecycle copy for review and UGC capture, and sequenced cross-sell around usage cycles.',
      diagTag: '3 pack sizes, 3 reorder cycles',
      solTag: 'Cohort-specific sequencing'
    },
    {
      n: '04', title: 'Funnel & Structural Conversion Fix', industry: 'D2C kids’ & home care',
      headline: 'Two root causes',
      problem: 'A structural cart-to-checkout collapse on hero product pages was silently killing conversion. At the same time, a delivery failure across already-executed broadcasts meant campaigns weren’t reaching customers.',
      approach: 'Ran a full funnel and execution audit, diagnosed both issues independently, and built a prioritized fix list focused on lifting returning customer rate rather than simply increasing top-of-funnel traffic.',
      resultBig: 'Diagnosed & sequenced',
      result: 'Identified and sequenced two compounding structural issues before they could distort future campaign performance data.',
      relevant: 'You’re running campaigns but suspect the funnel itself — not the messaging — is where customers are dropping off.',
      brand: 'Brand undisclosed',
      diagnostic: 'A full funnel and execution audit isolated two independent failures: a cart-to-checkout collapse and a broadcast delivery failure.',
      solution: 'Built a prioritized fix list sequenced around lifting returning customer rate rather than adding top-of-funnel traffic.',
      diagTag: '2 independent failures found',
      solTag: 'Prioritized fix roadmap'
    },
    {
      n: '05', title: 'Full Lifecycle Architecture — 0 → 1', industry: 'D2C beauty / skincare',
      headline: '13 flows built',
      problem: 'No structured lifecycle marketing system existed. Flows, segmentation and reporting all needed to be built from scratch.',
      approach: 'Built a complete retention execution package: 13-flow architecture, 90-day build plan, flow copy and segmentation model — structured around concern-family and lifecycle stage rather than generic demographics.',
      resultBig: '13-flow system, 90-day plan',
      result: 'A fully documented, execution-ready retention system covering the customer lifecycle.',
      relevant: 'You have no retention system in place and need one built from the ground up.',
      brand: 'Brand undisclosed',
      diagnostic: 'No lifecycle system existed — no flow architecture, no segmentation model, no reporting layer to read.',
      solution: '13-flow architecture, a 90-day build plan, flow copy, and segmentation by concern-family × lifecycle stage.',
      diagTag: 'Zero lifecycle system in place',
      solTag: '13 flows · 90-day plan'
    },
    {
      n: '06', title: 'Multi-Product Churn Diagnosis & Recovery', industry: 'D2C food / nutrition',
      headline: '~17% → 27%',
      problem: 'Two specific products were driving a disproportionate share of churn and dragging down overall returning customer rate.',
      approach: 'Used cohort-timed post-purchase nurture and retention diagnostics to isolate the problem products, then built targeted recovery flows around them.',
      resultBig: '~17% → 27%',
      result: 'Returning customer rate recovered across the affected cohorts.',
      relevant: 'A small number of products or SKUs are quietly dragging down overall retention.',
      brand: 'Brand undisclosed',
      diagnostic: 'Cohort-timed diagnostics isolated two products carrying a disproportionate share of total churn.',
      solution: 'Cohort-timed post-purchase nurture plus targeted recovery flows built around those specific products.',
      diagTag: '2 products driving most churn',
      solTag: 'Targeted recovery flows'
    },
    {
      n: '07', title: 'Automated Journey & Reporting Infrastructure', industry: 'Streetwear / lifestyle',
      headline: 'Operating system',
      problem: 'Needed consistent automated lifecycle journeys and a repeatable reporting cadence for stakeholder visibility.',
      approach: 'Built and documented automated journey flows and monthly broadcast calendars, and standardized client reporting and POA documentation across two CRM platforms.',
      resultBig: 'Repeatable & scalable',
      result: 'Established a repeatable retention operating system across accounts.',
      relevant: 'Your retention marketing runs ad hoc and you need a consistent, reportable system.',
      brand: 'Brand undisclosed',
      diagnostic: 'Lifecycle journeys and reporting ran ad hoc, leaving stakeholders without a repeatable view of performance.',
      solution: 'Documented automated journeys and monthly broadcast calendars; standardized reporting and POA across two CRM platforms.',
      diagTag: 'No repeatable reporting cadence',
      solTag: '2 CRM platforms standardized'
    }
  ];

  // Helper for KPI counter animation
  const runCounters = () => {
    if (hasTickerRun.current) return;
    hasTickerRun.current = true;
    const start = Date.now();
    const dur = 1400;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const ticker = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / dur);
      if (p >= 1) {
        clearInterval(ticker);
        setNYears(2);
        setNBrands(7);
        setNReturn(32);
      } else {
        const e = ease(p);
        setNYears(Math.round(2 * e));
        setNBrands(Math.round(7 * e));
        setNReturn(Math.round(14 + 18 * e));
      }
    }, 40);
  };

  useEffect(() => {
    // Scroll progress & navbar height
    const handleScroll = () => {
      const y = window.scrollY;
      const nav = document.getElementById('nav');
      const prog = document.getElementById('progress');
      if (nav) {
        nav.style.padding = y > 60 ? '13px 5vw' : '20px 5vw';
      }
      if (prog) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        prog.style.width = (h > 0 ? Math.min(100, (y / h) * 100) : 0) + '%';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Bars Entrance timing
    const barsTimer = setTimeout(() => setBarsIn(true), 260);

    // IntersectionObserver for elements with [data-reveal]
    const revealNodes = revealRefs.current.filter(Boolean);
    revealNodes.forEach((n) => {
      n.classList.add('reveal-element');
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('revealed');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    revealNodes.forEach((n) => io.observe(n));

    // KPI Counters trigger
    let kio: IntersectionObserver | null = null;
    const kpiEl = kpisRef.current;
    if (kpiEl) {
      const rect = kpiEl.getBoundingClientRect();
      const below = rect.top > window.innerHeight * 0.9;
      if (below) {
        setNYears(0);
        setNBrands(0);
        setNReturn(14);
        kio = new IntersectionObserver((entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            runCounters();
            kio?.disconnect();
          }
        }, { threshold: 0.25 });
        kio.observe(kpiEl);
      } else {
        runCounters();
      }
    }

    // Safety fallback for animations
    const revealFallback = setTimeout(() => {
      revealNodes.forEach((n) => {
        n.classList.add('revealed');
      });
      io.disconnect();
    }, 2500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(barsTimer);
      clearTimeout(revealFallback);
      io.disconnect();
      kio?.disconnect();
    };
  }, []);

  const active = hov ? rows[hov.r] : rows[sel];
  const activeIdx = hov ? hov.r : sel;
  const pts = active.vals.map((v, i) => [i * 20, 40 - v * 0.34]);

  const ringPct = Math.max(0, Math.min(100, nReturn));


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div style={{ background: '#0a1310', color: '#edf1e9', fontFamily: '"IBM Plex Sans", system-ui, sans-serif', fontWeight: 300, overflowX: 'hidden' }}>
      
      {/* Sticky Navigation Bar */}
      <div id="nav" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(10,19,16,0.86)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #1d2e27', padding: '20px 5vw', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '24px', transition: 'padding .35s ease' }}>
        <a href="#top" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '13px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>
          Vishnupriya
        </a>
        <div style={{ display: 'flex', gap: 'clamp(16px, 2.4vw, 34px)', fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8fa197', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#expertise" className="nav-link">Expertise</a>
          <a href="#frameworks" className="nav-link">Frameworks</a>
          <a href="#work" className="nav-link">Case Studies</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div id="progress" style={{ position: 'absolute', left: 0, bottom: '-1px', height: '1px', width: '0%', background: '#d98a5f', transition: 'width 0.1s ease' }}></div>
      </div>

      {/* Hero Section */}
      <section id="top" style={{ position: 'relative', padding: 'clamp(56px, 9vw, 132px) 5vw clamp(48px, 6vw, 96px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: 'clamp(40px, 6vw, 88px)', alignItems: 'end', maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ position: 'absolute', top: '-8%', left: '-6%', width: 'min(620px, 55vw)', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217, 138, 95, 0.10), rgba(217, 138, 95, 0) 65%)', pointerEvents: 'none', animation: 'glowPulse 12s ease-in-out infinite' }}></div>
        <div ref={(el) => { if (el) revealRefs.current[0] = el; }} style={{ position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: 'clamp(26px, 3vw, 44px)' }}>
            <div style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(24px, 2.1vw, 32px)', lineHeight: 1, letterSpacing: '0.01em' }}>Vishnupriya</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ width: '26px', height: '1px', background: '#d98a5f' }}></span>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#e0a37c' }}>Retention Marketing Strategist</span>
            </div>
          </div>
          <h1 style={{ fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontSize: 'clamp(46px, 6.8vw, 108px)', lineHeight: 0.97, letterSpacing: '-0.028em', margin: 0, textWrap: 'pretty', maxWidth: '15em' }}>
            Turning one-time buyers into <em style={{ fontStyle: 'italic', color: '#e8b795' }}>repeat</em> customers.
          </h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(20px, 3vw, 44px)', marginTop: 'clamp(32px, 3.6vw, 52px)', paddingTop: 'clamp(22px, 2.4vw, 30px)', borderTop: '1px solid #1d2e27' }}>
            <div style={{ minWidth: '90px' }}>
              <div className="num" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(30px, 2.8vw, 44px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>{nYears} yrs</div>
              <div style={{ marginTop: '8px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '9.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7f9188', maxWidth: '16ch' }}>Performance &amp; lifecycle</div>
            </div>
            <div style={{ minWidth: '90px' }}>
              <div className="num" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(30px, 2.8vw, 44px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>{nBrands}+</div>
              <div style={{ marginTop: '8px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '9.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7f9188', maxWidth: '16ch' }}>D2C brands owned</div>
            </div>
            <div style={{ minWidth: '110px' }}>
              <div className="num" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(30px, 2.8vw, 44px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>14 → {nReturn}%</div>
              <div style={{ marginTop: '8px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '9.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7f9188', maxWidth: '18ch' }}>Returning customer rate</div>
            </div>
            <div style={{ minWidth: '90px' }}>
              <div className="num" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(30px, 2.8vw, 44px)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>2×</div>
              <div style={{ marginTop: '8px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '9.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7f9188', maxWidth: '16ch' }}>Retention improvement</div>
            </div>
          </div>
          <p style={{ maxWidth: '46ch', margin: 'clamp(28px, 3vw, 40px) 0 0', fontSize: 'clamp(16px, 1.25vw, 19px)', lineHeight: 1.64, color: '#c3cec3', textWrap: 'pretty' }}>
            I diagnose where the customer journey breaks, then build the lifecycle systems, segmentation and CRM strategy that move customers toward their next purchase.
          </p>
          <a href="#proof" className="explore-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginTop: 'clamp(40px, 5vw, 72px)', fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8fa197' }}>
            <span>Scroll to explore</span>
            <span id="scrollcue" style={{ display: 'block', position: 'relative', width: '1px', height: '38px', background: '#22352d', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(#d98a5f, transparent)', animation: 'cueSlide 2.4s ease-in-out infinite' }}></span>
            </span>
          </a>
        </div>

        {/* Hero image and background gradients */}
        <div ref={(el) => { if (el) revealRefs.current[1] = el; }} style={{ justifySelf: 'stretch', alignSelf: 'stretch', width: '100%', position: 'relative', minHeight: 'clamp(380px, 44vw, 620px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', top: '2%', left: '6%', width: '86%', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217, 138, 95, 0.26), rgba(217, 138, 95, 0.06) 46%, rgba(217, 138, 95, 0) 70%)', filter: 'blur(2px)', animation: 'glowPulse 11s ease-in-out infinite', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '-4%', right: '-2%', width: '52%', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(143, 161, 151, 0.18), rgba(143, 161, 151, 0) 68%)', filter: 'blur(4px)', animation: 'glowPulse 14s ease-in-out infinite reverse', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', top: '16%', right: '8%', width: '26%', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232, 183, 149, 0.20), rgba(232, 183, 149, 0) 70%)', animation: 'floatY 13s ease-in-out infinite', pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', bottom: '14%', left: '2%', width: '18%', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217, 138, 95, 0.22), rgba(217, 138, 95, 0) 70%)', animation: 'floatY 9s ease-in-out infinite reverse', pointerEvents: 'none' }}></div>
          <div style={{ position: 'relative', width: 'min(100%, 430px)' }}>
            <img src="/assets/vishnupriya.jpeg" alt="Vishnupriya at her desk" style={{ display: 'block', width: '100%', height: 'auto', filter: 'saturate(0.74) contrast(1.05) brightness(0.92) sepia(0.10)', maskImage: 'radial-gradient(120% 100% at 50% 45%, #000 58%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0) 100%)', WebkitMaskImage: 'radial-gradient(120% 100% at 50% 45%, #000 58%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(110% 90% at 50% 40%, rgba(217, 138, 95, 0.10), rgba(10, 19, 16, 0.30) 70%, rgba(10, 19, 16, 0.85) 100%)', mixBlendMode: 'multiply' }}></div>
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(60% 45% at 72% 16%, rgba(232, 183, 149, 0.18), rgba(232, 183, 149, 0) 60%)' }}></div>
          </div>
          <div style={{ position: 'absolute', bottom: '2%', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', fontFamily: '"IBM Plex Mono", monospace', fontSize: '9.5px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8fa197', whiteSpace: 'nowrap' }}>
            <span>Vishnupriya</span><span style={{ color: '#e0a37c' }}>Retention · Lifecycle · CRM</span>
          </div>
        </div>
      </section>

      {/* Cohort retention heat table & interactive curve */}
      <section style={{ padding: '0 5vw clamp(56px, 7vw, 96px)', maxWidth: '1600px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(28px, 4vw, 64px)', alignItems: 'end' }}>
        <div ref={(el) => { if (el) revealRefs.current[2] = el; }} style={{ width: '100%', position: 'relative' }}>
          <div style={{ position: 'relative', background: '#0e1b16', border: '1px solid #1d2e27', padding: 'clamp(20px, 2.3vw, 30px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7f9188' }}>
              <span>Cohort retention · illustrative</span><span style={{ color: '#e0a37c' }}>Interactive</span>
            </div>
            <div style={{ minHeight: '34px', display: 'flex', alignItems: 'baseline', gap: '10px', margin: '16px 0 6px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '0.12em', color: '#8fa197' }}>
              <span style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '30px', lineHeight: 1, letterSpacing: '-0.02em' }} className="num">
                {hov ? rows[hov.r].vals[hov.c] + '%' : active.vals[5] + '%'}
              </span>
              <span>
                {hov ? rows[hov.r].label + ' cohort · month ' + hov.c + ' retained' : active.label + ' · ' + active.note + ' · M5 retained'}
              </span>
            </div>
            
            {/* SVG Curve */}
            <div style={{ height: '96px', margin: '10px 0 20px' }}>
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
                <defs>
                  <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d98a5f" stopOpacity="0.30" />
                    <stop offset="100%" stopColor="#d98a5f" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  points={pts.map(p => p.join(',')).join(' ') + ' 100,40 0,40'}
                  fill="url(#curveFill)"
                  style={{ transition: 'all .5s ease' }}
                />
                <polyline
                  points={pts.map(p => p.join(',')).join(' ')}
                  fill="none"
                  stroke="#e8b795"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  style={{ strokeDasharray: 320, animation: 'drawLine 1.6s ease-out forwards', transition: 'all .5s ease' }}
                />
                {pts.map((p, i) => (
                  <circle
                    key={'p' + i}
                    cx={p[0]}
                    cy={p[1]}
                    r={(hov && hov.r === activeIdx && hov.c === i) ? 3 : 1.6}
                    fill="#0e1b16"
                    stroke="#e8b795"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                    style={{ transition: 'r .25s ease, cx .5s ease, cy .5s ease' }}
                  />
                ))}
              </svg>
            </div>

            {/* Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '12px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '9.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5f7269' }}>
                <span>Cohort</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px', textAlign: 'center' }}>
                  <span>M0</span><span>M1</span><span>M2</span><span>M3</span><span>M4</span><span>M5</span>
                </div>
              </div>
              
              {rows.map((row, ri) => {
                const labelColor = ri === sel ? '#e8b795' : '#8fa197';
                return (
                  <div key={ri} onClick={() => setSel(ri)} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
                    <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '0.1em', color: labelColor }}>
                      {row.label}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '4px' }}>
                      {row.vals.map((v, ci) => {
                        const isHov = hov && hov.r === ri && hov.c === ci;
                        const a = barsIn ? 0.1 + (v / 100) * 0.82 : 0.04;
                        return (
                          <div
                            key={ci}
                            onMouseEnter={() => setHov({ r: ri, c: ci })}
                            onMouseLeave={() => setHov(null)}
                            onClick={() => setSel(ri)}
                            style={{
                              height: '30px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontFamily: '"IBM Plex Mono", monospace',
                              fontSize: '10px',
                              letterSpacing: '0.04em',
                              color: v > 55 ? '#1a120c' : '#edf1e9',
                              background: `rgba(217, 138, 95, ${a.toFixed(3)})`,
                              outline: isHov ? '1px solid #e8b795' : (ri === sel ? '1px solid rgba(232, 183, 149, 0.35)' : '1px solid transparent'),
                              transform: isHov ? 'scale(1.06)' : 'none',
                              transition: `background .8s cubic-bezier(.2,.7,.2,1) ${ri * 70 + ci * 55}ms, transform .25s ease, outline-color .25s ease`,
                              cursor: 'pointer'
                            }}
                          >
                            {v}%
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginTop: '20px', paddingTop: '14px', borderTop: '1px solid #17261f', fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7f9188' }}>
              <span>Decay is a structure problem</span><span style={{ color: '#e0a37c' }}>not a volume problem</span>
            </div>
          </div>
        </div>
        <div ref={(el) => { if (el) revealRefs.current[3] = el; }} style={{ maxWidth: '44ch', paddingBottom: 'clamp(8px, 2vw, 28px)' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#e0a37c', marginBottom: '18px' }}>
            How I read a brand
          </div>
          <p style={{ margin: 0, fontSize: 'clamp(15.5px, 1.15vw, 17.5px)', lineHeight: 1.68, color: '#c3cec3' }}>
            Every account starts as a cohort table, not a campaign calendar. Hover any cell to read what that cohort retained; click a cohort to trace its curve. The gap between the first row and the last is what lifecycle architecture actually buys.
          </p>
        </div>
      </section>

      {/* KPI stats section */}
      <section id="proof" style={{ background: '#0e1b16', borderTop: '1px solid #1d2e27', borderBottom: '1px solid #1d2e27', padding: 'clamp(56px, 7vw, 104px) 5vw' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '18px', flexWrap: 'wrap', marginBottom: 'clamp(36px, 4.5vw, 64px)' }}>
            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#e0a37c' }}>The record so far</span>
            <span style={{ flex: 1, minWidth: '60px', height: '1px', background: '#1d2e27' }}></span>
          </div>
          <div id="kpis" ref={kpisRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(28px, 3.4vw, 52px)' }}>
            <div className="kpi-card">
              <div style={{ position: 'absolute', top: '-18px', left: '-14px', width: '130px', height: '130px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,138,95,0.16), rgba(217,138,95,0) 70%)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'relative', fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(50px, 4.8vw, 82px)', lineHeight: 0.9, letterSpacing: '-0.03em' }}>
                <span className="num">{nYears}</span> <span style={{ fontSize: '0.36em', letterSpacing: '0.02em', color: '#8fa197' }}>years</span>
              </div>
              <div style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.5, color: '#9faea4', maxWidth: '22ch' }}>
                Performance &amp; lifecycle marketing
              </div>
            </div>
            <div className="kpi-card">
              <div style={{ position: 'absolute', top: '-18px', left: '-14px', width: '130px', height: '130px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,138,95,0.16), rgba(217,138,95,0) 70%)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'relative', fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(50px, 4.8vw, 82px)', lineHeight: 0.9, letterSpacing: '-0.03em' }}>
                <span className="num">{nBrands}+</span>
              </div>
              <div style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.5, color: '#9faea4', maxWidth: '22ch' }}>
                D2C brands managed independently
              </div>
            </div>
            <div className="kpi-card">
              <div style={{ position: 'absolute', top: '-18px', left: '-14px', width: '130px', height: '130px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,138,95,0.16), rgba(217,138,95,0) 70%)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'relative', fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(50px, 4.8vw, 82px)', lineHeight: 0.9, letterSpacing: '-0.03em' }}>
                <span className="num">2×</span>
              </div>
              <div style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.5, color: '#9faea4', maxWidth: '22ch' }}>
                Retention rate improvement
              </div>
            </div>
            <div style={{ position: 'relative', borderTop: '1px solid #d98a5f', paddingTop: '20px', background: 'radial-gradient(120% 80% at 20% 0%, rgba(217,138,95,0.14), rgba(217,138,95,0) 70%)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
                <div style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(38px, 3.6vw, 60px)', lineHeight: 0.9, letterSpacing: '-0.03em', color: '#8fa197' }}>
                  14 <span style={{ color: '#e0a37c' }}>→</span> <span className="num">{nReturn}%</span>
                </div>
                
                {/* SVG Ring */}
                <div style={{ position: 'relative', width: '74px', height: '74px', borderRadius: '50%', flex: '0 0 auto', background: `conic-gradient(#e8b795 0turn ${ringPct / 100}turn, rgba(217,138,95,0.14) ${ringPct / 100}turn 1turn)` }}>
                  <div style={{ position: 'absolute', inset: '7px', borderRadius: '50%', background: '#0e1b16', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"IBM Plex Mono", monospace', fontSize: '13px', color: '#e8b795' }}>
                    {ringPct}%
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.5, color: '#c3cec3', maxWidth: '24ch' }}>
                Returning customer rate — more than doubled
              </div>
            </div>
            <div className="kpi-card">
              <div style={{ position: 'absolute', top: '-18px', left: '-14px', width: '130px', height: '130px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,138,95,0.16), rgba(217,138,95,0) 70%)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'relative', fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(42px, 4.2vw, 70px)', lineHeight: 0.9, letterSpacing: '-0.03em' }}>
                <span className="num">M1</span> <span style={{ color: '#e0a37c' }}>→</span> <span className="num">M2</span>
              </div>
              <div style={{ marginTop: '16px', fontSize: '14px', lineHeight: 1.5, color: '#9faea4', maxWidth: '24ch' }}>
                Cohort growth for pharma-backed wellness
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: 'clamp(72px, 9vw, 144px) 5vw', maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px, 5vw, 80px)', alignItems: 'start' }}>
          <div ref={(el) => { if (el) revealRefs.current[4] = el; }}>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#e0a37c' }}>01 / The Journey</div>
            <h2 style={{ fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontSize: 'clamp(34px, 3.9vw, 62px)', lineHeight: 1.04, letterSpacing: '-0.022em', margin: '22px 0 0', maxWidth: '20ch', textWrap: 'pretty' }}>
              From visibility metrics to customer behavior.
            </h2>
          </div>
          <div ref={(el) => { if (el) revealRefs.current[5] = el; }} style={{ display: 'flex', flexDirection: 'column', gap: '22px', fontSize: 'clamp(15.5px, 1.15vw, 17.5px)', lineHeight: 1.7, color: '#c3cec3', maxWidth: '62ch' }}>
            <p style={{ margin: 0 }}>
              <span style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.35em', lineHeight: 1, color: '#edf1e9' }}>I started my career in SEO,</span> and a year in, I moved into retention marketing — not because I planned it, but because the problems were more interesting. My team was shifting focus toward retention, and I found myself drawn to the “why” behind customer behavior rather than just visibility metrics.
            </p>
            <p style={{ margin: 0 }}>
              I began as an operational hire — building segments, scheduling campaigns, executing what strategists designed. Within a year, I was independently running the strategy, data diagnostics, and execution for individual client accounts.
            </p>
            <p style={{ margin: 0 }}>
              Today, I manage <mark style={{ background: 'rgba(217, 138, 95, 0.16)', color: '#e8b795', padding: '0 4px' }}>7+ D2C brand relationships</mark> end-to-end — across wellness, beauty, food, and streetwear — owning everything from lifecycle architecture to CRM implementation to client reporting.
            </p>
          </div>
        </div>

        <figure ref={(el) => { if (el) revealRefs.current[6] = el; }} style={{ margin: 'clamp(56px, 7vw, 104px) 0', borderTop: '1px solid #2a3d35', borderBottom: '1px solid #2a3d35', padding: 'clamp(32px, 4vw, 56px) 0' }}>
          <blockquote style={{ margin: 0, fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontStyle: 'italic', fontSize: 'clamp(30px, 4.7vw, 76px)', lineHeight: 1.06, letterSpacing: '-0.025em', maxWidth: '26ch', textWrap: 'pretty' }}>
            “I don’t treat retention as <span style={{ fontStyle: 'normal', color: '#e0a37c' }}>send more emails</span>.”
          </blockquote>
        </figure>

        <div ref={(el) => { if (el) revealRefs.current[7] = el; }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px, 4vw, 72px)', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7f9188', marginBottom: '18px' }}>
              Every account starts with a diagnostic
            </div>
            <div style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(24px, 2.5vw, 38px)', lineHeight: 1.16, letterSpacing: '-0.015em', maxWidth: '24ch' }}>
              What’s actually broken in the customer journey?
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '26px 1fr', gap: '14px', padding: '15px 0', borderTop: '1px solid #1d2e27', fontSize: '16px', color: '#c3cec3' }}>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', color: '#e0a37c' }}>A</span><span>A deliverability issue?</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '26px 1fr', gap: '14px', padding: '15px 0', borderTop: '1px solid #1d2e27', fontSize: '16px', color: '#c3cec3' }}>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', color: '#e0a37c' }}>B</span><span>A funnel leak?</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '26px 1fr', gap: '14px', padding: '15px 0', borderTop: '1px solid #1d2e27', fontSize: '16px', color: '#c3cec3' }}>
              <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', color: '#e0a37c' }}>C</span><span>A cohort-specific churn pattern?</span>
            </div>
            <div style={{ padding: '18px 0 0', borderTop: '1px solid #1d2e27', fontFamily: 'Newsreader, Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: '#e8b795' }}>
              The strategy is built backward from the diagnosis.
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Career shifts Section */}
      <section style={{ padding: 'clamp(56px, 6vw, 96px) 5vw clamp(72px, 9vw, 132px)', maxWidth: '1600px', margin: '0 auto' }}>
        <div ref={(el) => { if (el) revealRefs.current[8] = el; }} style={{ display: 'flex', alignItems: 'baseline', gap: '20px', flexWrap: 'wrap', marginBottom: 'clamp(36px, 4.5vw, 64px)' }}>
          <h3 style={{ fontFamily: '"IBM Plex Mono", monospace', fontWeight: 500, fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', margin: 0 }}>The Shift</h3>
          <div style={{ flex: 1, minWidth: '60px', height: '1px', background: '#1d2e27' }}></div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7f9188' }}>
            Execution <span style={{ color: '#e0a37c' }}>→</span> Ownership <span style={{ color: '#e0a37c' }}>→</span> Strategy
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 0 }}>
          {timeline.map((t, idx) => (
            <div key={idx} ref={(el) => { if (el) revealRefs.current[9 + idx] = el; }} className="timeline-card">
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e0a37c' }}>{t.stage}</div>
              <div style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(23px, 2.1vw, 32px)', lineHeight: 1.14, letterSpacing: '-0.015em', margin: '12px 0 14px', maxWidth: '16ch' }}>{t.title}</div>
              <p style={{ margin: '0 0 18px', fontSize: '15px', lineHeight: 1.62, color: '#9faea4', maxWidth: '34ch' }}>{t.body}</p>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7f9188' }}>{t.meta}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" style={{ padding: 'clamp(72px, 9vw, 132px) 5vw', background: '#0e1b16', borderTop: '1px solid #1d2e27', borderBottom: '1px solid #1d2e27' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div ref={(el) => { if (el) revealRefs.current[12] = el; }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(28px, 4vw, 72px)', alignItems: 'end', marginBottom: 'clamp(44px, 5.5vw, 80px)' }}>
            <div>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#e0a37c' }}>02 / What I Solve</div>
              <h2 style={{ fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontSize: 'clamp(34px, 4.4vw, 70px)', lineHeight: 1.02, letterSpacing: '-0.025em', margin: '22px 0 0' }}>
                Retention is a systems problem.
              </h2>
            </div>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.66, color: '#edf1e9', maxWidth: '44ch', justifySelf: 'end' }}>
              Seven areas where I work. Each is a place a retention funnel commonly breaks — and each demands a different diagnosis before anything gets sent.
            </p>
          </div>
          <div>
            {expertise.map((e, idx) => (
              <div key={idx} ref={(el) => { if (el) revealRefs.current[13 + idx] = el; }} className="expertise-row">
                <div style={{ flex: '0 0 34px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '0.1em', color: '#e0a37c' }}>{e.n}</div>
                <div style={{ flex: '1 1 300px', minWidth: 0, fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(22px, 2.15vw, 33px)', lineHeight: 1.14, letterSpacing: '-0.018em', textWrap: 'pretty' }}>{e.title}</div>
                <p style={{ flex: '1 1 340px', minWidth: 0, margin: 0, fontSize: '15.5px', lineHeight: 1.64, color: '#edf1e9', maxWidth: '52ch' }}>{e.body}</p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #2a3d35' }}></div>
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section id="frameworks" style={{ padding: 'clamp(72px, 9vw, 132px) 5vw', maxWidth: '1600px', margin: '0 auto' }}>
        <div ref={(el) => { if (el) revealRefs.current[20] = el; }} style={{ maxWidth: '74ch' }}>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#e0a37c' }}>03 / How I Think</div>
          <h2 style={{ fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontSize: 'clamp(34px, 4.4vw, 70px)', lineHeight: 1.02, letterSpacing: '-0.025em', margin: '22px 0 24px' }}>
            Frameworks built from the work.
          </h2>
          <p style={{ margin: 0, fontSize: 'clamp(16px, 1.2vw, 18px)', lineHeight: 1.66, color: '#c3cec3', maxWidth: '60ch' }}>
            Repeatable ways of diagnosing retention problems, developed across accounts — so the answer to a falling metric is a structured read of the funnel, not another campaign pulled from a generic playbook.
          </p>
        </div>

        {/* Framework 1 */}
        <div ref={(el) => { if (el) revealRefs.current[21] = el; }} style={{ marginTop: 'clamp(56px, 7vw, 104px)', borderTop: '1px solid #2a3d35', paddingTop: 'clamp(24px, 3vw, 40px)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '18px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7f9188' }}>Framework 01</span>
            <h3 style={{ fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontSize: 'clamp(26px, 2.9vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0 }}>Stimulus vs. Response</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 'clamp(28px, 4vw, 64px)', marginTop: 'clamp(28px, 3.4vw, 48px)', alignItems: 'start' }}>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.68, color: '#c3cec3', maxWidth: '48ch' }}>
              Separates what retention marketing actually controls — the stimulus layer — from the behavioral outcomes it is trying to influence. Used to establish whether an underperforming metric is a <em style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.06em', color: '#e8b795' }}>strategy</em>, <em style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.06em', color: '#e8b795' }}>execution</em> or <em style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '1.06em', color: '#e8b795' }}>deliverability</em> problem — before building another flow.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div style={{ border: '1px solid #2a3d35', background: '#0e1b16', padding: '18px 20px' }}>
                <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e0a37c', marginBottom: '14px' }}>Stimulus layer · controllable</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', letterSpacing: '0.06em', color: '#edf1e9' }}>
                  <span>Flows</span><span style={{ color: '#3c4f46' }}>·</span><span>Triggers</span><span style={{ color: '#3c4f46' }}>·</span><span>Offers</span><span style={{ color: '#3c4f46' }}>·</span><span>Timing</span><span style={{ color: '#3c4f46' }}>·</span><span>Messaging</span><span style={{ color: '#3c4f46' }}>·</span><span>Channels</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '1px', height: '22px', background: '#2a3d35' }}></div>
                <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7f9188', padding: '6px 0' }}>Customer behavior</div>
                <div style={{ width: '1px', height: '22px', background: '#2a3d35' }}></div>
              </div>
              <div style={{ border: '1px solid #d98a5f', background: 'linear-gradient(180deg, rgba(217, 138, 95, 0.1), rgba(217, 138, 95, 0.02))', padding: '18px 20px' }}>
                <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e8b795', marginBottom: '14px' }}>Response layer · observed</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', letterSpacing: '0.06em', color: '#edf1e9' }}>
                  <span>Repeat Purchase</span><span style={{ color: '#6d5a4d' }}>·</span><span>AOV</span><span style={{ color: '#6d5a4d' }}>·</span><span>Churn</span><span style={{ color: '#6d5a4d' }}>·</span><span>Retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Framework 2 */}
        <div ref={(el) => { if (el) revealRefs.current[22] = el; }} style={{ marginTop: 'clamp(56px, 7vw, 104px)', borderTop: '1px solid #2a3d35', paddingTop: 'clamp(24px, 3vw, 40px)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '18px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7f9188' }}>Framework 02</span>
            <h3 style={{ fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontSize: 'clamp(26px, 2.9vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0 }}>Backbone Framework</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 'clamp(28px, 4vw, 64px)', marginTop: 'clamp(28px, 3.4vw, 48px)', alignItems: 'start' }}>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.68, color: '#c3cec3', maxWidth: '48ch' }}>
              Retention strategy organized as one dependent structure: each layer only works if the one above it is sound, and the loop at the base feeds back into all three.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid #d98a5f', paddingLeft: 'clamp(20px, 2.4vw, 36px)' }}>
              {backbone.map((b, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: '16px', alignItems: 'baseline', padding: '18px 0', borderBottom: '1px solid #1d2e27' }}>
                  <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', color: '#e0a37c' }}>{b.n}</div>
                  <div>
                    <div style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(20px, 1.8vw, 27px)', lineHeight: 1.15, letterSpacing: '-0.015em' }}>{b.title}</div>
                    <div style={{ marginTop: '8px', fontSize: '14.5px', lineHeight: 1.58, color: '#9faea4', maxWidth: '42ch' }}>{b.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Framework 3 */}
        <div ref={(el) => { if (el) revealRefs.current[23] = el; }} style={{ marginTop: 'clamp(56px, 7vw, 104px)', borderTop: '1px solid #2a3d35', paddingTop: 'clamp(24px, 3vw, 40px)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '18px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#7f9188' }}>Framework 03</span>
            <h3 style={{ fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontSize: 'clamp(26px, 2.9vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0 }}>KPI → Flow Decision Framework</h3>
          </div>
          <p style={{ margin: 'clamp(22px, 2.6vw, 34px) 0 clamp(26px, 3vw, 40px)', fontSize: '16px', lineHeight: 1.68, color: '#c3cec3', maxWidth: '66ch' }}>
            Business problem → KPI → diagnosis → flow → trigger. A page from the playbook: what a metric is telling you, and the exact flow family that can move it.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #2a3d35' }}>
            {kpiRows.map((k, idx) => (
              <div key={idx} className="kpi-row">
                <div style={{ flex: '1 1 220px', minWidth: 0 }}>
                  <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7f9188', marginBottom: '8px' }}>KPI</div>
                  <div style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(19px, 1.7vw, 26px)', lineHeight: 1.14, letterSpacing: '-0.015em' }}>{k.kpi}</div>
                </div>
                <div style={{ flex: '1 1 260px', minWidth: 0 }}>
                  <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7f9188', marginBottom: '8px' }}>Diagnosis</div>
                  <div style={{ fontSize: '14.5px', lineHeight: 1.58, color: '#edf1e9' }}>{k.diagnosis}</div>
                </div>
                <div style={{ flex: '1 1 260px', minWidth: 0 }}>
                  <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7f9188', marginBottom: '8px' }}>Flow &amp; trigger</div>
                  <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', lineHeight: 1.6, letterSpacing: '0.04em', color: '#e0a37c' }}>{k.flow}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" style={{ padding: 'clamp(72px, 9vw, 132px) 5vw', background: '#0e1b16', borderTop: '1px solid #1d2e27', borderBottom: '1px solid #1d2e27' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div ref={(el) => { if (el) revealRefs.current[24] = el; }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(28px, 4vw, 72px)', alignItems: 'end', marginBottom: 'clamp(40px, 5vw, 72px)' }}>
            <div>
              <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#e0a37c' }}>04 / Selected Work</div>
              <h2 style={{ fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontSize: 'clamp(34px, 4.4vw, 70px)', lineHeight: 1.02, letterSpacing: '-0.025em', margin: '22px 0 0' }}>
                Problems first. Campaigns second.
              </h2>
            </div>
            <div style={{ justifySelf: 'end', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <p style={{ margin: 0, fontSize: '15.5px', lineHeight: 1.64, color: '#9faea4', maxWidth: '40ch' }}>
                Seven engagements, each traced along the same path: the problem found, the diagnostic run, the system built, the outcome measured.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7f9188', flexWrap: 'wrap' }}>
                  <span>Problem</span><span style={{ color: '#d98a5f' }}>→</span><span>Diagnostic</span><span style={{ color: '#d98a5f' }}>→</span><span>Solution</span><span style={{ color: '#d98a5f' }}>→</span><span style={{ color: '#e8b795' }}>Outcome</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 5vw, 76px)' }}>
            {cases.map((c, idx) => {
              const stages = [
                { n: '01', label: 'Problem', body: c.problem, track: '#2a3d35', dot: '#5f7269', labelColor: '#ff6b6b', bg: 'rgba(255,255,255,0.012)', big: false, tag: false },
                { n: '02', label: 'Diagnostic', body: c.diagnostic, track: '#42564a', dot: '#8fa197', labelColor: '#4fc3f7', bg: 'rgba(143,161,151,0.05)', big: false, tag: c.diagTag || false },
                { n: '03', label: 'Structured solution', body: c.solution, track: '#8a6549', dot: '#d98a5f', labelColor: '#ffb74d', bg: 'rgba(217,138,95,0.07)', big: false, tag: c.solTag || false },
                { n: '04', label: 'Outcome', body: c.result, track: '#e8b795', dot: '#e8b795', labelColor: '#81c784', bg: 'radial-gradient(130% 100% at 15% 0%,rgba(217,138,95,0.17),rgba(217,138,95,0.02) 78%)', big: c.resultBig, tag: false }
              ];
              return (
                <div key={idx} ref={(el) => { if (el) revealRefs.current[25 + idx] = el; }} className="case" style={{ position: 'relative', borderTop: '1px solid #2a3d35', paddingTop: 'clamp(26px, 3vw, 42px)' }}>
                  <div style={{ position: 'absolute', top: '-1px', left: 0, width: 'clamp(90px, 14vw, 190px)', height: '1px', background: 'linear-gradient(90deg, #d98a5f, rgba(217,138,95, 0))' }}></div>

                  <div className="case-rail">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                      <div style={{ position: 'relative', flex: '0 0 auto', width: '58px', height: '58px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle, rgba(217,138,95, 0.22), rgba(217, 138, 95, 0.02) 70%)', border: '1px solid #2a3d35' }}>
                        <span className="num" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: '23px', lineHeight: 1 }}>{c.n}</span>
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <h3 style={{ margin: 0, fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontSize: 'clamp(25px, 2.4vw, 38px)', lineHeight: 1.06, letterSpacing: '-0.022em', textWrap: 'pretty' }}>{c.title}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px', marginTop: '12px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7f9188' }}>
                          <span style={{ color: '#e0a37c' }}>{c.industry}</span>
                          {c.brand && !c.brand.toLowerCase().includes('undisclosed') && !c.brand.toLowerCase().includes('withheld') && (
                            <>
                              <span style={{ color: '#3c4f46' }}>·</span>
                              <span>{c.brand}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div style={{ position: 'relative', marginTop: 'clamp(24px, 2.6vw, 34px)', padding: '22px 24px', border: '1px solid #6b5442', background: 'radial-gradient(130% 110% at 18% 0%, rgba(217, 138, 95, 0.15), rgba(217, 138, 95, 0) 78%)', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: '-40%', right: '-18%', width: '62%', aspectRatio: 1, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232, 183, 149, 0.16), rgba(232, 183, 149, 0) 68%)', pointerEvents: 'none', animation: 'glowPulse 10s ease-in-out infinite' }}></div>
                      <div style={{ position: 'relative', fontFamily: '"IBM Plex Mono", monospace', fontSize: '9.5px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#8fa197' }}>Headline result</div>
                      <div className="num" style={{ position: 'relative', fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(30px, 2.9vw, 46px)', lineHeight: 1.02, letterSpacing: '-0.028em', marginTop: '12px' }}>{c.headline}</div>
                    </div>

                    <div style={{ marginTop: 'clamp(18px, 2vw, 26px)', padding: '20px 22px', borderLeft: '2px solid #d98a5f', background: 'linear-gradient(90deg, rgba(217, 138, 95, 0.10), rgba(217, 138, 95, 0.01))' }}>
                      <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '9.5px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#e0a37c', marginBottom: '12px' }}>Relevant if</div>
                      <p style={{ margin: 0, fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(18px, 1.5vw, 23px)', lineHeight: 1.45, letterSpacing: '-0.01em', color: '#f4f7f0', textWrap: 'pretty' }}>{c.relevant}</p>
                    </div>

                    {c.note && (
                      <div style={{ marginTop: '16px', fontSize: '13px', lineHeight: 1.6, color: '#7f9188', maxWidth: '44ch' }}>{c.note}</div>
                    )}
                  </div>

                  <div className="case-steps">
                    {stages.map((st, sIdx) => (
                      <div key={sIdx} className="step" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '32px minmax(0, 1fr)', gap: 'clamp(14px, 1.6vw, 22px)', paddingBottom: 'clamp(22px, 2.4vw, 32px)' }}>
                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}>
                          <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: st.dot, boxShadow: '0 0 0 5px rgba(217, 138, 95, 0.10)', flex: '0 0 auto' }}></div>
                          <div className="step-line" style={{ flex: 1, width: '1px', marginTop: '6px', background: `linear-gradient(180deg, ${st.track}, rgba(217, 138, 95, 0.10))` }}></div>
                          <div className="step-caret" style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '13px', lineHeight: 1, color: st.dot, marginTop: '-2px' }}>▼</div>
                        </div>
                        <div style={{ minWidth: 0, padding: '2px 0 0' }}>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '10px' }}>
                            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: st.labelColor, textShadow: `0 0 8px ${st.labelColor}55` }}>{st.label}</span>
                            <span style={{ flex: 1, minWidth: '20px', height: '1px', background: st.track, opacity: 0.55 }}></span>
                            <span style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.16em', color: '#5f7269' }}>{st.n} / 04</span>
                          </div>
                          <p style={{ margin: 0, fontSize: 'clamp(15px, 1.12vw, 16.5px)', lineHeight: 1.7, color: '#edf1e9', maxWidth: '62ch', textWrap: 'pretty' }}>{st.body}</p>
                          {st.tag && (
                            <div style={{ marginTop: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: '"IBM Plex Mono", monospace', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#e8b795', background: 'rgba(217, 138, 95, 0.10)', border: '1px solid #6b5442', padding: '7px 12px' }}>{st.tag}</div>
                          )}
                          {st.big && (
                            <div className="num" style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(26px, 2.4vw, 38px)', lineHeight: 1.04, letterSpacing: '-0.026em', marginTop: '14px' }}>{st.big}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tool Stack Section */}
      <section style={{ padding: 'clamp(72px, 9vw, 132px) 5vw', maxWidth: '1600px', margin: '0 auto' }}>
        <div ref={(el) => { if (el) revealRefs.current[32] = el; }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px, 4.5vw, 80px)', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#e0a37c' }}>05 / The Stack</div>
            <h2 style={{ fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontSize: 'clamp(28px, 3vw, 46px)', lineHeight: 1.06, letterSpacing: '-0.022em', margin: '20px 0 0', maxWidth: '16ch' }}>The toolbox behind the systems.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {stack.map((s, idx) => (
              <div key={idx} style={{ borderTop: '1px solid #1d2e27', padding: 'clamp(18px, 2.2vw, 28px) 0' }}>
                <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7f9188', marginBottom: '12px' }}>{s.label}</div>
                <div style={{ fontFamily: 'Newsreader, Georgia, serif', fontSize: 'clamp(19px, 1.7vw, 26px)', lineHeight: 1.5, letterSpacing: '-0.01em', color: '#edf1e9' }}>{s.items}</div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #2a3d35' }}></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ background: '#0e1b16', borderTop: '1px solid #1d2e27', padding: 'clamp(80px, 10vw, 160px) 5vw' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px, 5vw, 88px)', alignItems: 'end' }}>
          <div ref={(el) => { if (el) revealRefs.current[33] = el; }}>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#e0a37c', marginBottom: 'clamp(26px, 3vw, 44px)' }}>Contact</div>
            <h2 style={{ fontFamily: 'Newsreader, Georgia, serif', fontWeight: 400, fontSize: 'clamp(36px, 5.4vw, 88px)', lineHeight: 1, letterSpacing: '-0.03em', margin: 0, maxWidth: '20ch', textWrap: 'pretty' }}>
              If customers aren’t coming back, <em style={{ fontStyle: 'italic', color: '#e8b795' }}>let’s find out why.</em>
            </h2>
          </div>
          <div ref={(el) => { if (el) revealRefs.current[34] = el; }} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(28px, 3.4vw, 44px)', alignItems: 'flex-start' }}>
            <p style={{ margin: 0, fontSize: 'clamp(16px, 1.2vw, 18px)', lineHeight: 1.68, color: '#9faea4', maxWidth: '46ch' }}>
              I work on retention problems where the answer isn’t another campaign — it’s a better diagnosis, a stronger lifecycle system, or a clearer understanding of customer behavior.
            </p>
            <a href="mailto:hello@example.com" className="cta-btn">
              <span>Start a conversation</span><span>→</span>
            </a>
            <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7f9188' }}>
              Retention · Lifecycle · CRM · Customer Behavior
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{ padding: 'clamp(32px, 4vw, 52px) 5vw', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', alignItems: 'baseline', maxWidth: '1600px', margin: '0 auto', borderTop: '1px solid #1d2e27' }}>
        <div>
          <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 }}>Vishnupriya</div>
          <div style={{ marginTop: '8px', fontSize: '13.5px', color: '#7f9188' }}>Retention Marketing Strategist</div>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7f9188' }}>
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#frameworks">Frameworks</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div style={{ fontFamily: '"IBM Plex Mono", monospace', fontSize: '10.5px', letterSpacing: '0.14em', color: '#5f7269', justifySelf: 'end' }}>
          © 2026 Vishnupriya
        </div>
      </footer>

      {/* Floating Action Button */}
      <button 
        className="floating-btn" 
        onClick={() => {
          setIsFormOpen(true);
          setFormSubmitted(false);
          setFormData({ name: '', email: '', phone: '', country: '', message: '' });
        }}
        aria-label="Contact Form"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0a1310" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="modal-overlay" onClick={() => setIsFormOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsFormOpen(false)} aria-label="Close modal">✕</button>
            
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit}>
                <h3 className="form-title">Start a Conversation</h3>
                <div className="form-subtitle">Diagnosing Retention Problems</div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="form-name">Name *</label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-email">Email *</label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    className="form-input"
                    placeholder="hello@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="form-phone"
                    name="phone"
                    className="form-input"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-country">Country *</label>
                  <input
                    type="text"
                    id="form-country"
                    name="country"
                    className="form-input"
                    placeholder="Your country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="form-message">Message *</label>
                  <textarea
                    id="form-message"
                    name="message"
                    className="form-input"
                    rows={4}
                    placeholder="Describe your brand's retention or deliverability challenges..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    style={{ resize: 'vertical', minHeight: '80px' }}
                  />
                </div>

                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="success-container">
                <div className="success-icon">✓</div>
                <h3 className="form-title">Thank you!</h3>
                <div className="form-subtitle" style={{ marginBottom: '16px' }}>Message received</div>
                <p style={{ fontSize: '15px', color: '#9faea4', lineHeight: '1.6', maxWidth: '30ch', margin: '0 auto' }}>
                  I will review your diagnostic info and get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsFormOpen(false)} 
                  className="form-submit" 
                  style={{ marginTop: '30px', maxWidth: '200px' }}
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
