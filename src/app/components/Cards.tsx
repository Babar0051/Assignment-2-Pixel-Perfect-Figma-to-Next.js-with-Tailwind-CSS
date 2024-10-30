import React from 'react';

const Cards: React.FC = () => {
  const cardData = [
    {
      color: '#F2E4D9',
      title: 'training Courses',
      description: 'The gradual accumulation of information about atomic and small-scale behaviour...',
    },
    {
      color: '#A0E8A2',
      title: '2,769 online courses',
      description: 'The gradual accumulation of information about atomic and small-scale behaviour...',
    },
    {
      color: '#f5f7fa',
      title: 'training Courses',
      description: 'The gradual accumulation of information about atomic and small-scale behaviour...',
    },
  ];

  return (
    <div className="bg-[#1C223A] py-10 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`shadow-lg p-6 flex flex-col items-left justify-center ${
              index === 2 ? 'bg-[#1A8CFF]' : 'bg-white'
            }`}
            style={{ width: '260px', height: '250px' }}
          >
            <div
              className="w-12 h-12 rounded-md mb-4"
              style={{ backgroundColor: card.color }}
            ></div>
            <h3 className={`font-semibold text-lg mb-2 ${index === 2 ? 'text-white' : 'text-black'}`}>
              {card.title}
            </h3>
            <hr className={`w-8 border-t-2 mb-4 ${index === 2 ? 'border-white' : 'border-red-500'}`} />
            <p className={`text-sm ${index === 2 ? 'text-white' : 'text-gray-600'}`}>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
