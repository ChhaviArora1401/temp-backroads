import React from 'react'

const Tour = (props) => {
  return (
    <article className="tour-card" key={props.t.id}>
          <div className="tour-img-container">
            <img src={props.t.img} className="tour-img" alt="" />
            <p className="tour-date">{props.t.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{props.t.title}</h4>
            </div>
            <p>
              {props.t.info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {props.t.location}
              </p>
              <p>{props.t.duration} days</p>
              <p>from ${props.t.cost}</p>
            </div>
          </div>
        </article>
  )
}

export default Tour