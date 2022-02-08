import axios from "axios";
import React, { useEffect,useReducer } from "react"
import {Container,Row, Col} from 'react-bootstrap';
import { useParams } from "react-router-dom";





function reducer(state, action) {
    switch (action.type) {
      case 'FATCH-REQ':
        return  {...state,loading:true} ;
      case 'FATCH-SUC':
        return {...state,loading:false,flatdata:action.payload};
      case 'FATCH-ERR':
        return {...state,loading:false,error:action.payload};
      default:
        return state
    }
  }




export const AvialableFlatsDetails = () => {

let params = useParams()
const [{loading,flatdata,error}, dispatch] = useReducer(reducer, {
    loading:false,
    flatdata:{},
    error:''
});

useEffect( async()=>{
    dispatch({type:"FATCH-REQ"})
       try{
        let flatdata = await axios.get(`http://localhost:8000/avilableflats/${params.slug}`)
        dispatch({type:"FATCH-SUC",loading:false, payload:flatdata.data})
       }
      catch(err){
        dispatch({type:"FATCH-ERR",loading:false, payload:err.message})
        }

},[])


    return (
     <div className="flatsdetails">
         <Container>
                     <Row>
                         <Col lg={6} sm={12} md={6}>
                             img
                         </Col>
                         <Col lg={6} sm={12} md={6}>
                                {flatdata.ProjectName}
                             </Col>
                     </Row>
          


        </Container>
     </div>
                
    )
}
export default AvialableFlatsDetails