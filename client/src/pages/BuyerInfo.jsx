import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CustomInput
} from "reactstrap";

import { AppContext } from "../App";

function BuyerInfo() {
  const context = useContext(AppContext);
  async function onClick() {
    let res = await fetch("/api/users/getGeoLocation", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ address: "65 Misty Meadow Dr" })
    });
    res
      .json()
      .then(result => {
        context.userGeoLocation.set(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const [isStoreOwner, setIsStoreOwner] = useState(false);
  const [typeOfGoodsSold, setTypeOfGoodSold] = useState("");
  const [buyerFirstName, setBuyerFirstName] = useState("");
  const [buyerLastName, setBuyerLastName] = useState("");
  const [storeAddressNum, setStoreAddressNum] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [storeCity, setStoreCity] = useState("false");
  const [storeProvince, setStoreProvince] = useState("");
  const [storeCountry, setStoreCountry] = useState("");
  const [storePostal, setStorePostal] = useState("");

  return (
    <Container>
      <Form
        style={{
          marginTop: "50px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          leftPadding: "5%"
          // justifyContent: "space-evenly"
        }}
      >
        <div>
          <h2>Tell us about yourself</h2>
          <p>
            The basic information we will need to help set up your buyer
            profile.
          </p>
        </div>
        <Row>
          <Col xs="4">
            <FormGroup>
              <Label style={{ fontSize: "0.9rem" }} for="fname">
                First name
              </Label>
              <Input
                type="text"
                name="fname"
                id="fname"
                placeholder="First name"
                onChange={e => setBuyerFirstName(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col xs="4">
            <FormGroup>
              <Label style={{ fontSize: "0.9rem" }} for="lname">
                Last Name
              </Label>
              <Input
                type="text"
                name="lname"
                id="lname"
                placeholder="Last Name"
                onChange={e => setBuyerLastName(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs="2">
            <FormGroup>
              <Label style={{ fontSize: "0.9rem" }} for="storeAddressNum">
                Street number
              </Label>
              <Input
                type="text"
                name="storeAddressNum"
                id="storeAddressNum"
                placeholder="Ex. 123"
                onChange={e => setStoreAddressNum(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col xs="5">
            <FormGroup>
              <Label style={{ fontSize: "0.9rem" }} for="storeAddress">
                Business street address
              </Label>
              <Input
                type="text"
                name="storeAddress"
                id="storeAddress"
                placeholder="Ex. Main St"
                onChange={e => setStoreAddress(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col xs="5">
            <FormGroup>
              <Label style={{ fontSize: "0.9rem" }} for="storeCity">
                Business City
              </Label>
              <Input
                type="text"
                name="storeCity"
                id="storeCity"
                placeholder="Ex. Toronto"
                onChange={e => setStoreCity(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs="4">
            <FormGroup>
              <Label style={{ fontSize: "0.9rem" }} for="storeProvince">
                Business Province
              </Label>
              <CustomInput
                type="select"
                name="storeProvince"
                id="storeProvince"
                placeholder="Ex. Ontario"
                onChange={e => setStoreProvince(e.target.value)}
              >
                <option value="">--Select--</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NS">Nova Scotia</option>
                <option value="ON">Ontario</option>
                <option value="PE">Prince Edward Island</option>
                <option value="QC">Quebec</option>
                <option value="SK">Saskatchewan</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
                <option value="YT">Yukon</option>
              </CustomInput>
            </FormGroup>
          </Col>
          <Col xs="4">
            <FormGroup>
              <Label style={{ fontSize: "0.9rem" }} for="storeCountry">
                Business Country
              </Label>
              <CustomInput
                type="select"
                name="storeCountry"
                id="storeCountry"
                placeholder="Ex. Canada"
                onChange={e => setStoreCountry(e.target.value)}
              >
                <option value="">--Select--</option>
                <option value="CA">Canada</option>
              </CustomInput>
            </FormGroup>
          </Col>
          <Col xs="4">
            <FormGroup>
              <Label style={{ fontSize: "0.9rem" }} for="storePostal">
                Business Postal Code
              </Label>
              <Input
                type="text"
                name="storePostal"
                id="storePostal"
                placeholder="Ex. A1A 1A1"
                onChange={e => setStorePostal(e.target.value)}
              ></Input>
            </FormGroup>
          </Col>
        </Row>

        <FormGroup check row>
          <Col sm={{ size: 10, offset: 10 }}>
            <Button
              onClick={() => onClick()}
              style={{
                width: "100px",
                backgroundColor: "#185287"
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "white"
                }}
                to="/Storefront"
              >
                Next
              </Link>
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
}

export default BuyerInfo;
