import React from 'react';

import Item from './item';

import data from '../../resources/data/data.json';

class List extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            stores: []
        };
    }
    // componentDidMount() {
    //     console.log(123);
    //     axios.get('../../../dist/data.json')
    //       .then(res => {
    //         const stores = res.data;
    //         this.setState({ stores });
    //     })
    // }
    render() {
        const stores = data.stores;
        return (
            <div className="div__list">
                <div className="div__list__t">
                    <Item className="div__item div__item__header" value="Loja" />
                    <Item className="div__item div__item__header" value="Faturamento" />
                </div>
                <div className="div__list__b">
                    { stores.map((store, idx) => { 
                        let className = "div__item div__item__child";
                        if (store.revenue < 15000) {
                            className += " --below"
                        } 
                        return (
                        <div key={idx} className="display__flex">
                            <Item className={"div__item div__item__child"} value={store.name} />
                            <Item className={className} value={store.revenue} />
                        </div>)})    
                    }
                </div>
            </div>
        )
    }
};

export default List;