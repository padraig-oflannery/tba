import { Button } from "@/components/ui/button";
import { Award, Building2, Users, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// TO-DO: Program Page Info
// TO-DO: Award Recipients Page Create
// TO-DO: Tiana Page and Link
// TO-DO: Check Doug's Bio for accuracy

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-12 bg-[#779a46] ">
      <div className="flex items-center justify-center">
        <div className="w-[200px] flex items-center justify-center relative h-[200px]">
          <Image src="/images/logo/tba.png" alt="TBA ACI Logo" fill />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 flex-col px-4">
        <span className="text-white/80 font-base text-xl text-center">
          We truly value your attendance at the{" "}
          <span className="font-bold">7th Annual Touched by Adoption</span>{" "}
          Event.
        </span>
        <span className="text-white/80 font-base text-xl text-center mt-6">
          Your partnership is essential to us and makes a significant
          contribution to our mission. We are deeply grateful for your support
          and generosity, as together we are making a meaningful impact on the
          lives of those impacted by adoption.
        </span>
      </div>
      <div className="w-[80px] h-[1px] bg-white/30" />
      <div className="w-full flex items-center justify-center gap-2 flex-col bg-[#672543] py-8">
        <span className="text-white font-bold text-3xl">View the Auction</span>
        <span className="text-white/80 font-base text-lg text-center w-full px-4">
          Check out the auction site for this evening below.
        </span>
        <Button
          className="bg-white/10 hover:bg-white/10 border-white border-[2px] text-white"
          asChild
        >
          <Link href="https://cbo.io/app/public/bidapp/aci" target="_blank">
            Visit the Auction Site
          </Link>
        </Button>
      </div>
      <div className="w-full grid grid-cols-1 gap-4 px-4">
        <Link
          href="/speakers"
          className="w-full border-[2px] border-white/80 rounded-lg p-2 flex flex-col items-center justify-start shadow-lg select-none"
        >
          <Users className="w-20 h-20 text-white" strokeWidth={1} />
          <div className="w-full h-[1px] bg-white/80" />
          <span className="text-white font-base text-2xl text-center select-none">
            Tonight&apos;s Speakers
          </span>
        </Link>
        <Link
          href="/sponsors"
          className="w-full border-[2px] border-white/80 rounded-lg p-2 flex flex-col items-center justify-start shadow-lg select-none"
        >
          <Building2 className="w-20 h-20 text-white" strokeWidth={1} />
          <div className="w-full h-[1px] bg-white/80" />
          <span className="text-white font-base text-2xl text-center select-none">
            Event Sponsors
          </span>
        </Link>
      </div>
      <div className="w-full flex items-center justify-center gap-2 flex-col bg-[#3e4c5f] py-8">
        <span className="text-white font-bold text-3xl">
          Tonight&apos;s Program
        </span>
        <span className="text-white/80 font-base text-lg text-center w-full px-4">
          Check out the schedule for this evening below.
        </span>
        <Button
          className="bg-white/10 hover:bg-white/10 border-white border-[2px] text-white"
          asChild
        >
          <Link href="/program">See Program</Link>
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 flex-col px-4 pb-4">
        <span className="text-white font-bold text-3xl">Meet the Board</span>
        <span className="text-white/80 font-base text-lg text-center">
          See the members of the Adoption Choice, Inc. Board of Directors here.
        </span>
        <Button
          className="bg-white/10 hover:bg-white/10 border-white border-[2px] text-white"
          asChild
        >
          <Link href="/board-members">View ACI Board</Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;
