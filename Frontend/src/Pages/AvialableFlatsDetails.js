import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Tr from "../Components/Common/Tr";
import { Tag } from "primereact/tag";

function reducer(state, action) {
  switch (action.type) {
    case "FATCH-REQ":
      return { ...state, loading: true };
    case "FATCH-SUC":
      return { ...state, loading: false, flatdata: action.payload };
    case "FATCH-ERR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const AvialableFlatsDetails = () => {
  let params = useParams();
  const [{ loading, flatdata, error }, dispatch] = useReducer(reducer, {
    loading: false,
    flatdata: {},
    error: "",
  });

  useEffect(async () => {
    dispatch({ type: "FATCH-REQ" });
    try {
      let flatdata = await axios.get(
        `http://localhost:8000/avilableflats/${params.slug}`
      );
      dispatch({ type: "FATCH-SUC", loading: false, payload: flatdata.data });
    } catch (err) {
      dispatch({ type: "FATCH-ERR", loading: false, payload: err.message });
    }
  }, []);

  console.log(flatdata);
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="flatsdetails">
      <Container>
        <Row>
          <Col lg={5} sm={12} md={5}>
            <div className="image">
              <img src={flatdata.img} alt="building" />
              <div className="image-gallary"></div>
            </div>
          </Col>
          <Col lg={7} sm={12} md={7}>
            <p style={{ margin: "0", color: "#957B5F" }}>{flatdata.location}</p>
            <h1 style={{ fontWeight: "700", color: "#957B5F" }}>
              {flatdata.ProjectName}
            </h1>
            <p
              style={{ marginTop: "20px", color: "#353535", fontSize: "14px" }}
            >
              {flatdata.description}
            </p>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Description</th>
                  </tr>
                </thead>

                <tbody>
                  <Tr left="Location" right={flatdata.location} />
                  <Tr left="Address" right={flatdata.address} />
                  <Tr left="Land Area" right={flatdata.landarea} />
                  <Tr left="Project Type" right={flatdata.projecttype} />
                  <Tr
                    left="Number of Building Blocks"
                    right={flatdata.nbuildblock}
                  />
                  <Tr left="Flat Size" right={flatdata.flatsize} />
                  <Tr left="Number of Floor" right={flatdata.nfloor} />
                  <Tr left="Launch Date" right={flatdata.launch} />
                  <Tr
                    left="RAJUK Approval Date"
                    right={flatdata.rapprovaldate}
                  />
                  <Tr left="Rajuk Approval No" right={flatdata.rapprovalno} />
                  <Tr
                    left="Status"
                    right={
                      <Tag
                        style={{ background: "grey" }}
                        value={flatdata.status}
                      ></Tag>
                    }
                  />
                </tbody>
              </table>
              <div className="available-info">
                <h4>Additional Information</h4>
                <Tag
                  style={{ background: "grey", cursor: "pointer" }}
                  value="Floor Plan"
                ></Tag>
                <Tag
                  style={{
                    background: "grey",
                    marginLeft: "20px",
                    cursor: "pointer",
                  }}
                  value="Present Status"
                ></Tag>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AvialableFlatsDetails;
