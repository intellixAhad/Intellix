import type { ComponentType, ReactNode } from "react";
import { ArrowRight, Phone, Search, Mail, MessageCircle, User, Cpu, Fingerprint, Lock, Network, ScrollText, Video, FileLock2, Smartphone, ShieldCheck, Landmark, Shield, Eye, Building2 } from "lucide-react";

type Icon = ComponentType<{ className?: string }>;

interface Stat {
  value: string;
  label: string;
}
interface Feature {
  icon: Icon;
  title: string;
  body: string;
}
interface Audience {
  icon: Icon;
  label: string;
}

/* ---------- Data ---------- */

const verbosa = {
  stats: [
    { value: "500ms", label: "AI response time" },
    { value: "30+", label: "Languages supported" },
    { value: "48+", label: "Lead data sources" },
    { value: "3-in-1", label: "Voice + chat + email" },
  ] satisfies Stat[],
  features: [
    {
      icon: Phone,
      title: "AI Voice Calls",
      body: "Sub-500ms AI voice calls in 30+ languages, built on Verbosa's own full-stack voice infrastructure — not a third-party API.",
    },
    {
      icon: Search,
      title: "Lead Generation",
      body: "Pulls from 22+ data sources to find and qualify prospects that match your ideal customer profile automatically.",
    },
    {
      icon: Mail,
      title: "Email Sequences",
      body: "Automated, personalized outbound email campaigns that follow up on calls and chats without manual work.",
    },
    {
      icon: MessageCircle,
      title: "Omnichannel Chat",
      body: "Auto-replies on WhatsApp, Instagram, and Messenger — keeping conversations moving wherever prospects are.",
    },
  ] satisfies Feature[],
  audience: [
    { icon: Phone, label: "SDRs & Outbound Teams" },
    { icon: User, label: "B2B Sales Orgs" },
    { icon: Phone, label: "Contact Centers" },
    { icon: Search, label: "Cold Outreach Teams" },
  ] satisfies Audience[],
  languages: ["English", "Bengali", "Arabic", "+ 30 languages via voice"],
};

const freenation = {
  stats: [
    { value: "AES-256", label: "End-to-end encryption" },
    { value: "Passkeys", label: "No passwords, ever" },
    { value: "5 levels", label: "Classification scale" },
    { value: "Hash-chained", label: "Verifiable audit log" },
  ] satisfies Stat[],
  features: [
    {
      icon: Fingerprint,
      title: "Passkey-only sign-in",
      body: "Authentication runs entirely on WebAuthn. There is no password field to phish, reuse, or brute-force.",
    },
    {
      icon: Video,
      title: "Secure meetings",
      body: "DTLS-SRTP encrypted calls with per-participant forensic watermarks, geofenced rooms, recaps and recordings.",
    },
    {
      icon: Lock,
      title: "Encrypted messaging",
      body: "Direct and group chats are encrypted in the browser. The server stores only ciphertext, with optional ephemeral threads.",
    },
    {
      icon: FileLock2,
      title: "Encrypted file sharing",
      body: "Files are encrypted before upload and the key lives only in the share link's URL fragment. Expiry, download caps and revocation included.",
    },
    {
      icon: ScrollText,
      title: "Tamper-evident audit",
      body: "Every administrative and access event is written to an append-only, hash-chained log that can be re-verified on demand.",
    },
    {
      icon: Smartphone,
      title: "Web and mobile",
      body: "A responsive web app and an Expo mobile app share one hardened API. Full native passkey and call support is planned.",
    },
  ] satisfies Feature[],
  hierarchy: [
    { level: "Nation", body: "The sovereign root. Owns global policy and the classification scheme." },
    { level: "Ministry", body: "Defense, State, Intelligence, Treasury — each with scoped channels and members." },
    { level: "Department", body: "Working units where day-to-day channels, files and meetings live." },
    { level: "User", body: "An individual with a passkey identity, a role and a clearance level." },
  ],
  visibility: [
    ["Public", "Visible nation-wide"],
    ["Internal", "Any authenticated user in the nation"],
    ["Private", "Owning department or invited members"],
    ["Confidential", "Requires elevated clearance"],
    ["Restricted", "Highest tier"],
  ] as const,
  audience: [
    { icon: Landmark, label: "Government ministries" },
    { icon: Shield, label: "Defense & military" },
    { icon: Eye, label: "Intelligence agencies" },
    { icon: Building2, label: "Public-sector departments" },
  ] satisfies Audience[],
};

/* ---------- Shared building blocks ---------- */

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
    <span className="h-1.5 w-1.5 bg-white" />
    {children}
  </p>
);

const SectionTitle = ({ children }: { children: ReactNode }) => <h2 className="max-w-2xl font-serif text-3xl font-bold italic leading-tight text-white md:text-5xl">{children}</h2>;

