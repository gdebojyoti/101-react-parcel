import pagewrap from "../core/pagewrap"

import { useParams } from "react-router"

const Restaurant = () => {
  const { id, name } = useParams()
  return (
    <div>
      Welcome to <strong>{name}</strong>! The best restaurant in town.
      <br />
      We have a rank of <strong>{id}</strong>.
    </div>
  )
}

export default pagewrap(Restaurant)