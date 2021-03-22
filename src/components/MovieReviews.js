// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({ index, title, headline, imageSource }) => {

  return(
    <div key={ index }>
      {/* <h1> { title } </h1> */}
      <h3> { headline } </h3>
      <img src={ imageSource} />
    </div>
  )

}



export default MovieReviews