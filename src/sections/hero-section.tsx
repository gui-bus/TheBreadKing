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
import Link from "next/link";

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
        className="mx-auto w-full max-w-7xl px-5 pb-5 md:hidden"
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
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
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

      <div className="md:grid grid-cols-3 gap-4 px-5 pb-5 w-full 3xl:max-w-7xl mx-auto hidden">
        <div className="bg-[url('/IMG01.svg')] bg-cover bg-center bg-no-repeat rounded-xl flex items-end justify-end h-80">
          <div className="bg-[#1B1B1B] bg-opacity-80 w-full h-fit py-5 rounded-xl flex flex-col items-center justify-center text-white">
            <h2 className="uppercase text-2xl font-bold">Faça sua encomenda</h2>
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

        <div className="bg-[url('/IMG02.svg')] bg-cover bg-center bg-no-repeat rounded-xl flex items-end justify-end h-80" />

        <div className="bg-[url('/IMG03.svg')] bg-cover bg-center bg-no-repeat rounded-xl flex items-end justify-end h-80">
          <div className="bg-[#1B1B1B] bg-opacity-80 w-full h-fit py-5 rounded-xl flex flex-col items-center justify-center text-white">
            <h2 className="uppercase text-2xl font-bold">
              Acesse o nosso cardápio
            </h2>
            <p className="text-sm font-light">Conheça o nosso cardápio.</p>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-[90%] mt-5">
                  Ver Cardápio <MdOutlineMenuBook size={20} className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
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
