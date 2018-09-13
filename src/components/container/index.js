import React from 'react';

import Label from '../label';
import Search from '../search';
import Map from '../map';
import List from '../list';

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-l">
                    <Search defaultValue={"Pesquisa"} />
                    <List />
                </div>
                <div className="col-r">
                    <Label disabled minValue={"15.000,00"} />
                    <Map lat={-22.9385} lng={-43.1764} />
                </div>
            </div>
        )
    }
};

export default Container;