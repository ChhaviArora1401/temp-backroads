import React from 'react'
import { services } from '../data'

const Service = (props) => {
    return (
        <article className="service" key={props.link.id}>
            <span className="service-icon"><i className={props.link.icon}></i></span>
            <div className="service-info">
                <h4 className="service-title">{props.link.title}</h4>
                <p className="service-text">
                    {props.link.text}
                </p>
            </div>
        </article>
    )
}

export default Service