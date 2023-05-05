import React from 'react'
import Title from './Title'
import { services } from '../data'
import Service from './service'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((link) => {
          return (
            <Service link={link} key={link.id} {...services}/>
          )
        })}
      </div>
    </section>
  )
}

export default Services