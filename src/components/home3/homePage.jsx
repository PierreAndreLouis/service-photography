import React from 'react'
import Hero38 from './Hero38'
import Service7 from './Service7'
import Service4 from './Service4'
import Company1 from './Company1'
import Gallery5 from './Gallery5'
import Testimonial4 from './Testimonial4'
import Pricing2 from './Pricing2'
// import Footer5 from './Footer5'
import Contact5 from './Contact5'
import CTA12 from './CTA12'
import Statistic4 from '../about/Statistic4'
import Product from './Product'
import CTA10 from './CTA10'
import Blog from './Blog'
import Faq5 from './Faq5'

export default function homePage() {
    return (
        <div>
            <Hero38 />
            <Service7 />
            
            <Service4 />
            <Statistic4 />
            <CTA12 />
            <Faq5 />
            <Gallery5 />
            <Company1 />
            <Product grid={ true} />
            <CTA10 />
            <Testimonial4 />
            <Pricing2 />
            <Blog />
            <Contact5 />
            {/* <Footer5 /> */}

        </div>
    )
}
