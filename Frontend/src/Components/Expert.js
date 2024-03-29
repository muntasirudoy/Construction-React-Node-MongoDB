import { Row, Col } from "antd";
import React from "react";
import person1 from "../Images/person1.jpg";
import person2 from "../Images/person2.jpg";
import person3 from "../Images/person3.jpg";
import person4 from "../Images/person4.jpg";
import "./expert.css";

import {
  FacebookFilled,
  TwitterSquareFilled,
  WechatFilled,
  GooglePlusSquareFilled,
} from "@ant-design/icons";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { Fieldset } from "primereact/fieldset";
import AboutPageText from "../Pages/AboutPageText";
import man from "./man.jpg";
const Expert = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState("center");
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  return (
    <>
      <div className="expert">
        <div className="container">
          <Row className="all-carde" gutter={[32, 32]}>
            <Col span={6}>
              <div className="carde">
                <div className="imagee">
                  {" "}
                  <img src={person1} />
                </div>
                <h3 onClick={() => onClick("displayBasic")}>MR.Kuddus Ali</h3>
                <p>Assistant Director</p>
                <div className="iconse">
                  {" "}
                  <FacebookFilled />
                  <TwitterSquareFilled />
                  <WechatFilled />
                  <GooglePlusSquareFilled />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="carde">
                <div className="imagee">
                  {" "}
                  <img src={person2} />
                </div>
                <h3>MR.Kuddus Ali</h3>
                <p>Assistant Director</p>
                <div className="iconse">
                  {" "}
                  <FacebookFilled />
                  <TwitterSquareFilled />
                  <WechatFilled />
                  <GooglePlusSquareFilled />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="carde">
                <div className="imagee">
                  {" "}
                  <img src={person3} />
                </div>
                <h3>MR.Kuddus Ali</h3>
                <p>Assistant Director</p>
                <div className="iconse">
                  {" "}
                  <FacebookFilled />
                  <TwitterSquareFilled />
                  <WechatFilled />
                  <GooglePlusSquareFilled />
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="carde">
                <div className="imagee">
                  {" "}
                  <img src={person4} />
                </div>
                <h3>MR.Kuddus Ali</h3>
                <p>Assistant Director</p>
                <div className="iconse">
                  {" "}
                  <FacebookFilled />
                  <TwitterSquareFilled />
                  <WechatFilled />
                  <GooglePlusSquareFilled />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Dialog
        visible={displayBasic}
        style={{ width: "80vw" }}
        onHide={() => onHide("displayBasic")}
      >
        <Fieldset legend="Managin Director">
          <AboutPageText
            designation="Engr. Md. Abdul Awal"
            img={man}
            details="The Founder and the Managing Director of The Structural Engineers Ltd., Engr. Md. Abdul Awal,
                      was born in 1954. He graduated from the Civil Engineering department of BUET in 1977. In the same year, he joined M/S 
                      Rana Construction Co. Ltd. as Asst. Engineer. He also worked with M/S Bangladesh Consultant Ltd. (BCL), the local consultant 
                      for the Jamuna Bridge Project, as a Project Engineer from January 1978 till September 1981.
                      He traveled abroad to augment his experience in his chosen profession. As a field Engineer in Baghdad (Iraq), he joined a Japanese firm named New 
                      Japan Engineering and Service Corp. Being impressed by Japanese Management techniques, he decided to emulate these techniques and propagate the 
                      standards in Bangladesh in order to improve the professionalism of Bangladeshi professionals."
          />
        </Fieldset>
      </Dialog>
    </>
  );
};

export default Expert;
