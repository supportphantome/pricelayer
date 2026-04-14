export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "why-most-saas-companies-underprice",
    title: "Why Most SaaS Companies Underprice Their Product",
    date: "2026-03-28",
    excerpt:
      "If no one complains about your pricing, it's too low. Here's why the fear-of-churn trap keeps SaaS companies from capturing the value they create.",
    content: `
      <p>There's a common belief in SaaS: keep prices low to reduce friction and prevent churn. On the surface, it sounds reasonable. But in practice, underpricing is one of the most expensive mistakes a B2B SaaS company can make.</p>

      <p>When your price is too low, you signal low value. Enterprise buyers — the ones with real budgets — skip past tools that look "too cheap to be serious." You end up attracting price-sensitive customers who churn anyway, while the high-value accounts you actually want never make it past your pricing page.</p>

      <p>The fear-of-churn trap works like this: your team sets a low price to minimize objections during sales. Deals close easily. But over time, you notice that customers don't engage deeply with the product. They treat it as a nice-to-have, not a must-have. When budgets get tight, you're the first line item to go. Ironically, the low price that was supposed to prevent churn is actually causing it.</p>

      <p>The fix isn't simply raising prices across the board. It's aligning your pricing with the value your customers actually receive. That means understanding your value metric — the unit of measurement that best correlates with how customers derive value from your product. For a data platform, it might be rows processed. For a communication tool, it might be seats or messages sent.</p>

      <p>When your pricing reflects real value delivery, customers feel they're paying for what they get. That's the foundation of sustainable growth — not racing to the bottom.</p>
    `,
  },
  {
    slug: "three-pricing-metrics-that-matter",
    title: "The Three Pricing Metrics That Actually Matter",
    date: "2026-03-14",
    excerpt:
      "ARPU, expansion revenue rate, and price sensitivity — the three numbers that tell you whether your pricing is working or leaving revenue on the table.",
    content: `
      <p>Most SaaS companies track MRR, churn, and CAC religiously. But when it comes to pricing health, these metrics only tell part of the story. If you want to know whether your pricing is actually working, focus on three numbers.</p>

      <p><strong>1. Average Revenue Per User (ARPU).</strong> This is your pricing efficiency score. If ARPU is flat or declining while your product improves, your pricing isn't capturing the additional value you're delivering. Track ARPU by cohort and segment. A healthy business shows ARPU increasing over time as customers adopt more features and move to higher tiers.</p>

      <p><strong>2. Net Revenue Retention (NRR) / Expansion Revenue Rate.</strong> This tells you whether your pricing model rewards growth. If customers can get more value from your product without paying more, you have a pricing leak. The best SaaS companies achieve 120%+ NRR because their pricing naturally expands as customers succeed. Usage-based components, seat-based scaling, and well-designed tier structures all contribute to healthy expansion.</p>

      <p><strong>3. Price Sensitivity by Segment.</strong> Not all customers respond to pricing the same way. Running Van Westendorp or Gabor-Granger studies by customer segment reveals where you have pricing power and where you don't. Startups may be highly price-sensitive; enterprise buyers may not blink at 3x the price if the value story is clear. This data drives segment-specific packaging and pricing that maximizes revenue across your entire customer base.</p>

      <p>Together, these three metrics give you a complete picture of pricing health. Track them quarterly, and you'll catch pricing problems long before they show up in your churn numbers.</p>
    `,
  },
  {
    slug: "packaging-for-growth-tier-design",
    title: "Packaging for Growth: How to Design Tiers That Drive Upgrades",
    date: "2026-02-20",
    excerpt:
      "Good-better-best isn't just a template — it's a psychological framework. Here's how to design tiers that naturally pull customers toward higher plans.",
    content: `
      <p>The good-better-best (GBB) tier model is the most common packaging structure in SaaS. But most companies implement it as a feature checklist — each tier simply adds more features. That's a missed opportunity.</p>

      <p>Effective tier design is a psychological framework, not a spreadsheet exercise. Each tier should represent a different customer persona and use case, not just a different feature count. Your "Good" tier should fully serve one persona. Your "Better" tier should serve a more advanced persona with different needs. Your "Best" tier should serve the most demanding use case.</p>

      <p>The key principle is <strong>creating natural upgrade triggers</strong>. An upgrade trigger is a moment when a customer's growth naturally pushes them into the next tier. For a project management tool, it might be team size. For an analytics platform, it might be data volume. For a communication tool, it might be the need for compliance features.</p>

      <p>Here's what separates good tier design from great tier design: the upgrade should feel like a graduation, not a penalty. Customers should think "I've outgrown this tier because my business is growing" — not "they're charging me more for something I already had." Feature gating should be additive, not restrictive. Take features away sparingly and only when there's a clear persona difference.</p>

      <p>Finally, consider the role of a free or low-cost entry tier. If your product has strong network effects or viral loops, a free tier can be your most powerful acquisition channel. If it doesn't, a free tier may just attract users who never convert. The decision should be strategic, not reflexive.</p>
    `,
  },
];
