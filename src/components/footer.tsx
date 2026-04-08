import Link from "next/link";

import { Typography } from "@/components/typography";

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t px-8 py-6 text-center">
      <Typography variant="p" className="mb-2 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} NextStarter. All rights reserved.
      </Typography>
      <Typography variant="p" className="text-sm">
        <Link
          href="https://github.com/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </Link>
      </Typography>
    </footer>
  );
}
