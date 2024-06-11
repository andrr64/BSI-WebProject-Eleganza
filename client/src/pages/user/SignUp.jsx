import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import { serverApiJsonPost } from "../../api/API";
import Swal from "sweetalert2";
import { ROUTE } from "../../AppRoute";
``
const buatField = (label, idField, type, placeholder, onChange, isError, errorText, callback = undefined) => {
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
        onChange={(e) => {
          onChange(e);
          if (callback !== undefined){
            callback();
          }
        }}
      />
      {isError && <p className="text-red-600 text-sm mt-1">{errorText}</p>}
    </div>
  )
}

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }
  const validateForm = () => {
    let isValid = true;
    // Validasi Nama
    if (!formData.name) {
      setNameError(true);
      setNameErrorMsg('Nama tidak boleh kosong!');
      isValid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      setNameError(true);
      setNameErrorMsg('Nama tidak boleh mengandung simbol atau angka!');
      isValid = false;
    }
    
    // Validasi email
    if (!formData.email){
      setEmailError(true);
      setEmailErrorMsg('Email tidak boleh kosong');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setEmailError(true);
      setEmailErrorMsg('Masukkan alamat email yang valid!');
      isValid = false;
    }

    // Validasi Password
    if (!formData.password || formData.password.length < 8) {
      setPasswordError(true);
      setPasswordErrorMsg('Password harus memiliki minimal 8 karakter!');
      isValid = false;
    }
  
    return isValid;
  };
  const handleSubmit = async () => {
    if (!validateForm()) return;
    setFormData({ ...formData, picture: null });
    try {
      const res = await serverApiJsonPost('/user/create', formData);
      const responseJson = await res.json();
      if (responseJson.status){
        Swal.fire({
          title: 'Success',
          text: 'Account created successfully!',
          icon: "success",
          confirmButtonColor: "green"
        }).then(() => {
          navigate(ROUTE.user.profile);
        });
        return;
      } else {
        throw new Error(responseJson.data);
      }
    } catch (error) {
      Swal.fire({
        title: 'FAILED',
        text: error.message.toUpperCase(),
        icon: "error",
        confirmButtonColor: "black"
      })
    }
  }

  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="font-inter flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <button 
              onClick={() => navigate(-1)} 
              className="transition ease-in-out duration-300 flex hover:-translate-x-2 items-center font-bold text-sm"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
              <p>Kembali</p>
            </button>
            <div>
              <h1 className="my-12 font-laBelle text-center text-5xl">
                Eleganza
              </h1>
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Registrasi Akun
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              {buatField('Nama','name', 'text', 'Nama Lengkap', handleChange, nameError, nameErrorMsg, () => setNameError(false))}
              {buatField('Email', 'email', 'email', 'contoh@email.com', handleChange, emailError, emailErrorMsg, () => setEmailError(false))}
              {buatField('Password', 'password', 'password', '••••••••', handleChange, passwordError, passwordErrorMsg, () => setPasswordError(false))}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Sudah memiliki akun? <a href={ROUTE.user.signin} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Masuk</a>
              </p>
              <div className="py-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="duration-300 hover:-translate-y-1 transition ease-in-out delay-150 flex w-full justify-center rounded-md bg-gray-800 hover:bg-gray-900 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span className="my-1">Buat Akun</span>
                </button>
              </div>
                {/* <p className="text-center text-sm">atau</p>
              <button
                  type="button"
                  className="text-black duration-300 hover:-translate-y-1 transition ease-in-out delay-150 flex w-full justify-center rounded-md border bg-transparent hover:bg-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm "
                >
                  <img src={GoogleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
                  Daftar dengan Google
                </button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default SignUp;