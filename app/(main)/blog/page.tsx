import { BlogHero } from "@/components/blog/blog-hero";
import { BlogList } from "@/components/blog/blog-list";
import { blogPostsData } from "@/data/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | AAU Tours and Travel",
  description:
    "Explore our travel blog for tips, guides, and stories about Uganda's wildlife, culture, and tourist attractions.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList posts={blogPostsData} />
    </>
  );
}
