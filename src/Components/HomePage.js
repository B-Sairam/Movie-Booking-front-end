import React from 'react'
import Header from '../miniComponents/Header';
import {  Carousel } from 'react-bootstrap';
import { DataState } from '../context/Provider';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  let navigate = useNavigate()
  const {movies}=DataState();
  const clickHandler=(val)=>{
   
   navigate('/details/'+val._id)
  }
  return <>
  <Header/> 
           <div>
           <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1645432040233_web.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1648060359095_iplweebb.jpg"
                alt="Second slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1647796052601_mkt_rrr_1240x300.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
           </div>
           <div className='text'>
           <h1>Recommended Movies</h1>
           </div>
          
           <div className='search-items'>
           {  movies.map((e,i)=>{
                 return <div key={e._id} className="main-cards" onClick={()=>clickHandler(e)}>
                  
                       <div className="card mb-3">
                        <img src={e.poster} className="card-img-top" alt="...poster"/>
                        <div className="card-body">
                            <h5 className="card-title">{e.movieName}</h5>
                            <p className="card-text">{e.type}<span className='heart'><i className="fa-solid fa-heart"></i>&nbsp;{e.like}%</span></p>
                            <p className="card-text"><small className="text-muted">{e.language}</small>
                            
                            </p>
                        </div>
                        </div> 
                      
                       
                    </div> })
            }
           </div>
  </>
}

export default HomePage