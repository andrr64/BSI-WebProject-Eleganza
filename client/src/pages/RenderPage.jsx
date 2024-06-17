import Content from "./Content";
import ServerError from "./ServerError";
import loadingAnimation from "../assets/lotties/loading";

const _loadingAnimation = () => {
  // const lottie_loading_opt = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: loadingAnimation,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // }
  
  return (
    <div className="w-screen mt-5 h-screen flex items-center justify-center">
      {/* <div className="w-28 md:w-52">
        <Lottie options={lottie_loading_opt}/>
      </div> */}
    </div>
  )
}

export  default function Page(loading, server_status, render_function, nav, footer){
  if (!server_status)
    return <ServerError/>;  
  return <Content nav={nav} footer={footer && !loading} main={(loading && server_status? _loadingAnimation() : render_function())}/>;
}