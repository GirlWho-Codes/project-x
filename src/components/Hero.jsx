import React from 'react'
import '../styles.css'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Vector1 from '../assets/Vector1.png'
import Vector2 from '../assets/Vector2.png'
import Vector3 from '../assets/Vector3.png'
import Vector4 from '../assets/Vector4.png'
import bgImg from '../assets/bgImg.png'
import shape from '../assets/shape.png'
import shape2 from '../assets/shape2.png'

const Hero = () => {
  return (
    <div className='hero-card-container'>
        <div className='grey'>

        <div className='hero-card'>
          <div className='hero'></div>
            <h3 className='hero-text'> Freedom and ease from human resource challenges </h3><span className='a-span'><img src={shape} alt="" /></span> <span className='a-span2'><img src={shape2} alt="" /> </span>
            <p className='hero-p'>Your HR Process and Procedures is now a productive system. Put an end to the struggles and now recruit the best and quality talent for your business, onboard them in a seamless yet effective method, manage them for quality, efficiency and productivity, with a perfect exit plan through our ROME System.</p>
            <Link to='/chat'>
            <button className='star'>Get Started</button>
            </Link>
        </div>
        
        </div>
        <div className='card-style'>
            <p className='unique-text'>OUR UNIQUENESS</p>
           <div className='card-too'>
           <h2 className='unique-head'>With us you get best results!</h2>
            <div className='card-new'>
            <div className='my-card-new'>
            <div className="my-card">
              <div className='card-body'>
               <img src={Vector1} alt="" className='vector-img' />
                <div className='cardc'>
                <div className='blah'>
                <div className='my-card-text'>All-in-one</div>
                <div className='my-card-p'>
                All you need to manage the human resource cycle in your business with a system that works.
                </div>
                </div>
                </div>
              </div>
                </div>
             <div className="my-card">
              <div className='card-body'>
               <div className='cardc'>
               <img src={Vector2} alt=""  className='vector-img'/>
                <div className='blah'>
                <div className="my-card-text">Improve & Optimize</div>
                <div className='my-card-p'>
                It will help improve and optimize your HR process and procedures for efficiency and productivity.
                </div>
                </div>
               </div>
              </div>
             </div>
            </div>
             <div className='my-card-new'>
             <div  className="my-card">
              <div className='card-body'>
              <div className='cardc'>
              <img src={Vector3} alt=""  className='vector-img'/>
               <div className='blah'>
               <div className="my-card-text">Facilitate growth</div>
                <div className='my-card-p'>
                Spend less time managing and more time growing your business without the hassle of human capital.
                </div>
               </div>
              </div>
              </div>
             </div>
             <div  className="my-card">
              <div className='card-body'>
               <div className='cardc'>
               <img src={Vector4} alt="" className='vector-img'/>
                <div className='blah'>
                <div className='my-card-text'>Do it yourself</div>
                <div className='my-card-p'>
                Our system offers everything you need to be the hero in your business even if you do not have an HRM.
                </div>
                </div>
               </div>
              </div>
             </div>

             </div>
            </div>
           </div>
          </div>
    </div>
  )
}

export default Hero