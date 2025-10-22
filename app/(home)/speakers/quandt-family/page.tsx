import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// TO-DO: Get BIO
// TO-DO: Change Names

const IndividualSpeakerPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen py-8 gap-8 bg-[#779a46]">
      <div className="h-[40px] w-full" />
      <div className="w-[280px] h-[350px] flex items-center relative justify-center shadow-xl rounded-lg overflow-hidden">
        <Image
          src="/images/speakers/quandt-family/cover.JPG"
          alt="Quandt Family Cover"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-center gap-4 flex-col px-4 pt-10">
        <span className="text-white font-bold text-3xl text-center">
          The Quandt Family
        </span>
        <span className="text-white/70 font-base italic text-xl text-center">
          ___ and ___ Hartwig
        </span>
        <div className="bg-white/30 h-[1px] w-[80px]" />
        <span className="text-white/80 font-base text-lg text-center">___</span>
        <span className="text-white/80 font-base text-lg text-center">___</span>
      </div>
      <div className="bg-white/30 h-[1px] w-[80px]" />

      <div className="flex flex-col items-center justify-center gap-4 px-6">
        <Carousel className="w-full max-w-xs">
          <CarouselContent className=" h-[380px]">
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_3.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_4.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_5.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_6.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_7.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_8.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_9.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_10.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_11.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_12.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_13.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_14.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_15.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_16.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_17.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_18.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_19.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem>
            {/* <CarouselItem
              key={1}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[280px] h-[370px] flex items-center justify-center">
                <Image
                  src={`/images/families/quandt/quandt_9.jpg`}
                  alt={1 + "__brophy_domina_photo"}
                  width={280}
                  height={370}
                  className="object-contain rounded-xl overflow-hidden"
                />
              </div>
            </CarouselItem> */}
          </CarouselContent>
        </Carousel>
        <div>
          <span className="text-white/50 italic text-sm text-center">
            (Scroll through to see more images)
          </span>
        </div>
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
