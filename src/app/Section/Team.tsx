import Image from "next/image";

const Team = () => {
  const cards4 = [
    {
      src: '/team/team-1.jpg',
      alt: 'award',
      name: 'Walter White',
      title: 'Chief Executive Officer',
      text: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
    },
    {
      src: '/team/team-2.jpg',
      alt: 'check',
      name: 'Sarah Jhonson',
      title: 'Product Manager',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    },
    {
      src: '/team/team-3.jpg',
      alt: 'check',
      name: 'William Anderson',
      title: 'CTO',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    },
    {
      src: '/team/team-4.jpg',
      alt: 'check',
      name: 'Amanda Jepson',
      title: 'Accountant',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center h-80  gap-6 mt-28 mb-32">
      {cards4.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-xl w-[250px] p-6 flex flex-col items-start justify-start text-left"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={90}
            height={80}
            className="object-cover rounded-lg mr-4 mt-8 mb-10"
          />
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.name}</p>
            <p className="text-sm text-gray-600 mt-2">{item.text
            .split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
            </p>
            
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Team;
