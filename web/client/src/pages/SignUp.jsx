import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const buatField = (label, idField, type, placeholder, valuePtr, onChange) => {
  return (
    <div>
      <label htmlFor={idField} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input 
        type={type} 
        name={idField}
        id={idField}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder} 
        value={valuePtr}
        onChange={onChange}
      />
    </div>
  )
}

const SignUp = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link to={'/'}>
              <div className="text-sm duration-300 transition ease-in-out font-medium flex items-center hover:-translate-x-2">
                <FontAwesomeIcon icon={faChevronLeft} className="mr-2"/>
                <p>Kembali ke Beranda</p>
              </div>
            </Link>
            <div>
              <h1 className="my-12 font-laBelle text-center text-5xl">
                Eleganza
              </h1>
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Registrasi Akun
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              {buatField('Nama','nama', 'text', 'Nama Lengkap', nama, (e) => setNama(e.target.value))}
              {buatField('Email', 'email', 'email', 'contoh@email.com', email, (e) => setEmail(e.target.value))}
              {buatField('Password', 'password', 'password', '••••••••', password, (e) => setPassword(e.target.value))}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Sudah memiliki akun? <a href="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Masuk</a>
              </p>
              <div>
                <button
                  type="submit"
                  className="duration-300 hover:-translate-y-1 transition ease-in-out delay-150 flex w-full justify-center rounded-md bg-gray-800 hover:bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buat Akun
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;