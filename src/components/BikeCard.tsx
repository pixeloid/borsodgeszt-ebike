import React from 'react';
import { Check } from 'lucide-react';

interface BikeCardProps {
  name: string;
  image: string;
  price: number;
  features: string[];
}

const BikeCard: React.FC<BikeCardProps> = ({ name, image, price, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-green-600 font-bold mb-4">{price.toLocaleString()} Ft / nap</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BikeCard;