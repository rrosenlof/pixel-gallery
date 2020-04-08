import React from "react"

const Monument = ({ source, caption }) => {
  return <div class="monument">
    <Img src={source}/>
    <p>{caption}</p>
  </div>
}

export default Monument