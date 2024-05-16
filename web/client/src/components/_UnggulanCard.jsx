import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function UnggulanCard({link, imageUrl, title, extraClassname}) {
  return (
    <Link 
      to={link}
      className={`
        homepage-unggulan
        flex justify-center items-center
        relative
        transition duration-500 ease-in-out
        hover:scale-95
        ${extraClassname}
      `}
      style={{
        height: '100vh'
      }}
    >
      <img 
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        className="
          absolute inset-0
          bg-black opacity-10 hover:opacity-30 transition duration-500 ease-in-out
        "
      ></div>
      <div className="justify-center items-center flex py-2 px-6 z-10 text-white">
        <p className="uppercase text-lg text-center">{title}</p>
      </div>
    </Link>
  );
}

export default UnggulanCard;
