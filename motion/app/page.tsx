"use client";
import Motivational from "./Motivational";
import Ball from "./ball";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-lg flex justify-center items-center">
      <div className="flex flex-col items-center gap-8">
        <Motivational />
        <Ball />
      </div>
    </div>
  );
}
