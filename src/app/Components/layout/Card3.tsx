import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

const Card3 = () => {
  const cards3 = [
    {
      icon: faSquareCheck,
      text: 'Eos aspernatur rem',
    },
    {
      icon: faSquareCheck, 
      text: 'Facilis neque ipsa',
    },
    {
      icon: faSquareCheck,
      text: 'Volup amet volupt',
    },
    {
      icon: faSquareCheck,
      text: 'Rerum omnis sint',
    },
    {
      icon: faSquareCheck,
      text: 'Alias possimus',
    },
    {
      icon: faSquareCheck,
      text: 'Repellendus molli',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 pr-2 ">
      {cards3.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-lg p-6 w-[280px] h-[80px] flex items-center justify-start text-left"
        >
          <FontAwesomeIcon
            icon={item.icon} 
            style={{ color: "#e6e9ef", fontSize: "10px" }} 
            className="mr-4 hover:bg-blue-900 h-7 w-6"
          />
          <h3 className="text-xl font-semibold text-blue-900">{item.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card3;
