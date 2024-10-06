import React from "react";

interface IdCardProps {
  name: string;
  title: string;
  image: string;
  email?: string; // Optional
  phone?: string; // Optional
}

const IdCard: React.FC<IdCardProps> = ({
  name,
  title,
  image,
  email,
  phone,
}) => {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-xs bg-white">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="h-24 w-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-2 ">{name}</h2>
      <h3 className="text-lg text-center text-gray-700">{title}</h3>
      {email && <p className="text-center text-gray-600">{email}</p>}
      {phone && <p className="text-center text-gray-600">{phone}</p>}
    </div>
  );
};

export default IdCard;
