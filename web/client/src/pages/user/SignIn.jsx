import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import { serverApiJsonPost } from "../../api/API.jsx";
import { useDispatch } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../../redux/user/userSlice.js";

import GoogleLogo from "../../assets/icons/brands/google.svg";

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

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    dispatch(signInStart());
    const response = await(await serverApiJsonPost('/user/login',{
      email: email,
      password: password
    })).json();
    if (response.status){
      dispatch(signInSuccess(response.data.user));
      navigator('/');
      return;
    }
    dispatch(signInFailure('Login Fail...'));
    return;
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="font-inter flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link to={'/'} className="transition ease-in-out duration-300 flex hover:-translate-x-2 items-center font-bold text-sm">
              <FontAwesomeIcon icon={faChevronLeft} className="mr-2"/>
              <p>Kembali ke beranda</p>
            </Link>
            <div>
              <h1 className="my-10 text-center font-laBelle text-5xl my-6 text-black">
                Eleganza
              </h1>
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Masuk
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              {buatField('Email', 'email', 'email', 'user@email.com', email, (e) => setEmail(e.target.value))}
              {buatField('Password', 'password', 'password', '••••••••', password, (e) => setPassword(e.target.value))}
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Ingat Saya</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Lupa Password?</a>
              </div>
              <div className="space-y-3">
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="duration-300 hover:-translate-y-1 transition ease-in-out delay-150 flex w-full justify-center rounded-md bg-gray-800 hover:bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
                <p className="text-center text-sm">atau</p>
                <button
                  type="button"
                  className="text-black duration-300 hover:-translate-y-1 transition ease-in-out delay-150 flex w-full justify-center rounded-md border bg-transparent hover:bg-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm "
                >
                  <img src={GoogleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
                  Login dengan Google
                </button>
              </div>
              <div className="text-sm font-light text-gray-800">
                <p>
                  Belum memiliki akun? <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrasi</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;