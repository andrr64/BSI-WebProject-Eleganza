import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function CollectionCard({link, imageUrl, title, extraClassname=null, font=null, fontSize="text-lg lg:text-3xl",height='100vh',  width="100%", scaleTransition = true, opacityTransition = true, uppercase=true, titleWithImage=false, titleWithImageWidth = "100%", titleWithImageHeight = "100%"}) {
 
  const getTitle = () => {
    if (titleWithImage !== false){
      return (
        <img style={{
          width: titleWithImageWidth,
          height: titleWithImageHeight
        }} src={titleWithImage} alt="" />
      )
    } else {
      return (
        <p className={`${font !== null? font : 'font-inter'} ${uppercase === true? 'uppercase' : ''} ${fontSize} text-center`}>{title}</p>
      )
    }
  }

  return (
    <Link 
      to={link}
      className={`
        homepage-unggulan
        flex justify-center items-center
        relative
        transition duration-500 ease-in-out
        ${scaleTransition === false? '' : 'hover:scale-95'}
        ${extraClassname !== null? extraClassname : ''}`}
      style={{
        height: height,
        width: width
      }}
    >
      <img 
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        className={`
          absolute inset-0 bg-black opacity-10 ${opacityTransition? 'hover:opacity-30' : ''} transition duration-500 ease-in-out`}
      ></div>
      <div className="justify-center items-center flex py-2 px-6 z-10 text-white">
        {getTitle()}
      </div>
    </Link>
  );
}

export default CollectionCard;
