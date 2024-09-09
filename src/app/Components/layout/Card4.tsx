import Image from "next/image";

const Card4 = () => {
  const cards4 = [
    {
      src: '/award.png',
      alt: 'award',
      title: 'Corporis voluptates sit',
      text: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
    },
    {
      src: '/check.png',
      alt: 'check',
      title: 'Ullamco laboris nisi',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    },
    {
      src: '/lb.jpeg',
      alt: 'lb',
      title: 'Labore consequatur',
      text: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere',
    },
    {
      src: '/group.png',
      alt: 'group',
      title: 'Beatae veritatis',
      text: 'Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta',
    },
    {
      src: '/molis.jpeg',
      alt: 'molis',
      title: 'Molestiae dolor',
      text: 'Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte',
    },
    {
      src: '/expc.jpeg',
      alt: 'expc',
      title: 'Explicabo consectetur',
      text: 'Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 pr-2 ">
      {cards4.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 w-[400px] flex items-start"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={50}
            height={50}
            className="object-cover rounded-lg mr-3 mt-2 "
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
            <p className="text-sm font-normal text-gray-700">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card4;
