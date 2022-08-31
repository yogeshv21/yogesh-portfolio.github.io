import React from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constents'
import {urlFor, client} from '../../client'
import { useState, useEffect } from 'react'
import AppWrap from '../../weaper/AppWrap'

import './About.scss'

const About = () => {
 
  const [abouts, setAbouts] = useState([]);

  useEffect(()=>{
    const query = '*[_type == "abouts"]'

    client.fetch(query)
    .then((data) => {
         setAbouts(data)
    })
  }, [])

  return (
    <>
      <h2 className='head-text'>
        I know that 
        <span> Good Design</span> <br/>
        means
        <span> Good Business </span>
      </h2> 

      <div className='app_profiles'>
         {
          abouts.map((about, index)=>{
            return(
               <motion.div
                 whileInView={{opacity: 1}}
                 whileHover={{scale: 1.1}}
                 transition={{duration: 0.6, type: 'tween'}}
                 className='app_profile-item'
                 key={about.title + index}
               >
                 <img src={urlFor(about.imgUrl)} alt={about.title} />
                 <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
                 <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
               </motion.div>
            )
          })
         }
      </div>
    </>
  )
}

export default AppWrap(About, 'about')
