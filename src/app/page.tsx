import Link from "next/link";
import {
  Layers,
  Package,
  Search,
  ArrowRight,
  BarChart3,
  TrendingUp,
  DollarSign,
  Users,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

const STATS = [
  { icon: Users, value: "200+", label: "SaaS Companies Advised" },
  { icon: TrendingUp, value: "23%", label: "Avg Revenue Uplift" },
  { icon: DollarSign, value: "$2.1B", label: "Optimized ARR" },
  { icon: BarChart3, value: "50+", label: "Pricing Migrations Led" },
];

const SERVICES = [
  {
    icon: Layers,
    title: "Pricing Architecture",
    description:
      "Design optimal tiers, feature gating, and price points backed by willingness-to-pay research and competitive analysis.",
  },
  {
    icon: Package,
    title: "Packaging Strategy",
    description:
      "Bundle features into packages that drive expansion revenue, reduce decision friction, and align with how customers actually buy.",
  },
  {
    icon: Search,
    title: "Monetization Audit",
    description:
      "Identify revenue leaks in your current model. We analyze your pricing, usage data, and churn patterns to find quick wins.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Diagnostic",
    description:
      "We audit your current pricing, interview customers, and benchmark against your competitive landscape.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We model and test new pricing structures, run simulations, and design packaging that maps to your value metrics.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "We help you roll out pricing changes with migration plans, change communication, and churn mitigation strategies.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "PriceLayer helped us restructure our pricing from a flat rate to usage-based tiers. Our expansion revenue increased 34% in the first quarter.",
    name: "Sarah Chen",
    title: "VP of Revenue, DataSync",
  },
  {
    quote:
      "We were underpricing our enterprise tier by 40%. PriceLayer's audit paid for itself in the first month.",
    name: "Marcus Rivera",
    title: "CEO, CloudQueue",
  },
  {
    quote:
      "The packaging redesign reduced our sales cycle by two weeks. Prospects could self-select the right tier without a demo.",
    name: "Amira Okafor",
    title: "Head of Growth, FormStack Pro",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(13,148,136,0.1),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-[var(--color-blue)]/30 bg-[var(--color-blue)]/10 px-4 py-1.5 text-sm font-medium text-[var(--color-blue)]">
              B2B SaaS Pricing Consultancy
            </span>
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-[var(--color-white)] md:text-6xl md:leading-tight">
              Your pricing is leaving money on the table.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-gray-light)] md:text-xl">
              PriceLayer helps B2B SaaS companies unlock revenue trapped in their pricing.
              We design tiers, packaging, and monetization strategies that grow revenue and reduce churn.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-blue)] px-8 py-3.5 text-base font-semibold text-[var(--color-white)] transition-colors hover:bg-[var(--color-blue-hover)]"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3.5 text-base font-semibold text-[var(--color-white)] transition-colors hover:bg-white/5"
              >
                See Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto h-6 w-6 text-[var(--color-teal)]" />
                <p className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--color-gray)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)] md:text-4xl">
              Pricing strategy, not pricing software
            </h2>
            <p className="mt-4 text-lg text-[var(--color-gray)]">
              We work alongside your team to design pricing that drives growth. No platform lock-in, no ongoing software fees.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-blue)]/10">
                  <service.icon className="h-6 w-6 text-[var(--color-blue)]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--color-navy)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-gray)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)] md:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-[var(--color-gray)]">
              A proven three-phase process that minimizes risk and maximizes impact.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.step} className="relative">
                <span className="text-5xl font-bold text-[var(--color-blue)]/10">
                  {step.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-navy)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-gray)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)] md:text-4xl">
            You don&apos;t need another billing tool.
            <br />
            You need a pricing strategy.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-gray)]">
            Paddle, Stripe, and Chargebee handle billing infrastructure. But the
            right infrastructure with the wrong pricing still leaves revenue on the table.
            PriceLayer is the strategy layer that sits above your billing stack &mdash;
            ensuring every tier, feature gate, and price point is optimized for growth.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-navy)] md:text-4xl">
            Trusted by SaaS leaders
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-light)] p-8"
              >
                <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-blue)]/10 text-sm font-bold text-[var(--color-blue)]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-navy)]">{t.name}</p>
                    <p className="text-sm text-[var(--color-gray)]">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        headline="Ready to stop guessing on pricing?"
        buttonText="Book a Free Strategy Call"
        buttonHref="/signup"
      />
    </>
  );
}
