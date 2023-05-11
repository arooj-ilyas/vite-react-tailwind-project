import React from "react";
import {apple, bill, google} from "../assets"
import styles, {layout} from "../style"


const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    {/* divs for img's and background gradient in billing section */}
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
      {/* need to add the grey gradient on the sides to give the illusion of the images floating */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
    </div>

    {/* divs for text of billing section */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu andipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat</p>

      {/* div inside text section for google and apple store buttons */}
      <div className="flex flex-row flex-wrap sm:mg-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
         <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
      </div>
    </div>

  </section>
)

export default Billing;
