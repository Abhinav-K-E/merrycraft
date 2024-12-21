import React from 'react'
import './Contact.scss'
import VEHI from '../../assets/images/vehicle.svg'
const Contact = () => {
  return (
    <div className="contact-sec">
        <div className="contact-head">
            Contact Us
        </div>
        <img className="contact-img" src={VEHI} />
    </div>
  )
}

export default Contact