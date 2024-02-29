"use client";
import { useEffect, useState } from "react";
import { MdOutlineMenuBook, MdWhatsapp } from "react-icons/md";

import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

import Link from "next/link";
import MenuCard from "@/components/menu-card";

const menuItems = [
  { name: "Pão Artesanal", description: "Pão fresco e crocante", price: 5.99 },
  {
    name: "Bolo de Chocolate",
    description: "Delicioso bolo de chocolate",
    price: 12.99,
  },
  { name: "Croissant", description: "Croissant folhado e macio", price: 3.49 },
  {
    name: "Baguete Integral",
    description: "Baguete integral com grãos",
    price: 7.99,
  },
  {
    name: "Torta de Frutas",
    description: "Torta recheada com frutas frescas",
    price: 15.99,
  },
  {
    name: "Pão de Queijo",
    description: "Tradicional pão de queijo mineiro",
    price: 4.99,
  },
  {
    name: "Cookies de Aveia",
    description: "Cookies de aveia com pedaços de chocolate",
    price: 6.99,
  },
  {
    name: "Bolo de Morango",
    description: "Bolo recheado com morangos frescos",
    price: 14.99,
  },
  {
    name: "Sanduíche de Frango",
    description: "Sanduíche de frango grelhado",
    price: 8.99,
  },
  {
    name: "Brownie de Nozes",
    description: "Brownie com nozes e chocolate",
    price: 9.99,
  },
  {
    name: "Pão de Cebola",
    description: "Pão artesanal com cebolas caramelizadas",
    price: 6.49,
  },
  {
    name: "Torta de Limão",
    description: "Torta cremosa de limão",
    price: 13.99,
  },
  {
    name: "Empada de Palmito",
    description: "Empada recheada com palmito",
    price: 5.49,
  },
  {
    name: "Rosquinhas de Canela",
    description: "Rosquinhas fofas com canela",
    price: 3.99,
  },
  {
    name: "Bolo Red Velvet",
    description: "Bolo aveludado com cream cheese",
    price: 16.99,
  },
  {
    name: "Pão Multigrãos",
    description: "Pão com diversos grãos e sementes",
    price: 7.49,
  },
  {
    name: "Torta de Maçã",
    description: "Torta clássica de maçã",
    price: 11.99,
  },
  {
    name: "Sanduíche Vegetariano",
    description: "Sanduíche com ingredientes frescos",
    price: 8.49,
  },
  {
    name: "Coxinha de Frango",
    description: "Coxinha recheada com frango desfiado",
    price: 4.79,
  },
  {
    name: "Pudim de Leite",
    description: "Pudim tradicional de leite condensado",
    price: 10.99,
  },
  {
    name: "Bolo de Cenoura",
    description: "Bolo fofinho com cobertura de chocolate",
    price: 13.49,
  },
  {
    name: "Pão Australiano",
    description: "Pão escuro com mel e aveia",
    price: 6.99,
  },
  {
    name: "Bolo de Abacaxi",
    description: "Bolo recheado com pedaços de abacaxi",
    price: 14.49,
  },
  {
    name: "Cinnamon Rolls",
    description: "Rolinhos de canela com cobertura de cream cheese",
    price: 9.49,
  },
  {
    name: "Torta Holandesa",
    description: "Torta com camadas de creme e biscoito",
    price: 17.99,
  },
  {
    name: "Pão de Alho",
    description: "Pão recheado com alho e ervas",
    price: 5.29,
  },
  {
    name: "Bolo de Nozes",
    description: "Bolo com pedaços generosos de nozes",
    price: 15.49,
  },
  { name: "Pão Francês", description: "O clássico pão francês", price: 2.99 },
];

