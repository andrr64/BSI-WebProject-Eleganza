import { FaCartPlus } from "react-icons/fa";
import { IoNavigateOutline } from "react-icons/io5";
import { IoChatbox } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";

export const IconCartPlus = ({size = ''}) => (<FaCartPlus size={size}/>)
export const IconDetail = ({size = ''}) => (< IoNavigateOutline size={size}/>)
export const IconCart = ({size = ''}) => (<FaShoppingCart   size={size} />)
export const IconChat = ({size = ''}) => (<IoChatbox size={size} />)
export const IconChatBubble = ({size = ''}) => (<IoIosChatbubbles size={size} />)