import { Target, Heart, Handshake } from "lucide-react";
import CTABanner from "@/components/CTABanner";

const TEAM = [
  {
    name: "Elena Voss",
    title: "Founder & Lead Strategist",
    bio: "Former VP of Pricing at a $500M ARR SaaS company. 12 years of experience in B2B pricing strategy and monetization.",
  },
  {
    name: "James Okonkwo",
    title: "Senior Pricing Analyst",
    bio: "Data scientist turned pricing specialist. Built pricing models for 80+ SaaS companies across fintech, DevTools, and MarTech.",
  },
  {
    name: "Priya Sharma",
    title: "Packaging & GTM Lead",
    bio: "10 years in product marketing and go-to-market strategy. Expert in tier design, feature gating, and launch communication.",
  },
  {
    name: "Daniel Kim",
    title: "Research Director",
    bio: "PhD in behavioral economics. Leads willingness-to-pay research and conjoint analysis for every client engagement.",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Evidence Over Intuition",
    description:
      "Every recommendation is backed by data — willingness-to-pay research, competitive benchmarking, and usage analytics. We don't guess.",
  },
  {
    icon: Heart,
    title: "Revenue Without Resentment",
    description:
      "Good pricing grows revenue and makes customers feel they're getting a fair deal. We optimize for long-term trust, not short-term extraction.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "Pricing isn't a one-time project. We build ongoing relationships and return for pricing reviews as your product and market evolve.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Mission */}
      <section className="bg-[var(--color-navy)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-white)] md:text-5xl">
            About PriceLayer
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-[var(--color-gray-light)]">
            We believe pricing is the most underleveraged growth lever in SaaS.
            Most companies spend months on product and minutes on pricing.
            We exist to change that.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)]">
              Our Approach
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--color-text-muted)]">
              <p>
                PriceLayer combines rigorous quantitative research with deep SaaS domain expertise.
                Every engagement starts with understanding your customers, your competitive landscape,
                and your growth objectives.
              </p>
              <p>
                We use a combination of <strong className="text-[var(--color-text)]">competitive benchmarking</strong>,{" "}
                <strong className="text-[var(--color-text)]">willingness-to-pay research</strong>,{" "}
                and <strong className="text-[var(--color-text)]">value metric analysis</strong> to design pricing
                that aligns what you charge with the value your customers actually receive.
              </p>
              <p>
                The result: higher conversion rates, better expansion revenue,
                lower churn, and a pricing model that scales with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-navy)]">
            Meet the Team
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] p-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-blue)]/10 text-xl font-bold text-[var(--color-blue)]">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--color-navy)]">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[var(--color-blue)]">{member.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-gray)]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[var(--color-navy)]">
            Our Values
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--color-teal)]/10">
                  <value.icon className="h-7 w-7 text-[var(--color-teal)]" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--color-navy)]">
                  {value.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-gray)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want to work with us?"
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
