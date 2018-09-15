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
          isLoading: true
        };

    }

    componentDidUpdate() {

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

    onChange(value) {
        const oldStores = this.state.prevStores.length ?
            this.state.prevStores :
            this.state.stores.stores;

        const newStores = oldStores.filter(item => {
            return item.name.toLowerCase().search(
                value.toLowerCase()) !== -1;
            });

            this.setState({
                prevStores: oldStores,
                stores: { stores: newStores}
            });
    }

    render() {
        const { stores, isLoading } = this.state;
        const data = isLoading ? [{"name": 'Loading...', "latitude":"-22.9385", "longitude":"-43.1764"}] : stores;
        return (
            <div className="container">
                <div className="col-l">
                    <Search onChange={this.onChange.bind(this)} data={data} defaultValue={"Pesquisa"} />
                    <List data={data} />
                </div>
                <div className="col-r">
                    <Label disabled minValue={"15.000,00"} />
                    <Map data={data} lat={-22.9385} lng={-43.1764} />
                </div>
            </div>
        )
    }
};

export default Container;