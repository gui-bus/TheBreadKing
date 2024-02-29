import Image from "next/image";
import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const items: { title: string; text: string }[] = [
  {
    title: "Ambiente Aconchegante",
    text: "Projetado para oferecer aos clientes um ambiente aconchegante e convidativo.",
  },
  {
    title: "Produtos Frescos",
    text: "Oferecemos uma variedade de produtos frescos e feitos com ingredientes de qualidade.",
  },
  {
    title: "Atendimento Personalizado",
    text: "Nosso atendimento é personalizado, buscando atender às preferências de cada cliente.",
  },
  {
    title: "Feedback Constante",
    text: "Estamos sempre abertos ao feedback dos clientes para aprimorar nossos serviços.",
  },
  {
    title: "Tradição e Dedicação",
    text: "Cada produto é feito com cuidado e dedicação para proporcionar uma experiência única.",
  },
];

const QualitySection = () => {
  return (
    <section className="w-full max-w-[90%] mx-auto bg-[#F5F5F5] pt-8 rounded-3xl">
      <h2 className="font-black text-2xl md:text-3xl text-center uppercase">
        Por que escolher a The Bread King?
      </h2>
      <div className="mb-10 bg-[#F5F5F5] flex flex-col lg:flex-row items-center justify-around pb-10 px-5 rounded-3xl gap-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start justify-start py-6 gap-6">
            {items.map((item, index) => (
              <div
                className="flex items-center justify-center gap-6 p-2 w-full max-w-md"
                key={index}
              >
                <span>
                  <BsFillPatchCheckFill size={70} className="text-primary" />
                </span>

                <div className="flex flex-col items-start justify-start gap-1 w-full">
                  <h3 className="md:text-xl font-medium">{item.title}</h3>
                  <p className="font-light text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/Banner03.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="The Bread King"
          className="w-full lg:max-w-[50%] h-full object-cover md:px-10 lg:px-0"
        />
      </div>
    </section>
  );
};

export default QualitySection;
