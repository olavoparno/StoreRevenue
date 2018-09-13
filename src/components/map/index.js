import React from "react";
import { Map, TileLayer } from "react-leaflet";
import styled from "styled-components";

const CustomMap = styled(Map)`
  height: 350px;
  width: 350px;
`;

import "./map.scss";

class MyMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: 16
    };
  }

  render() {
    const position = [this.props.lat, this.props.lng];
    console.log();
    return (
      <CustomMap center={position} zoom={this.state.zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </CustomMap>
    );
  }
}

export default MyMap;