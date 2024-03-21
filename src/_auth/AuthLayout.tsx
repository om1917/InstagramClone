import { Outlet, Navigate } from "react-router-dom"

function AuthLayout() {
  const isAutheticated = false;

  return (
    <>
      {
        isAutheticated ? (
          <Navigate to={"/"} />
        ) : (
          <>
            <section className="flex flex-1 justify-center items-center flex-col py-10">
                <Outlet/>
            </section>
            <img />
          </>
        )
      }
    </>
  )
}

export default AuthLayout