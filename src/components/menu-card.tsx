interface MenuItem {
  name: string;
  description: string;
  price: number;
}

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-input text-black flex flex-col items-center justify-center text-center drop-shadow-xl select-none transition-all duration-300 ease-in-out hover:scale-105">
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="font-light">{item.description}</p>
      <p className="font-bold mt-2">
        {item.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
};

export default MenuCard;
