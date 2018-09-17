import React from 'react';

import Label from '../label';
import Search from '../search';
import Map from '../map';
import List from '../list';

import MapService from "../service";
class Container extends React.Component {
    constructor(props) {
        super(props);
    
        this.service = new MapService();

        this.state = {
          stores: [],
          prevStores: [],
          isLoading: true,
          minValue: 15000
        };

    }

    componentDidMount() {
        this.fetchStores();
    }

    fetchStores() {
        return this.service
          .getStores()
          .then(stores => this.setStores({ stores }))
    }

    setStores({ stores = [], isLoading = false }) {
        this.setState({
            stores,     
            isLoading
        });
    }

    onChangeSearch(value) {
        const oldStores = this.state.prevStores.length > 0 ?
            this.state.prevStores :
            this.state.stores.stores;

        const newStores = oldStores.filter(item => {
            return item.name.toLowerCase().search(
                value.toLowerCase()) !== -1;
            });
            
        const finalStores = newStores.length > 0 ? newStores : this.state.prevStores;

            this.setState({
                prevStores: oldStores,
                stores: { stores: finalStores}
            });
    }

    onChangeLabel(minValue) {
        this.setState({
            minValue: Number(minValue)
        });
    }

    render() {
        const { stores, isLoading, minValue } = this.state;
        const data = isLoading ? [{"name": 'Loading...', "latitude":"-22.9385", "longitude":"-43.1764", "revenue": "0"}] : stores;
        return (
            <div className="container">
                <div className="col-l">
                    <Search onChangeSearch={this.onChangeSearch.bind(this)} data={data} defaultValue={"Pesquisa"} />
                    <List data={data} minValue={minValue}/>
                </div>
                <div className="col-r">
                    <Label onChange={this.onChangeLabel.bind(this)} disabled={false} minValue={this.state.minValue} />
                    <Map data={data} minValue={minValue} lat={-22.9385} lng={-43.1764} />
                </div>
            </div>
        )
    }
};

export default Container;