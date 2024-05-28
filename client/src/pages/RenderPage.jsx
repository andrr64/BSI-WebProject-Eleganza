import Content from "./Content";
import ServerError from "./ServerError";

export  default  function Page(loading, server_status, render_function){
  if (loading && server_status){
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        x
      </div>
    )
  } 

  else if (!server_status && !loading){
    return <ServerError/>;  
  }
  return <Content main={render_function()}/>;
}