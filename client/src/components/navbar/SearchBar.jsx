import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const _STYLE_container = `
bg-gray-600 hover:bg-gray-700 cursor-pointer 
rounded-full px-4 py-3 flex items-center
`

const _STYLE_inputText = `
  bg-transparent 
  mx-3 w-full border:none outline-none
  font-inter text-sm 
`

const SearchBar = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    console.log(text);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className={_STYLE_container}>
      <FontAwesomeIcon icon={faSearch} color="gray-500" size="lg" />
      <input onKeyDown={handleKeyDown} value={text} onChange={(e) => setText(e.target.value)} placeholder="Cari disini..." type="text" className={_STYLE_inputText} />
      {text.length !== 0 && (
        <FontAwesomeIcon icon={faClose} color="gray-500" size="lg" onClick={(e) => setText('')} />
      )}
    </div>
  );
};

export default SearchBar;
