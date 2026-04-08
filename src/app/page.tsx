import Link from "next/link";

import { Sun } from "lucide-react";

import { Typography } from "@/components/typography";

export default function Home() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-8 px-4 py-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <span className="mb-2 inline-flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
          <Sun size={48} className="text-blue-600" />
        </span>

        <Typography variant="h1">Welcome to Next.js 14 Template</Typography>

        <Typography variant="p" className="max-w-xl text-gray-600">
          A modern, scalable starter with TypeScript, Zustand, react-hot-toast,
          shadcn/ui, Roboto, and more. Built for rapid development and best
          practices.
        </Typography>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href="/blog/hello-world"
          className="rounded bg-blue-600 px-6 py-3 text-white shadow transition hover:bg-blue-700"
        >
          View Blog Example
        </Link>
        <Link
          href="/user/1"
          className="rounded bg-gray-200 px-6 py-3 text-blue-700 shadow transition hover:bg-gray-300"
        >
          View User Example
        </Link>
        <Link
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-blue-600 bg-white px-6 py-3 text-blue-600 shadow transition hover:bg-blue-50"
        >
          GitHub
        </Link>
      </div>

      <Typography variant="p" className="mt-8 text-gray-400">
        Edit <code>src/app/page.tsx</code> to get started.
      </Typography>
    </section>
  );
}