export default function HeroSection() {
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
    <section className="flex flex-col items-center justify-center">
      <Carousel
        className="mx-auto w-full max-w-7xl px-5 pb-5 md:hidden text-center"
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="cursor-grab active:cursor-grabbing">
          <CarouselItem>
            <div className="bg-[url('/IMG02.svg')] bg-cover bg-center bg-no-repeat rounded-xl flex items-end justify-end h-80" />
          </CarouselItem>

          <CarouselItem>
            <div className="bg-[url('/IMG01.svg')] bg-cover bg-center bg-no-repeat rounded-xl flex items-end justify-end h-80">
              <div className="bg-[#1B1B1B] bg-opacity-80 w-full h-fit py-5 rounded-xl flex flex-col items-center justify-center text-white">
                <h2 className="uppercase text-2xl font-bold">
                  Faça sua encomenda
                </h2>
                <p className="text-sm font-light">
                  Venha se deliciar com os nosso incríveis produtos.
                </p>

                <Button className="w-[90%] mt-5" asChild>
                  <Link
                    target="_blank"
                    href={`https://wa.me/12981847553?text=
              Olá, gostaria de fazer uma encomenda!
            `}
                  >
                    Fazer encomenda <MdWhatsapp size={20} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="bg-[url('/IMG03.svg')] bg-cover bg-center bg-no-repeat rounded-xl flex items-end justify-end h-80">
              <div className="bg-[#1B1B1B] bg-opacity-80 w-full h-fit py-5 rounded-xl flex flex-col items-center justify-center text-white">
                <h2 className="uppercase text-2xl font-bold">
                  Acesse o nosso cardápio
                </h2>
                <p className="text-sm font-light">Conheça o nosso cardápio.</p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-[90%] mt-5">
                      Ver Cardápio{" "}
                      <MdOutlineMenuBook size={20} className="ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Nosso cardápio</DialogTitle>
                      <DialogDescription>
                        <ScrollArea className="h-[25rem] w-full rounded-md border p-2 my-5">
                          <div className="container mx-auto mt-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-10">
                              {menuItems.map((item, index) => (
                                <MenuCard key={index} item={item} />
                              ))}
                            </div>
                          </div>
                        </ScrollArea>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CarouselItem>
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

      <div className="md:grid grid-cols-3 gap-4 px-5 pb-5 w-full 3xl:max-w-7xl mx-auto hidden cursor-default select-none">
        <div className="bg-[url('/IMG01.svg')] bg-cover bg-center bg-no-repeat rounded-xl flex items-end justify-end h-80">
          <div className="bg-[#1B1B1B] bg-opacity-80 w-full h-fit p-5 rounded-xl flex flex-col items-center justify-center text-white text-center">
            <h2 className="uppercase text-2xl font-bold">Faça sua encomenda</h2>
            <p className="text-sm font-light">
              Experimente o melhor em cada mordida.
            </p>

            <Button className="w-full mt-5" asChild>
              <Link
                target="_blank"
                href={`https://wa.me/12981847553?text=
              Olá, gostaria de fazer uma encomenda!
            `}
              >
                Fazer encomenda <MdWhatsapp size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-[url('/IMG02.svg')] bg-cover bg-center bg-no-repeat rounded-xl flex items-end justify-end h-80" />

        <div className="bg-[url('/IMG03.svg')] bg-cover bg-center bg-no-repeat rounded-xl flex items-end justify-end h-80">
          <div className="bg-[#1B1B1B] bg-opacity-80 w-full h-fit p-5 rounded-xl flex flex-col items-center justify-center text-white text-center">
            <h2 className="uppercase text-2xl font-bold">Explore o cardápio</h2>
            <p className="text-sm font-light">
              Descubra as delícias que temos para oferecer.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full mt-5">
                  Ver Cardápio <MdOutlineMenuBook size={20} className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nosso cardápio</DialogTitle>
                  <DialogDescription>
                    <ScrollArea className="h-[25rem] w-full rounded-md border p-2 my-5">
                      <div className="container mx-auto mt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-10">
                          {menuItems.map((item, index) => (
                            <MenuCard key={index} item={item} />
                          ))}
                        </div>
                      </div>
                    </ScrollArea>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
