import { useRouteError } from "react-router-dom"
const Error = () => {
  const err = useRouteError();
//   console.log(err)
  return (
    <div className="flex h-full  w-full justify-center items-center">
        <div className="w-1/2  h-[300px]  flex flex-col items-center justify-center px-8 py-6   ">
        <h1 className="text-4xl text-orange-500 py-4 ">Oops !!! {err.status}</h1>
    <h2 className="py-2 text-xl text-black ">Page {err.statusText}😐😐😐😐😐</h2>
    </div>
    </div>
  )
}

export default Error