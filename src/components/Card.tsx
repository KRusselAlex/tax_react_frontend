import React from "react";

interface CardProps {
  title: string;
  number: number;
  icon: React.ComponentType<{ size: number; className: string }>;
  color?: string; // Optional color prop for the icon
}

const Card: React.FC<CardProps> = ({
  title,
  number,
  icon: Icon,
  color = "text-blue-500",
}) => {
  return (
    <div className="p-4 flex items-center gap-4 border rounded-xl bg-white">
      {Icon && <Icon size={28} className={`${color} `} />}
      <div>
        <p className="text-lg text-primary font-medium">{title}</p>
        <p className="text-2xl font-medium text-buttonColor">{number}</p>
      </div>
    </div>
  );
};

export default Card;
