import React, { Component } from "react";
import Title from "./../Title/index";
import { MainGrid } from "./info-styles";
import GoogleMapReact from "google-map-react";
import { ReactComponent as Box } from "../../icons/box.svg";
import { ReactComponent as Buildings } from "../../icons/buildings.svg";
import { ReactComponent as Call } from "../../icons/call.svg";
import { ReactComponent as Global } from "../../icons/global.svg";
import { ReactComponent as Location } from "../../icons/location.svg";
import { ReactComponent as Profile2User } from "../../icons/profile-2user.svg";
import { ReactComponent as Map } from "../../icons/map.svg";
import { ReactComponent as DocumentText } from "../../icons/document-text.svg";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Info extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  render() {
    return (
      <MainGrid>
        <div className="basic">
          <div>
            <Title content={"Address"} icon={<Location />} />
            <p>One Apple Park Way Cupertino, CA 95014 United States</p>
          </div>
          <div>
            <Title content={"Sector"} icon={<Box />} />
            <p>Technology</p>
          </div>
          <div>
            <Title content={"Industry"} icon={<Buildings />} />
            <p>Consumer Electronics</p>
          </div>
          <div>
            <Title content={"Phone"} icon={<Call />} />
            <p>408-996-1010</p>
          </div>
          <div>
            <Title content={"Website"} icon={<Global />} />
            <p>http://www.apple.com</p>
          </div>
          <div>
            <Title content={"Employees"} icon={<Profile2User />} />
            <p>147,000</p>
          </div>
        </div>
        <div className="map">
          <Title content={"Location"} icon={<Map />} />
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCVQX6Y5KcHdvivfmWdUO0ZP4_m-13X_CI",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        <div className="description">
          <Title content={"Description"} icon={<DocumentText />} />
          <p>
            Apple Inc. designs, manufactures, and markets smartphones, personal
            computers, tablets, wearables, and accessories worldwide. It also
            sells various related services. The company offers iPhone, a line of
            smartphones; Mac, a line of personal computers; iPad, a line of
            multi-purpose tablets; and wearables, home, and accessories
            comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod,
            iPod touch, and other Apple-branded and third-party accessories. It
            also provides AppleCare support services; cloud services store
            services; and operates various platforms, including the App Store,
            that allow customers to discover and download applications and
            digital content, such as books, music, video, games, and podcasts.
            In addition, the company offers various services, such as Apple
            Arcade, a game subscription service; Apple Music, which offers users
            a curated listening experience with on-demand radio stations; Apple
            News+, a subscription news and magazine service; Apple TV+, which
            offers exclusive original content; Apple Card, a co-branded credit
            card; and Apple Pay, a cashless payment service, as well as licenses
            its intellectual property. The company serves consumers, and small
            and mid-sized businesses; and the education, enterprise, and
            government markets. It sells and delivers third-party applications
            for its products through the App Store. The company also sells its
            products through its retail and online stores, and direct sales
            force; and third-party cellular network carriers, wholesalers,
            retailers, and resellers. Apple Inc. was founded in 1977 and is
            headquartered in Cupertino, California.
          </p>
        </div>
      </MainGrid>
    );
  }
}

export default Info;
