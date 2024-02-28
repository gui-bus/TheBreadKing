"use client";
import AboutSection from "@/sections/about-section";
import HeroSection from "@/sections/hero-section";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      <div className=" mx-auto w-full 3xl:max-w-7xl">
        <Image
          src="/Banner.svg"
          alt="The Bread King Banner"
          width={0}
          height={0}
          className={`relative h-auto w-full object-cover 2xl:rounded-b-xl hidden md:block ${
            isLoading ? "hidden" : ""
          }`}
          sizes="100vw"
          priority
          draggable="false"
          onLoad={() => setIsLoading(false)}
        />

        <Image
          src="/BannerMobile.svg"
          alt="The Bread King Banner"
          width={0}
          height={0}
          className={`relative h-auto w-full object-cover 2xl:rounded-b-xl md:hidden ${
            isLoading ? "hidden" : ""
          }`}
          sizes="100vw"
          priority
          draggable="false"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <h1 className="text-2xl lg:text-3xl uppercase font-black my-5 text-center px-5 md:px-0">
        Seja bem-vindo à uma experiência irresistível!
      </h1>

      <HeroSection />

      <AboutSection />
    </main>
  );
}