const StatStrip = ({ stats }: { stats: Stat[] }) => (
  <div className="border-y border-white/10 bg-neutral-950">
    <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-14 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <dd className="font-mono text-3xl font-bold italic text-white md:text-5xl">{s.value}</dd>
          <dt className="mt-3 font-mono text-xs text-neutral-400">{s.label}</dt>
        </div>
      ))}
    </dl>
  </div>
);

const FeatureGrid = ({ items, cols }: { items: Feature[]; cols: string }) => (
  <div className={`mt-12 grid gap-4 ${cols}`}>
    {items.map(({ icon: I, title, body }) => (
      <article key={title} className="border border-white/10 bg-neutral-900/60 p-6 transition-colors hover:border-white/30">
        <span className="mb-6 flex h-10 w-10 items-center justify-center border border-white/15">
          <I className="h-4 w-4 text-white" />
        </span>
        <h3 className="mb-2 text-base font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-neutral-400">{body}</p>
      </article>
    ))}
  </div>
);

const AudienceRow = ({ items }: { items: Audience[] }) => (
  <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
    {items.map(({ icon: I, label }) => (
      <div key={label} className="flex flex-col items-center gap-4 border border-white/10 bg-neutral-900/60 px-4 py-8 text-center">
        <I className="h-5 w-5 text-white" />
        <span className="text-sm text-neutral-300">{label}</span>
      </div>
    ))}
  </div>
);

const Button = ({ href, children, variant = "solid" }: { href: string; children: ReactNode; variant?: "solid" | "outline" }) => (
  <a
    href={href}
    className={`inline-flex items-center gap-2 border px-5 py-3 font-mono text-xs uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
      variant === "solid" ? "border-white bg-white text-black hover:bg-neutral-200" : "border-white/40 text-white hover:border-white"
    }`}
  >
    {children}
    <ArrowRight className="h-3.5 w-3.5" />
  </a>
);

/* ---------- Page ---------- */

