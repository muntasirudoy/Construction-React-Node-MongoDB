import React,{useEffect, useState,useReducer} from "react"
import AvialableFlatsText from "./AvialableFlatsText"
import {Container,Row, Col} from 'react-bootstrap';
import { PanelMenu } from 'primereact/panelmenu';
import AvailableData from './AvailableData'
import { Chip } from 'primereact/chip';
import Card from '../Components/Category/card'
import b1 from './b1.jpg'
import axios from "axios";
import { Link } from "react-router-dom";


function reducer(state, action) {
  switch (action.type) {
    case 'FATCH_REQ':
      return {...state,loading:true};
    case 'FATCH_SUC':
      return {...state,loading:false,pdata:action.payload};
    case 'FATCH_ERR':
        return {...state,loading:false,err:action.payload};
    default:
      return state;
  }
}



export const AvialableFlats = () => {

  

  const [{pdata,loading,err}, dispatch] = useReducer(reducer, {
    loading:false,
    pdata:[],
    err:''
  });


  useEffect(async() => { 
    dispatch({type:'FATCH_REQ'})
      try{
        let products = await axios.get("http://localhost:8000/avilableflats")
        dispatch({type:'FATCH_SUC',payload:products.data})
      
      }
      catch(err){
        dispatch({type:'FATCH_ERR',payload:err.message})
      }
  
  },[]);




    return (
     
        <div className='avialableflats'>
        <Container>
              <AvialableFlatsText />
             <Row>
                 <Col lg={3} md={3} sm={12}>
                 <Chip label="Filter by location" icon="pi pi-map" width="100%" className="mr-2 mb-2 py-2 px-4" />
                 <PanelMenu model={AvailableData} style={{width:'300px'}}/>
                
                 </Col>
                 <Col lg={9} md={9} sm={12}>
                     <Row >
                     {pdata.map(data=>(
                           <Col lg={4} md={4} sm={12}>
                              <div className="avialablecard" >
                                <Link to={data.slug}><Card img={data.img} title={data.ProjectName}  /></Link>
                              </div>
                           </Col>
                     ))}

                     
                     </Row>
                 </Col>

             </Row>
        </Container>
</div>
    )
}
export default AvialableFlats