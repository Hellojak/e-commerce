import React from 'react'
// import './DespcriptionBox.css'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that 
            facilitate 
            buing and selling of product or services over the internet
            servers as a virtual marketplace where businesses and individual
            showcase their products, interact iwth customers,
            and conduct transactions without the need for a physical presence. 
            E-commerce website have gained immense popularity, and the global reach they offer.

        </p>
        <p>
            E-commerce website typically display product or services
            as detailed description, images, prices, and anuy avialable
             variable (e.g., sizes, colors). Each product usually has its own
             dedicated with relavant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
