"use client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const productImages = [
  "/Product01.svg",
  "/Product02.svg",
  "/Product04.svg",
  "/Product06.svg",
  "/Product05.svg",
  "/Product03.svg",
];

const AboutSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="flex flex-col items-center justify-center w-full pb-5">
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-7xl mx-auto my-2 px-5">
        <h2 className="md:w-1/6 text-3xl font-black">SOBRE NÓS</h2>

        <p className="md:w-5/6 md:text-center font-light px-5 md:px-0 text-justify mt-5 md:mt-0">
          Descubra a essência da nossa padaria, onde cada produto é
          cuidadosamente preparado para proporcionar momentos únicos. Nosso
          compromisso com a qualidade e paixão pela arte da panificação nos
          tornam a escolha perfeita para os amantes de sabores autênticos.
        </p>
      </div>

      <Separator className="my-5" />

      <Image
        src="/Banner02.svg"
        alt="Banner"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto bg-cover 3xl:rounded-xl"
      />

      <div className="text-center mt-5 w-full max-w-7xl mx-auto p-5">
        <h3 className="text-3xl font-black mb-3 uppercase">
          Conheça Nossos Produtos
        </h3>
        <p className="font-light">
          Descubra a variedade irresistível de nossos produtos artesanais. Da
          delicadeza dos nossos doces às crocantes opções de pães, temos algo
          especial para cada paladar. Delicie-se com a autenticidade e nossos
          sabores únicos.
        </p>

        <p className="font-light my-5">
          Na The Bread King, cada item é cuidadosamente preparado para oferecer
          uma experiência única. Nossos pães são assados diariamente, utilizando
          ingredientes frescos e de alta qualidade. Além disso, nossos bolos e
          doces são feitos com dedicação, resultando em sobremesas que encantam
          os sentidos.
        </p>
        <p className="font-medium">
          Visite-nos e descubra por que somos conhecidos por proporcionar
          momentos de puro prazer gastronômico.
        </p>
      </div>

      <Carousel
        className="mx-auto w-full max-w-7xl py-5 lg:hidden text-center"
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="cursor-grab active:cursor-grabbing">
          {productImages.map((imageSrc, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
              <Image
                key={index}
                src={imageSrc}
                alt={`Product ${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-44 h-auto aspect-square bg-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center gap-2 mt-5">
          <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
            <CarouselPrevious />
          </div>

          <p className="text-sm font-light">
            {current}/{count}
          </p>

          <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
            <CarouselNext />
          </div>
        </div>
      </Carousel>

      <div className="lg:flex items-center justify-center gap-5 my-5 select-none hidden">
        {productImages.map((imageSrc, index) => (
          <Image
            key={index}
            src={imageSrc}
            alt={`Product ${index + 1}`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-44 h-auto aspect-square bg-cover"
            draggable="false"
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
