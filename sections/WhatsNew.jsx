'use client';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn , staggerContainer , planetVariants } from '../utils/motion';
import { NewFeatures, StartSteps , TitleText , TypingText } from '../components';
import { newFeatures, startingFeatures } from "../constants";



const WhatsNew = () => {
  return (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{once: true , amount: 0.25}}
  className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col
  gap-8
  `}
  >
 
  <motion.div
  variants={fadeIn('left' , 'tween' , 0.2 , 1)}
  initial="hidden"
  whileInView="show"
  viewport={{ once:false , amount: 0.25 }}
  className="flex-[0.75] flex justify-center flex-col"
  >
   <TypingText title="`| What's New" />
   <TitleText title={<>
   What's New about Metaversus
   </>} />
  
   <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
   {
   newFeatures.map((feature , index) => (
   <NewFeatures
   key={feature.title}
   {...feature}
   />
   ))
   }
   </div>
   

  </motion.div>

  <motion.div
  variants={planetVariants('right')}
  initial="hidden"
  whileInView="show"
  className={`flex-1 ${styles.flexCenter}`}
  >
  <motion.img
  variants={fadeIn('up')}
  src="/whats-new.png" alt="whats-new"
  className="w-[90%] h-[90%] object-contain"
  />

  </motion.div> 



  </motion.div>
   
  </section>
  
    )
}

export default WhatsNew
