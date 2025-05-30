import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TechCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}
const TechCard: React.FC<TechCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`card hover:shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="flex items-center mb-4">
        <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-md text-primary-500 dark:text-primary-400 mr-4">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default TechCard;