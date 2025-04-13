import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostHero } from "@/components/blog/blog-post-hero";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { BlogPostAuthor } from "@/components/blog/blog-post-author";
import { BlogPostRelated } from "@/components/blog/blog-post-related";
import { blogPostsData } from "@/data/blog-posts";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPostsData.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | AAU Tours and Travel",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPostsData.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPostsData
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <BlogPostHero post={post} />
      <BlogPostContent post={post} />
      <BlogPostAuthor author={post.author} />
      <BlogPostRelated posts={relatedPosts} />
    </>
  );
}
