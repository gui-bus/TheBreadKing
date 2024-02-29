"use client";
import { Separator } from "@/components/ui/separator";
import AboutSection from "@/sections/about-section";
import ContactSection from "@/sections/contact-section";
import HeroSection from "@/sections/hero-section";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import QualitySection from "@/sections/quality-section";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="mx-auto w-full 3xl:max-w-7xl">
      <div className="md:relative">
        <div>
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

        <div className="flex items-center justify-center">
          <div className="my-3 flex md:absolute md:bottom-3 md:right-3 md:my-0">
            <div className="flex items-center justify-center gap-2 md:flex-col">
              <Button size={"icon"} variant={"outline"} asChild>
                <Link
                  href={"https://www.linkedin.com/in/gui-bus/"}
                  target="_blank"
                >
                  <FaLinkedinIn size={20} />
                </Link>
              </Button>

              <Button size={"icon"} variant={"outline"} asChild>
                <Link href={"https://github.com/gui-bus"} target="_blank">
                  <FaGithub size={20} />
                </Link>
              </Button>

              <Button size={"icon"} variant={"outline"} asChild>
                <Link href={"mailto:guibus.dev@gmail.com"} target="_blank">
                  <FaMailBulk size={20} />
                </Link>
              </Button>

              <Button size={"icon"} variant={"outline"} asChild>
                <Link href={"https://wa.me/12981847553"} target="_blank">
                  <FaWhatsapp size={20} />
                </Link>
              </Button>
            </div>
          </div>

          <IoChevronDownCircleOutline
            className="absolute bottom-3 hidden animate-bounce text-white md:block"
            size={30}
          />
        </div>
      </div>

      <h1 className="text-2xl lg:text-3xl uppercase font-black mb-5 md:mt-5 text-center px-5 md:px-0">
        Seja bem-vindo à uma experiência irresistível!
      </h1>

      <HeroSection />

      <Separator className="my-5" />

      <AboutSection />

      <Separator className="mb-5" />

      <ContactSection />

      <Separator className="my-5" />

      <QualitySection />
    </main>
  );
}
