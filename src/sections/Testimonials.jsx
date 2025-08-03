import React from 'react'
import { testimonials } from '../constants/index.js'
import TitleHeader from '../components/TitleHeader.jsx'
import GlowCards from '../components/GlowCard.jsx'

const Testimonials = () => {
    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="What People Say About Me?"
                    sub="⭐ Client Feedback Highlights ⭐" 
                />
            <div className="lg:column-3 md:column-2 column-1  mt-16">
                {testimonials.map((testimonial) => (
                    <GlowCards card={testimonial}>
                        <div className="flex items-center gap-3"></div>
                        test
                    </GlowCards>    
                ))}
                </div>
            </div>
        </section>
    )
}
 
export default Testimonials
