/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function CollectionCard({link, imageUrl, title, extraClassname}) {
  return (
    <Link 
      to={link}
      className={`
        rounded-2xl overflow-hidden h-64 w-1/3 
        transition duration-500 ease-in-out 
        flex justify-center items-center
        relative
        ${extraClassname}
      `}
    >
      <img 
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="
          absolute inset-0
          bg-black opacity-20 hover:opacity-40 transition duration-500 ease-in-out
        "
      ></div>
      <div 
        className="z-10 text-center text-white font-inter text-3xl">
        {title}
      </div>
    </Link>
  );
}

export default CollectionCard;
