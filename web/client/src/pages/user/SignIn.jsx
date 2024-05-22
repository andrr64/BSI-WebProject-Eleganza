import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { serverApiJsonPost } from "../../api/API.jsx";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../../redux/user/userSlice.js";
import { ROUTE } from "../../AppRoute.jsx";
import { showAlert, ALERT } from "../../components/Alert.jsx";

const createField = (label, idField, type, placeholder, valuePtr, onChange, isError, errorMessage) => {
  return (
    <div>
      <label htmlFor={idField} className={`block mb-2 text-sm font-medium ${isError ? 'text-red-600' : 'text-gray-900 dark:text-white'}`}>
        {label}
      </label>
      <input 
        type={type} 
        name={idField}
        id={idField}
        className={`bg-gray-50 border ${isError ? 'border-red-600' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder} 
        value={valuePtr}
        onChange={onChange}
      />
      {isError && <p className="text-red-600 text-sm mt-1">{errorMessage}</p>}
    </div>
  )
}

function loginButton (handleSubmit, isLoading){
  return (
    <button
      id="loginButton"
      onClick={handleSubmit}
      type="button"
      className={`duration-300 hover:-translate-y-1 transition ease-in-out delay-150 flex w-full justify-center rounded-md bg-gray-800 hover:bg-gray-900 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm disabled:opacity-80 ${isLoading? 'disabled' : ''}`}
    >
      {isLoading? 'Wait...' : 'Login'}
    </button>
  )
}

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState({
    error: false,
    message: ''
  });
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: ''
  });
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user || {});
  const navigate = useNavigate();

  // Handle Enter key press on email or password field
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      document.getElementById("loginButton").click();
    }
  };

  // Form Validation
  const validateForm = () => {
    let isValid = true;
    if (!password){
      setPasswordError({
        error: true,
        message: 'Password is empty!'
      });
      isValid = false;
    }
    if (!email){
      setEmailError({
        error: true,
        message: 'Email is empty!'
      });
      isValid = false;
    }
    return isValid;
  };

  // Handle Form Submission
  const handleSubmit = async () => {
    try {
      const localError = 'Invalid email or password, try again.';
      if (!validateForm()) return;
      dispatch(signInStart());
      const response = await (await serverApiJsonPost('/user/login', {
        email: email,
        password: password
      })).json();
      if (response.status) {
        dispatch(signInSuccess(response.data.user));
        navigate(ROUTE.homepage);
        return;
      } else {
        showAlert(ALERT.WARNING, 'Network Error', '404 Not Found. Connection error(?)');
      }
      dispatch(signInFailure('Invalid email or password, try again.'));
      showAlert(ALERT.FAIL, 'Login Failed', localError);
      return;
    } catch (x) {
      dispatch(signInFailure('Failed when communicate to server'));
      showAlert(ALERT.FAIL, 'Network Error');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div id="form" className="font-inter flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Link to={'/'} className="transition ease-in-out duration-300 flex hover:-translate-x-2 items-center font-bold text-sm">
              <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
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
              <div onKeyDown={handleKeyDown}>
                {createField('Email', 'email', 'email', 'user@email.com', email, (e) => {
                  setEmail(e.target.value);
                  if (emailError.error === true){
                    setEmailError({
                      error: false,
                      message: ''
                    });
                  }
                }, emailError.error, emailError.message)}
              </div>
              <div onKeyDown={handleKeyDown}>
                {createField('Password', 'password', 'password', '••••••••', password, (e) => {
                  setPassword(e.target.value);
                  if (passwordError.error === true){
                    setPasswordError({
                      error: false,
                      message: ''
                    });
                  }
                }, passwordError.error, passwordError.message)}
              </div>
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
                <div className="py-2">
                  {loginButton(handleSubmit, loading)}
                </div>
                {/* <p className="text-center text-sm">atau</p>
                <button
                  type="button"
                  onClick={handleGoogleAuth}
                  className="text-black duration-300 hover:-translate-y-1 transition ease-in-out delay-150 flex w-full justify-center rounded-md border bg-transparent hover:bg-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm "
                >
                  <img src={GoogleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
                  Login dengan Google
                </button> */}
              </div>
              <div className="text-sm font-light text-gray-800">
                <p>
                  Belum memiliki akun? <a href={ROUTE.user.signup} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrasi</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
