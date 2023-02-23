import React from 'react'
import Footer from '../footer/Footer'
import Companies from './companies/Companies'
import './page.css'
import Pagetours from './pagetours/Pagetours'
import Places from './places/Places'
import Popularguides from './popularguides/Popularguides'
import Services from './services/Services'
import Carousel from 'react-bootstrap/Carousel';
import { images } from '../../constants'
const Page = () => {
  return (
    <>
      <div className="home">
        <div className="banner">
        <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={images.travel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={images.travel2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={images.travel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={images.travel4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <Services/>
        <div className="container">
          <Companies/>
          <Popularguides/>
          <Pagetours/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Page