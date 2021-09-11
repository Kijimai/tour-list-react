import React, { useState } from "react"

const Tour = ({ id, image, name, info, price, removeTour }) => {
  const [isTruncated, setIsTruncated] = useState(true)
  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">
            <h4>${price}</h4>
          </div>
        </div>
        <p>
          {isTruncated ? `${info.substring(0, 200)}...` : info}
          <button onClick={() => setIsTruncated(!isTruncated)}>
            {isTruncated ? "Read More" : "Show Less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
