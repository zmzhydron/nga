import React from "react"
import Carconnect from "./car.js"

export default Components => props => {
  return (
    <Carconnect.Consumer>
        {
          objs => <Components {...props} cars={objs} />
        }
    </Carconnect.Consumer>
  )
}