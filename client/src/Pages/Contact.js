import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Contact = () => {
  return (
    <div className="contact">
      <LoadScript googleMapsApiKey="AIzaSyB_DlNT9XGvxswD_3h0cDr7DdfC6Ts07oQ">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>

      <div className="mt-5">
        <div className="about-info">
        
              <div className="col-6 fw-bold">  
                <div className="about-info-title">
                  <p>Established:</p>
                  <p>Age:</p>
                  <p>Address:</p>
                  <p>Email:</p>
                  <p>Phone:</p>
                </div>
              </div>
              <div className="col-6">
                <div className="about-info-value fw-normal">
                  <p>01.07.1990</p>
                  <p>31</p>
                  <p>Ave 11, New York, USA</p>
                  <p>mail@gmail.com</p>
                  <p>+77 022 177 05 05</p>
                </div>
              </div>
           
        </div>
      </div>
    </div>
  );
};

export default Contact;
