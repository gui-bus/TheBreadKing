const AboutSection = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto my-2">
        <h2 className="md:w-1/6 text-2xl font-black flex items-center justify-center">
          SOBRE NÓS
        </h2>

        <p className="md:w-5/6 text-center font-light">
          Descubra a essência da nossa padaria, onde cada produto é
          cuidadosamente preparado para proporcionar momentos únicos. Nosso
          compromisso com a qualidade e paixão pela arte da panificação nos
          tornam a escolha perfeita para os amantes de sabores autênticos.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
