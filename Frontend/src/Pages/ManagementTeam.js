import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "../Components/Common/Heading";
import Subheading from "../Components/Common/Subheading";
import AboutPageText from "./AboutPageText";
import { Fieldset } from "primereact/fieldset";

import Expert from "../Components/Expert";

export const ManagementTeam = (props) => {
  return (
    <>
      <div className="aboutpage">
        <Container>
          <Subheading subheading="OUR COMPANY" />
          <Heading heading="Management Team" />

          <Expert />
        </Container>
      </div>
    </>
  );
};

export default ManagementTeam;
