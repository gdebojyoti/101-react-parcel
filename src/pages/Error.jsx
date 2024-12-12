import { useRouteError } from "react-router"

const Error = () => {
  const err = useRouteError()
  console.log(err)

  return (
    <div>
      {err.data}
    </div>
  )
}

export default Error