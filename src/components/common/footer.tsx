import React, { ReactNode } from "react";

import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const tel = "12981847553";

  const icons: { title: string; href: string; icon: ReactNode }[] = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/gui-bus/",
      icon: <FaLinkedinIn size={20} />,
    },
    {
      title: "Github",
      href: "https://github.com/gui-bus",
      icon: <FaGithub size={20} />,
    },
    {
      title: "E-mail",
      href: "mailto:guibus.dev@gmail.com",
      icon: <FaMailBulk size={20} />,
    },
    {
      title: "WhatsApp",
      href: `https://wa.me/${tel}}`,
      icon: <FaWhatsapp size={20} />,
    },
  ];

  return (
    <footer className="w-full 3xl:max-w-7xl mx-auto">
      <section className="border-t border-black flex flex-col items-center justify-around gap-5 md:flex-row py-5 px-5 md:px-0 text-center">
        <Link href={"/"}>
          <Image
            src="/LogoText.svg"
            alt="The Bread King"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-24 object-contain invert dark:invert-0"
          />
        </Link>

        <p className="text-xs font-light">
          &copy; {currentYear} The Bread King - Todos os direitos reservados.
        </p>

        <div className="flex gap-1">
          {icons.map((icon) => (
            <Link href={icon.href} target="_blank" key={icon.href}>
              <Button
                variant="outline"
                size="icon"
                className="transition-all duration-300 ease-in-out"
              >
                {icon.icon}
              </Button>
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
}
