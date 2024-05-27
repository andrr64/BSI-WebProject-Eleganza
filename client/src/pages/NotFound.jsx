import { useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigator = useNavigate();
    return (
      <div className='h-screen flex items-center justify-center'>
        <div className="mx-auto my-auto text-center">
          <p className="text-4xl font-bold">404</p>
          <p className="text-lg mt-4">Page not found</p>
            <button 
            className="my-4 hover:scale-105 transition bg-black text-white rounded-lg py-2 px-4"
            onClick={() => navigator('/')}>
                Back to home
            </button>
        </div>
      </div>
    )
  }
  