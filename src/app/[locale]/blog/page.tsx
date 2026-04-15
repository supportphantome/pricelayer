import {Link} from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { posts } from "./posts";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("BlogPage");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function BlogPage() {
  const t = await getTranslations("BlogPage");

  return (
    <>
      <section className="bg-[var(--color-navy)]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-white)] md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-gray-light)]">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-light)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] p-8 transition-shadow hover:shadow-lg"
              >
                <time className="text-sm text-[var(--color-gray)]">{post.date}</time>
                <h2 className="mt-3 text-xl font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-blue)]">
                  {post.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-text-muted)]">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-blue)]">
                  {t("readMore")} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
