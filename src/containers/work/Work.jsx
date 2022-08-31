import React from 'react'
import { AiFillEye, AiFillGithub} from 'react-icons/ai'
import { motion } from 'framer-motion'
import {client, urlFor} from '../../client'
import AppWrap from '../../weaper/AppWrap'
import './Work.scss'
import { useEffect, useState } from 'react'

const Work = () => {
  const [activeFilter, setactiveFilter] = useState('All')
  const [animateCard, setanimateCard] = useState({y: 0, opacity: 1});
  const [work, setwork] = useState([]);
  const [filterWork, setfilterWork] = useState([])

   useEffect(()=>{
    const query = '*[_type == "works"]'
    
    client.fetch(query)
      .then((data) =>{
         setwork(data);
         setfilterWork(data);
      })
   },[])
  const handelWorkFilter = ()=>{

  }
  return (
    <>
      <h2 className='head-text'>
        My Creative <span> Portfolio</span> Section
      </h2> 
      <div className='app__work-filter'>
         {[ 'All' ,'UI/UX', 'Web App', 'React js', 'Reacr Native'].map((item, index)=>{
          return(
            <div 
              key={index}
              onClick={()=> handelWorkFilter()}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          )
         })}
      </div>

      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__work-portfolio'
      >
        {filterWork.map((item, index)=>{
            return(
              <img src={urlFor(item.imgUrl)} alt={item.name} />

              // <div className='app__work-item app__flex' key={index}>
              //    <div className='app__work-img app__flex'>
              //    </div>
              // </div>
            )
        })}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'work')
