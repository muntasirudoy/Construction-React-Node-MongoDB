import React from 'react'
import "./home.css"
import '../Components/Header/header.css'
import '../Components/Common/common.css'
import { Banner } from '../Components/Banner/Banner.js';
import {Category} from '../Components/Category/Category';
import { Details } from '../Components/Details/Details';
import About from '../Components/About/About'
import Chooseus from '../Components/Chooseus';
import Expert from '../Components/Expert';
import Trusted from '../Components/Trusted'
export const Home = () => {
  return (
    <>
    <Banner />
    <Category />
    <About />
    <Chooseus />
    <Expert />
    <Details />
    <Trusted />
    </>
   
   
  )
}



export default Home
