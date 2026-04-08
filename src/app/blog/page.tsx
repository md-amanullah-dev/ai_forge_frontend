import { Typography } from "@/components/typography";

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Typography variant="h1" className="text-white">Blog</Typography>
      <p className="mt-4 text-slate-400 border border-white/10 p-8 rounded-xl bg-slate-900/50">
        Discover the latest updates and insights from AIForge.
      </p>
    </div>
  );
}
