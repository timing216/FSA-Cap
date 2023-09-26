import { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Product } from "./Home";

interface CheckoutProps {
  cart: { items: Product[]; total: number };
}

const blacklistedCountries = [
  "AFG",
  "BLR",
  "ETH",
  "IRN",
  "IRQ",
  "LBN",
  "LBY",
  "MLI",
  "NIC",
  "RUS",
  "SDN",
  "SOM",
  "SYR",
  "ZWE",
];

const Checkout: React.FC<CheckoutProps> = ({ cart }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [countryError, setCountryError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    if (blacklistedCountries.includes(selectedCountry)) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [selectedCountry]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setCountryError(false);
    setStateError(false);

    if (!blacklistedCountries.includes(selectedCountry)) {
      // if the selected country is not blacklisted, proceed with the checkout.
      console.log("Proceeding with checkout...");
      navigate("/payment"); // Navigate to Payment.tsx
    } else {
      console.log("Cannot ship to this country.");
    }
    if (selectedCountry === "") setCountryError(true);
    if (selectedState === "") setStateError(true);
    if (selectedCountry === "" || selectedState === "") return;
  };

  return (
    <Container className="checkoutContainer">
      <Row>
        <Col md={8} className="leftContainer">
          <h1>Checkout</h1>
          <div className="cartTotal">
            Total: ${parseFloat(cart.total.toFixed(2))}
          </div>

          <Form onSubmit={handleFormSubmit}>
            <Form.Group>
              <Form.Label className="checkoutFormLabel">
                <Form.Label className="checkoutFormLabel">Country</Form.Label>
                <Form.Control
                  as="select"
                  className="checkoutInput"
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  <option value="AFG">Afghanistan</option>
                  <option value="AGO">Angola</option>
                  <option value="ALB">Albania</option>
                  <option value="ARE">United Arab Emirates</option>
                  <option value="ARG">Argentina</option>
                  <option value="ARM">Armenia</option>
                  <option value="ATG">Antigua and Barbuda</option>
                  <option value="AUS">Australia</option>
                  <option value="AUT">Austria</option>
                  <option value="AZE">Azerbaijan</option>
                  <option value="BDI">Burundi</option>
                  <option value="BEL">Belgium</option>
                  <option value="BEN">Benin</option>
                  <option value="BFA">Burkina Faso</option>
                  <option value="BGD">Bangladesh</option>
                  <option value="BGR">Bulgaria</option>
                  <option value="BHR">Bahrain</option>
                  <option value="BHS">Bahamas, The</option>
                  <option value="BIH">Bosnia and Herzegovina</option>
                  <option value="BLR">Belarus</option>
                  <option value="BLZ">Belize</option>
                  <option value="BOL">Bolivia</option>
                  <option value="BRA">Brazil</option>
                  <option value="BRB">Barbados</option>
                  <option value="BRN">Brunei Darussalam</option>
                  <option value="BTN">Bhutan</option>
                  <option value="BWA">Botswana</option>
                  <option value="CAF">Central African Republic</option>
                  <option value="CAN">Canada</option>
                  <option value="CHE">Switzerland</option>
                  <option value="CHL">Chile</option>
                  <option value="CHN">China</option>
                  <option value="CIV">Cote dfIvoire</option>
                  <option value="CMR">Cameroon</option>
                  <option value="COD">Congo, Democratic Republic of the</option>
                  <option value="COG">Congo, Republic of</option>
                  <option value="COL">Colombia</option>
                  <option value="COM">Comoros</option>
                  <option value="CPV">Cape Verde</option>
                  <option value="CRI">Costa Rica</option>
                  <option value="CYP">Cyprus</option>
                  <option value="CZE">Czech Republic</option>
                  <option value="DEU">Germany</option>
                  <option value="DJI">Djibouti</option>
                  <option value="DMA">Dominica</option>
                  <option value="DNK">Denmark</option>
                  <option value="DOM">Dominican Republic</option>
                  <option value="DZA">Algeria</option>
                  <option value="ECU">Ecuador</option>
                  <option value="EGY">Egypt</option>
                  <option value="ERI">Eritrea</option>
                  <option value="ESP">Spain</option>
                  <option value="EST">Estonia</option>
                  <option value="ETH">Ethiopia</option>
                  <option value="FIN">Finland</option>
                  <option value="FJI">Fiji</option>
                  <option value="FRA">France</option>
                  <option value="FSM">Micronesia, Federated States of</option>
                  <option value="GAB">Gabon</option>
                  <option value="GBR">United Kingdom</option>
                  <option value="GEO">Georgia</option>
                  <option value="GHA">Ghana</option>
                  <option value="GIN">Guinea</option>
                  <option value="GMB">Gambia, The</option>
                  <option value="GNB">Guinea-Bissau</option>
                  <option value="GNQ">Equatorial Guinea</option>
                  <option value="GRC">Greece</option>
                  <option value="GRD">Grenada</option>
                  <option value="GTM">Guatemala</option>
                  <option value="GUY">Guyana</option>
                  <option value="HKG">Hong Kong SAR</option>
                  <option value="HND">Honduras</option>
                  <option value="HRV">Croatia</option>
                  <option value="HTI">Haiti</option>
                  <option value="HUN">Hungary</option>
                  <option value="IDN">Indonesia</option>
                  <option value="IND">India</option>
                  <option value="IRL">Ireland</option>
                  <option value="IRN">Iran</option>
                  <option value="IRQ">Iraq</option>
                  <option value="ISL">Iceland</option>
                  <option value="ISR">Israel</option>
                  <option value="ITA">Italy</option>
                  <option value="JAM">Jamaica</option>
                  <option value="JOR">Jordan</option>
                  <option value="JPN">Japan</option>
                  <option value="KAZ">Kazakhstan</option>
                  <option value="KEN">Kenya</option>
                  <option value="KGZ">Kyrgyz Republic</option>
                  <option value="KHM">Cambodia</option>
                  <option value="KIR">Kiribati</option>
                  <option value="KNA">Saint Kitts and Nevis</option>
                  <option value="KOR">Korea</option>
                  <option value="KWT">Kuwait</option>
                  <option value="LAO">Lao P.D.R.</option>
                  <option value="LBN">Lebanon</option>
                  <option value="LBR">Liberia</option>
                  <option value="LBY">Libyan Arab Jamahiriya</option>
                  <option value="LCA">Saint Lucia</option>
                  <option value="LKA">Sri Lanka</option>
                  <option value="LSO">Lesotho</option>
                  <option value="LTU">Lithuania</option>
                  <option value="LUX">Luxembourg</option>
                  <option value="LVA">Latvia</option>
                  <option value="MAR">Morocco</option>
                  <option value="MDA">Moldova</option>
                  <option value="MDG">Madagascar</option>
                  <option value="MDV">Maldives</option>
                  <option value="MEX">Mexico</option>
                  <option value="MHL">Marshall Islands</option>
                  <option value="MKD">
                    Macedonia, former Yugoslav Republic of
                  </option>
                  <option value="MLI">Mali</option>
                  <option value="MLT">Malta</option>
                  <option value="MMR">Myanmar</option>
                  <option value="MNE">Montenegro</option>
                  <option value="MNG">Mongolia</option>
                  <option value="MOZ">Mozambique</option>
                  <option value="MRT">Mauritania</option>
                  <option value="MUS">Mauritius</option>
                  <option value="MWI">Malawi</option>
                  <option value="MYS">Malaysia</option>
                  <option value="NAM">Namibia</option>
                  <option value="NER">Niger</option>
                  <option value="NGA">Nigeria</option>
                  <option value="NIC">Nicaragua</option>
                  <option value="NLD">Netherlands</option>
                  <option value="NOR">Norway</option>
                  <option value="NPL">Nepal</option>
                  <option value="NZL">New Zealand</option>
                  <option value="OMN">Oman</option>
                  <option value="PAK">Pakistan</option>
                  <option value="PAN">Panama</option>
                  <option value="PER">Peru</option>
                  <option value="PHL">Philippines</option>
                  <option value="PLW">Palau</option>
                  <option value="PNG">Papua New Guinea</option>
                  <option value="POL">Poland</option>
                  <option value="PRT">Portugal</option>
                  <option value="PRY">Paraguay</option>
                  <option value="QAT">Qatar</option>
                  <option value="ROU">Romania</option>
                  <option value="RUS">Russian Federation</option>
                  <option value="RWA">Rwanda</option>
                  <option value="SAU">Saudi Arabia</option>
                  <option value="SCG">Kosovo</option>
                  <option value="SDN">Sudan</option>
                  <option value="SEN">Senegal</option>
                  <option value="SGP">Singapore</option>
                  <option value="SLB">Solomon Islands</option>
                  <option value="SLE">Sierra Leone</option>
                  <option value="SLV">El Salvador</option>
                  <option value="SMR">San Marino</option>
                  <option value="SOM">Somalia</option>
                  <option value="SRB">Serbia</option>
                  <option value="STP">Sao Tome and Principe</option>
                  <option value="SUR">Suriname</option>
                  <option value="SVK">Slovak Republic</option>
                  <option value="SVN">Slovenia</option>
                  <option value="SWE">Sweden</option>
                  <option value="SWZ">Swaziland</option>
                  <option value="SYC">Seychelles</option>
                  <option value="SYR">Syria</option>
                  <option value="TCD">Chad</option>
                  <option value="TGO">Togo</option>
                  <option value="THA">Thailand</option>
                  <option value="TJK">Tajikistan</option>
                  <option value="TKM">Turkmenistan</option>
                  <option value="TLS">Timor-Leste</option>
                  <option value="TON">Tonga</option>
                  <option value="TTO">Trinidad and Tobago</option>
                  <option value="TUN">Tunisia</option>
                  <option value="TUR">Turkey</option>
                  <option value="TUV">Tuvalu</option>
                  <option value="TWN">Taiwan Province of China</option>
                  <option value="TZA">Tanzania</option>
                  <option value="UGA">Uganda</option>
                  <option value="UKR">Ukraine</option>
                  <option value="URY">Uruguay</option>
                  <option value="USA">United States</option>
                  <option value="UZB">Uzbekistan</option>
                  <option value="VCT">Saint Vincent and the Grenadines</option>
                  <option value="VEN">Venezuela</option>
                  <option value="VNM">Vietnam</option>
                  <option value="VUT">Vanuatu</option>
                  <option value="WSM">Samoa</option>
                  <option value="YEM">Yemen</option>
                  <option value="ZAF">South Africa</option>
                  <option value="ZMB">Zambia</option>
                  <option value="ZWE">Zimbabwe</option>
                </Form.Control>
                {countryError && (
                  <div className="error">Country is required</div>
                )}{" "}
                {/* New error message */}
              </Form.Label>
              <Form.Label className="checkoutFormLabel">
                Full name (First and Last name, please use Alphabet)
              </Form.Label>
              <Form.Control type="text" className="checkoutInput" required />
            </Form.Group>

            <Form.Group>
              <Form.Label className="checkoutFormLabel">
                Phone number
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Control type="tel" className="checkoutInput" required />
              <Form.Text className="text-muted">
                May be used to assist delivery (country code + area code+ phone
                number)
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label className="checkoutFormLabel">Address</Form.Label>
              <Form.Control
                type="text"
                className="checkoutInput"
                placeholder="Street address"
                required
              />
              <Form.Control
                type="text"
                className="checkoutInput"
                placeholder="Apt, suite, unit, building, floor, etc."
              />
            </Form.Group>
            <Row>
              <Form.Group as={Col}>
                <Form.Label className="checkoutFormLabel">City</Form.Label>
                <Form.Control type="text" className="checkoutInput" required />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="checkoutFormLabel">State</Form.Label>
                <Form.Control
                  as="select"
                  className="checkoutInput"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                >
                  <option value="">Select State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Form.Control>
                {stateError && <div className="error">State is required</div>}{" "}
                {/* New error message */}
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="checkoutFormLabel">ZIP Code</Form.Label>
                <Form.Control type="text" className="checkoutInput" required />
              </Form.Group>
            </Row>
            <Form.Group>
              <Form.Check
                type="checkbox"
                className="checkoutCheckbox"
                label="Make this my default address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="checkoutFormLabel">
                Delivery instructions (optional)
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="checkoutTextarea"
                placeholder="Add preferences, notes, access codes and more"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="checkoutButton">
              Checkout
            </Button>
          </Form>
          {/* <Button variant="primary" type="submit" className="checkoutButton">
              Checkout
            </Button>
          </Form> */}

          <Modal show={showPopup} onHide={() => setShowPopup(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Shipping Restriction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              We are sorry but cannot ship to this country. For further
              information, please check{" "}
              <a
                href="https://ofac.treasury.gov/sanctions-programs-and-country-information"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowPopup(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>

        <Col md={4} className="rightContainer">
          {/* can add right container content */}
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
