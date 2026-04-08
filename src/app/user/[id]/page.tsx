"use client";

import { useParams } from "next/navigation";

import { Typography } from "@/components/typography";

export default function UserProfilePage() {
  const params = useParams();

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <Typography variant="h1" className="mb-4">
        User Profile: {params.id}
      </Typography>
      <Typography variant="p">
        This is a dynamic user profile page. The user ID is{" "}
        <code>{params.id}</code>.
      </Typography>
    </div>
  );
}
