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
    <div className="flex flex-col items-center justify-center mt-32">
<div className="w-24 text-center text-sm rounded-3xl text-blue-700 bg-slate-300 font-semibold py-2 ">
        <h3 className="">TEAM</h3>
      </div>
      <div className="mt-0">
        <div className="text-center text-4xl font-mono text-blue-900 font-semibold py-2 scroll-m-20 pb-2 tracking-tight first:mt-0">
          <h3>Our hard working team</h3>
        </div>
      </div>


    <div className="flex flex-wrap justify-center  gap-6 mt-8 mb-32">
      
      {cards4.map((item, index) => (
        <div
        key={index}
        className="bg-white shadow-xl w-[280px] h-[400px] p-6 flex flex-col items-center justify-center text-center transition-transform duration-500 transform hover:scale-110"
      >
        <div className="w-full h-[200px] overflow-hidden rounded-lg">
          <Image
            src={item.src}
            alt={item.alt}
            width={250}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        
        <h3 className="text-lg text-blue-900 font-semibold mt-4">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-2">{item.name}</p>
        <p className="text-sm text-gray-600 mt-2">
          {item.text.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      
            
        

          
      
      ))}
    </div>
    </div>
  );
};

export default Team;
