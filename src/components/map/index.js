import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import styled from "styled-components";

const CustomMap = styled(Map)`
  height: 350px;
  margin-right: 30px;
`;

import "./map.scss";

class MyMap extends React.Component {
  constructor(props) {
    super(props);

    const stores = this.props.data;

    this.state = {
      zoom: 16,
      items: stores
    };
  }

  render() {
    const myIcon = (props) => {
      return (L.icon({
      iconUrl: `../.././../dist/images/marker-${props < 15000 ? 'red' : 'blue'}.png`,
      iconSize: [20, 20],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    }))};
    
    // const position = [this.state.items[0].latitude, this.state.items[0].longitude];
    const position = [-23.627158, -46.675183];
    return (
      <CustomMap center={position} zoom={this.state.zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {
          this.state.items.map((item, idx) => {
            return (
              <Marker 
                key={idx}
                position={[item.latitude, item.longitude]}
                icon={myIcon(item.revenue)}>
                {console.log(item)}
              </Marker>
            )
          })
        }
      </CustomMap>
    );
  }
}

export default MyMap;