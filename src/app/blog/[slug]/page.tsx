"use client";

import { useParams } from "next/navigation";

import { Typography } from "@/components/typography";

export default function BlogPostPage() {
  const params = useParams();

  return (
    <div className="mx-auto max-w-2xl py-12">
      <Typography variant="h1" className="mb-4">
        Blog Post: {params.slug}
      </Typography>
      <Typography variant="p">
        This is a dynamic blog post page. The slug is <code>{params.slug}</code>
        .
      </Typography>
    </div>
  );
}
