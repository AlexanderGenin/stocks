import React, { Component } from "react";
import Title from "./../Title/index";
import { MainGrid } from "./info-styles";
import { ReactComponent as Box } from "../../icons/box.svg";
import { ReactComponent as Buildings } from "../../icons/buildings.svg";
import { ReactComponent as Call } from "../../icons/call.svg";
import { ReactComponent as Global } from "../../icons/global.svg";
import { ReactComponent as Location } from "../../icons/location.svg";
import { ReactComponent as Profile2User } from "../../icons/profile-2user.svg";
import { ReactComponent as Map } from "../../icons/map.svg";
import { ReactComponent as DocumentText } from "../../icons/document-text.svg";

export class Info extends Component {
  render() {
    const {
      address1,
      city,
      state,
      zip,
      country,
      phone,
      website,
      industry,
      sector,
      longBusinessSummary,
      fullTimeEmployees,
    } = this.props.tickerStats.summaryProfile || {};

    const googleMapsLookup = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAutXJcOZS__6gZ1qILUboE7nTpxun5Hbc&q=${address1}+${city}`;

    return (
      <MainGrid>
        <div className="basic">
          <div>
            <Title content={"Address"} icon={<Location />} />
            <p>{address1}</p>
            <p>
              {city}, {state} {zip}
            </p>
            <p>{country}</p>
          </div>
          <div>
            <Title content={"Sector"} icon={<Box />} />
            <p>{sector}</p>
          </div>
          <div>
            <Title content={"Industry"} icon={<Buildings />} />
            <p>{industry}</p>
          </div>
          <div>
            <Title content={"Phone"} icon={<Call />} />
            <p>{phone}</p>
          </div>
          <div>
            <Title content={"Website"} icon={<Global />} />
            <p>{website}</p>
          </div>
          <div>
            <Title content={"Employees"} icon={<Profile2User />} />
            <p>{fullTimeEmployees}</p>
          </div>
        </div>
        <div className="map">
          <Title content={"Location"} icon={<Map />} />
          <iframe
            title="Google Map"
            width="450"
            height="300"
            loading="lazy"
            allowfullscreen
            src={googleMapsLookup}
          ></iframe>
        </div>
        <div className="description">
          <Title content={"Description"} icon={<DocumentText />} />
          {longBusinessSummary.split(". ").map((sent) => (
            <p>{sent + "."}</p>
          ))}
        </div>
      </MainGrid>
    );
  }
}

export default Info;
