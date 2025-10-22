import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// TO-DO: Get BIO
// TO-DO: Change Names and Photos

const IndividualSpeakerPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-8 bg-[#779a46]">
      <div className="h-[40px] w-full" />
      <div className="w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden">
        <Image
          src="/images/speakers/auctioneer/cover.png"
          alt="Auctioneer Cover"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-center gap-4 flex-col px-4 pt-10">
        <span className="text-white font-bold text-3xl text-center">
          Doug Jarecki
        </span>
        <span className="text-white/70 font-base italic text-xl text-center">
          2025 Auctioneer
        </span>
        <div className="bg-white/30 h-[1px] w-[80px]" />
        <span className="text-white/80 font-base text-lg text-center">
          Doug is a local actor and playwright who has appeared on stages
          throughout southeastern Wisconsin for the last 25 years.
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          {" "}
          "Captivating", "riveting", "nuanced"--these are just a few of the
          words that have never been used to describe Doug's stage performances.
        </span>
        <span className="text-white/80 font-base text-lg text-center">
          {" "}
          Doug is also the recipient of several fictitious awards, including the
          Worthington Trophy and Son Of The Year. But most importantly, Doug is
          thrilled to once again be a part of this fun and exciting event.
        </span>
      </div>
      <div className="bg-white/30 h-[1px] w-[80px]" />
      <Link
        href="/speakers"
        className="flex items-center justify-center gap-4 p-4"
      >
        <ArrowLeft className="text-white" strokeWidth={1} />
        <span className="text-white font-base text-lg">
          Return to All Speakers
        </span>
      </Link>
    </div>
  );
};

export default IndividualSpeakerPage;
