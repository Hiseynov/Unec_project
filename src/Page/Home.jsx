import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { dates } from '../data/data'

function Home() {
  // const [PropsData,setPropsData] = useState("")
  // const [PostData,setPostData] = useState(false)
  return (
    <>
      <section id='HomePhoto'>
        <div className="HomePhoto-container">
          <div className="HomePhoto-container-word">
            <h3>Custom packaging solutions for your business needs</h3>
            <p>Stand out from the competition with our customizable packaging options. Enhance your brand image and attract more customers.</p>
            <p className='HomeLink'><button className='SifarisEt'>SİFARİŞ ET</button> <button className='searchProduct'>SEARCH PRODUCTS</button></p>
          </div>
          <div className="HomePhoto-container-img">
            <img src='src\img\Home_box.png' alt="" />
          </div>
        </div>
      </section>
      <section id='Discover'>
        <div className="Discover-container">
          <div className="Discover-container-word">
            <h3>Discover Our Wide Range of Packaging Products</h3>
            <p>We offer a diverse selection of packaging products, including napkins, food containers, and more. Customize your packaging to match your product type, color, and design, and add your own logo for a personalized touch. </p>
            <p className='HomeLink'><button className='SifarisEt'>Learn More</button> <button className='searchProduct'>Sign Up</button></p>
          </div>
          <div className="Discover-container-img">
            <img src="src\img\Home_box.png" alt="" />
          </div>
        </div>
      </section>
      <section id='Started'>
        <div className="Started-container">
          <div className="Started-logo">
            <h3>Get Started</h3>
          </div>
          <div className="Started-category">
            <ul>
              <li>
                <div className="Started-categories-icon">
                <i className="fa-solid fa-boxes-packing"></i>
                </div>
                <div className="Started-categories-word">
                  <h3>Choose your product</h3>
                  <p>Browse our wide selection of packaging products and find the perfect fit for your needs.</p>
                </div>
              </li>
              <li>
                <div className="Started-categories-icon">
                <i class="fa-solid fa-pen"></i>
                </div>
                <div className="Started-categories-word">
                  <h3>Add your logo and design</h3>
                  <p>Make your packaging unique by uploading your logo and customizing the design to match your brand.</p>
                </div>
              </li>
              <li>
                <div className="Started-categories-icon">
                <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="Started-categories-word">
                  <h3>Place your order</h3>
                  <p>Review your custom packaging details and place your order with confidence.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id='Partners'>
        <div className="Partners-container">
          <div className="Partners-container-logo">
            <h3>Our Partners</h3>
          </div>
          <div className="Partners-container-categories">
            <ul>
              <li><img src="src\img\Partners.jpg" alt="Partners" /></li>
              <li><img src="src\img\Partners.jpg" alt="Partners" /></li>
              <li><img src="src\img\Partners.jpg" alt="Partners" /></li>
              <li><img src="src\img\Partners.jpg" alt="Partners" /></li>
              <li><img src="src\img\Partners.jpg" alt="Partners" /></li>
            </ul>
          </div>
        </div>
      </section>
      <section id='News'>
        <div className="News-container">
          <div className="News-container-logo">
            <h3>News</h3>
            <Link to={'Blog'}><p>Hamısına baxın <i className="fa-solid fa-arrow-right"></i></p></Link>
          </div>
          <div className="News-container-categories">
            {
            dates.slice(0,4).map((date,index)=>(
              <Link key={index} to={`Blog/${date.id}`} className="News-item">
              <div className="News-item-img">
                <img src={date.url}alt="News" />
              </div>
              <div className="News-item-word">
                <h3>{date.logo}</h3>
                <p>{date.text}</p>
                <span>{date.data}</span>
              </div>
              
            </Link>
            ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Home