export default function ProductsPage() {
  return (
    <main className="bg-[#0a0a0a] text-neutral-200">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Eyebrow>Our products</Eyebrow>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">Software we build for ourselves, and for you.</h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">Beyond client work, Intellix designs and maintains its own products. One automates outbound sales. The other keeps government communication private and provable.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="#verbosa">Verbosa.ai</Button>
            <Button href="#freenation" variant="outline">
              FreeNation
            </Button>
          </div>
        </div>
      </section>

      {/* ===== Verbosa.ai ===== */}
      <section id="verbosa" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-24">
          <Eyebrow>Product one</Eyebrow>
          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">Verbosa.ai — your AI sales team.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">Intellix's in-house AI sales automation platform: an all-in-one workforce that finds leads, calls and messages them, and follows up over email, so sales teams can focus on closing instead of chasing.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="https://verbosa.ai">Visit Verbosa.ai</Button>
            <Button href="/contact" variant="outline">
              Talk to us
            </Button>
          </div>
        </div>

        <StatStrip stats={verbosa.stats} />

        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Core capabilities</Eyebrow>
          <SectionTitle>Everything an outbound sales team needs.</SectionTitle>
          <FeatureGrid items={verbosa.features} cols="sm:grid-cols-2 lg:grid-cols-4" />

          {/* Orchestration */}
          <div className="mt-20 grid items-center gap-10 border border-white/10 bg-neutral-900/60 p-8 md:grid-cols-2 md:p-12">
            <div>
              <Eyebrow>Orchestration</Eyebrow>
              <SectionTitle>One brain behind every channel.</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">Voice, chat, email, and lead generation don't run in silos — a central orchestration layer coordinates every channel, so a prospect who's called today gets the right follow-up email tomorrow, automatically.</p>
            </div>
            <div className="flex flex-col items-center gap-6" aria-hidden>
              <span className="flex h-14 w-14 items-center justify-center bg-white">
                <Cpu className="h-6 w-6 text-black" />
              </span>
              <div className="flex gap-3">
                {[
                  [Phone, "Voice"],
                  [MessageCircle, "Chat"],
                  [Mail, "Email"],
                  [Search, "Leads"],
                ].map(([I, label]) => {
                  const Ic = I as Icon;
                  return (
                    <span key={label as string} className="flex h-16 w-16 flex-col items-center justify-center gap-1.5 border border-white/15">
                      <Ic className="h-4 w-4 text-white" />
                      <span className="text-[10px] text-neutral-400">{label as string}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Global */}
          <div className="mt-20 grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow>Built for global markets</Eyebrow>
              <SectionTitle>Engineered from Dhaka, speaking to the world.</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">Verbosa.ai natively supports English, Bengali, and Arabic, with content localized for markets including the United States and the UAE.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {verbosa.languages.map((l) => (
                  <li key={l} className="border border-white/15 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-neutral-300">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="space-y-6 self-start border border-white/10 bg-neutral-900/60 p-8">
              {[
                ["US", "en_US", "English-language market localization"],
                ["AE", "ar_AE", "Arabic-language market localization"],
                ["BD", "Home base — Dhaka", "Built and maintained by the Intellix team"],
              ].map(([code, title, sub]) => (
                <li key={code} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 font-mono text-xs font-bold text-white">{code}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-xs text-neutral-500">{sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20">
            <Eyebrow>Who it's for</Eyebrow>
            <SectionTitle>Built for teams that live in outbound.</SectionTitle>
            <AudienceRow items={verbosa.audience} />
          </div>
        </div>
      </section>

      {/* ===== FreeNation ===== */}
      <section id="freenation" className="scroll-mt-20 border-t border-white/10 bg-[#050709]">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-24">
          <Eyebrow>Product two</Eyebrow>
          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">FreeNation — secure conferencing for government.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">A sovereign government and military conferencing platform, built so every message, meeting and file is provably who it says it is — and unreadable to anyone else, including its own operators.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Request a briefing</Button>
          </div>
        </div>

        <StatStrip stats={freenation.stats} />

        <div className="mx-auto max-w-6xl px-6 py-20">
          <Eyebrow>Core capabilities</Eyebrow>
          <SectionTitle>One workspace for a chain of command that can't afford a leak.</SectionTitle>
          <FeatureGrid items={freenation.features} cols="sm:grid-cols-2 lg:grid-cols-3" />

          {/* Hierarchy */}
          <div className="mt-20">
            <Eyebrow>Access model</Eyebrow>
            <SectionTitle>Permissions follow the chain of command, four levels deep.</SectionTitle>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400">Every user, channel and meeting inherits its place in the hierarchy, and clearance is checked on every request, not just at login.</p>
            <ol className="mt-10 grid gap-4 md:grid-cols-4">
              {freenation.hierarchy.map((h, i) => (
                <li key={h.level} className="relative border border-white/10 bg-neutral-900/60 p-6">
                  <p className="font-mono text-xs text-neutral-500">Level {i + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{h.level}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{h.body}</p>
                  {i < 3 && <ArrowRight aria-hidden className="absolute -right-3.5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 bg-[#050709] text-neutral-500 md:block" />}
                </li>
              ))}
            </ol>
          </div>

          {/* Visibility */}
          <div className="mt-20 grid gap-10 md:grid-cols-2">
            <div>
              <Eyebrow>One visibility model</Eyebrow>
              <SectionTitle>The same five-level scale governs meetings, channels and files.</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">Visibility is set at creation and enforced on every subsequent read, whether you're scheduling a meeting, posting to a channel, or sharing a file.</p>
            </div>
            <table className="w-full self-start border-collapse text-left text-sm">
              <caption className="sr-only">Classification levels</caption>
              <thead>
                <tr className="border-b border-white/15 font-mono text-xs text-neutral-500">
                  <th className="py-3 pr-4 font-normal">Level</th>
                  <th className="py-3 font-normal">Typical use</th>
                </tr>
              </thead>
              <tbody>
                {freenation.visibility.map(([level, use]) => (
                  <tr key={level} className="border-b border-white/10">
                    <td className="py-4 pr-4 font-mono text-white">{level}</td>
                    <td className="py-4 text-neutral-400">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Trust */}
          <div className="mt-20 grid items-center gap-10 border border-white/10 bg-neutral-900/60 p-8 md:grid-cols-2 md:p-12">
            <div>
              <Eyebrow>Trust and accountability</Eyebrow>
              <SectionTitle>Nothing to steal at login, nothing to hide afterward.</SectionTitle>
            </div>
            <ul className="space-y-5">
              {[
                [ShieldCheck, "Classification is checked on every read, not just when content is created."],
                [Network, "Keys are managed through a swappable KMS layer, with HashiCorp Vault in production."],
                [ScrollText, "Anyone can re-verify the full audit chain on demand. One altered entry fails it."],
              ].map(([I, text]) => {
                const Ic = I as Icon;
                return (
                  <li key={text as string} className="flex gap-4">
                    <Ic className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                    <span className="text-sm leading-relaxed text-neutral-300">{text as string}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-20">
            <Eyebrow>Who it's for</Eyebrow>
            <SectionTitle>Built for institutions where a leak has consequences.</SectionTitle>
            <AudienceRow items={freenation.audience} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="font-serif text-3xl font-bold italic text-white md:text-5xl">Want to see either product in action?</h2>
          <p className="mt-6 text-neutral-400">Tell us what you're working on and we'll set up a walkthrough.</p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Let's talk</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
