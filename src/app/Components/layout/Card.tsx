import Image from "next/image";
const Cards = () => {
  const cards = [
    {
      src: '/adcup.png',
      alt: 'adcup',
      title: 'Ad cupiditate sed est odio',
      description: 'Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.',
    },
    { 
      src: '/volu.png',
      alt: 'volu',
      title: 'Voluptatem voluptatum alias',
      description: 'Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.',
    },
    {
      src: '/fugit.png',
      alt: 'fugit',
      title: 'Fugit cupiditate alias nobis.',
      description: 'Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-14 ">
      {cards.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 shadow-lg w-[350px] h-[450px] flex flex-col items-center text-center"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={250}
            height={300}
            className="object-cover rounded-lg mt-10 transform transition-transform duration-500 hover:scale-90"
          />
          <h3 className="text-lg font-bold text-blue-900 mt-6">{item.title}</h3>
          <p className="text-gray-700 mt-4 leading-relaxed font-normal ">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
