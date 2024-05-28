function ServerError() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <p>
        </p>
        <p className="text-center">
          <span className="font-inter-light text-lg">
            You are trying to connect to the server. But...
          </span>
          <br />
          <span className="text-3xl">
            <b>500</b> <span className="font-inter-light">Internal Server Error</span>
          </span>
        </p>
      </div>
    </>
  )
}

export default ServerError