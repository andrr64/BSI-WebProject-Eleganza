import Content from "./Content";

export  default  function Page(is_loading, server_status, render_function){
    if (is_loading){
      return (
        <div className="my-20">
          x
        </div>
      )
    } 
    return <Content main={render_function()}/>;
  }