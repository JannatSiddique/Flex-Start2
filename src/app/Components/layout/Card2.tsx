import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cards2 = () => {
  const cards2 = [
    {
      src: '/happy.png',
      alt: 'happy',
      title: '232',
      description: 'Happy Clients',
    },
    {
      src: '/project.png',
      alt: 'project',
      title: '521',
      description: 'Projects',
    },
    {
      src: '/microphone.png',
      alt: 'microphone',
      title: '1463',
      description: 'Hours Of Support',
    },
    {
        src: '/people.png',
        alt: 'people',
        title: '15',
        description: 'Hard Workers',
      },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-28 mb-32">
  {cards2.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-xl w-[250px] p-6   flex items-start justify-start text-left"
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={50}
        height={50}
        className="object-cover rounded-lg mr-4 mt-8 mb-10"
      />
      <div className="flex flex-col mt-8">
        <h3 className="text-3xl font-bold text-blue-900 mb-0">{item.title}</h3>
        <p className="text-gray-700 leading-relaxed font-normal">{item.description}</p>
      </div>
    </div>
  ))}
</div>



        
     
  );
};

export default Cards2;
