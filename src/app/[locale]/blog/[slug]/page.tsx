import { notFound } from "next/navigation";
import {Link} from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { posts } from "../posts";
import CTABanner from "@/components/CTABanner";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — PriceLayer Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  const t = await getTranslations("BlogPost");

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-[var(--color-white)]">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-blue)] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToBlog")}
          </Link>
          <time className="mt-8 block text-sm text-[var(--color-gray)]">{post.date}</time>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-navy)] md:text-4xl">
            {post.title}
          </h1>
          <div
            className="prose prose-lg mt-10 max-w-none text-[var(--color-text-muted)] prose-strong:text-[var(--color-text)] prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <CTABanner
        headline={t("ctaHeadline")}
        buttonText={t("ctaButton")}
        buttonHref="/signup"
      />
    </>
  );
}
