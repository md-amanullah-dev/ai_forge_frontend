import { Typography } from "@/components/typography";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Typography variant="h1" className="mb-4">
        404
      </Typography>
      <Typography variant="p" className="mb-8 text-xl text-gray-600">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <a
        href="/"
        className="rounded bg-blue-600 px-4 py-2 text-white shadow transition hover:bg-blue-700"
      >
        Go Home
      </a>
    </div>
  );
}
