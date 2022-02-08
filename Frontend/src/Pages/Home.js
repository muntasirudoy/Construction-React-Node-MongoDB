import React from 'react'
import "./home.css"
import '../Components/Header/header.css'
import '../Components/Common/common.css'
import { Banner } from '../Components/Banner/Banner.js';
import {Category} from '../Components/Category/Category';
import { Details } from '../Components/Details/Details';
import About from '../Components/About/About'
export const Home = () => {
  return (
    <>
    <Banner />
    <Category />
    <About />
    <Details />
    </>
   
   
  )
}



export default Home
