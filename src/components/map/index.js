import React from "react";
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

const CustomMap = styled(Map)`
  height: 355px;
  margin-right: 30px;
`;

import "./map.scss";

class MyMap extends React.Component {
  constructor(props) {
    super(props);

    const stores = this.props.data;

    this.state = {
      items: stores,
      zoom: 12
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== prevState.items) {
      return {
        items: nextProps.data.stores
      }
    }
    return null;
  }

  render() {
    const { minValue } = this.props;
    const myIcon = (props) => {
      return (L.icon({
      iconUrl: `images/marker-${props < minValue ? 'red' : 'blue'}.png`,
      iconSize: [15, 15],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    }))};
    
    const position = [-23.577158, -46.665183];
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
                <Popup>
                  {
                    item.revenue < minValue ?
                      <div>
                        <div style={{'color': 'red'}}>Nome: {item.name}</div>
                        <div style={{'color': 'red'}}>Receita: {item.revenue}</div>
                      </div> :
                      <div>
                        <div style={{'color': 'blue'}}>Nome: {item.name}</div>
                        <div style={{'color': 'blue'}}>Receita: {item.revenue}</div>
                      </div>
                  }
                </Popup>
              </Marker>
            )
          })
        }
      </CustomMap>
    );
  }
}

Map.propTypes = {
  data: PropTypes.any.isRequired,
  minValue: PropTypes.number
}

export default MyMap;