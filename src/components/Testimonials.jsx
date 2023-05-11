import React from 'react'
import { feedback } from "../constants"
import styles from '../style'
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => (
    <section id="clients" className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
      {/* to do, div for gradient effect on card*/}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

      {/* div containing title and context for testomonials with a z index of 1 so the text goes over the gradient*/}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z[1]">
        <h1 className={styles.heading2}>What people are <br className="sm:block hidden"/> saying about us</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>

      {/* div containing all the testimonial cards */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"> 
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>

    </section>
  )


export default Testimonials