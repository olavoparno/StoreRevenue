import React from 'react';

import Item from './item';
import Pagination from '../pagination';

class List extends React.Component {
    constructor(props) {
        super(props);
        
        const stores = this.props.data;

        this.state = {
            stores: stores,
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data !== prevState.stores) {
            return {
                stores: nextProps.data.stores
            }
        }
        return null;
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div className="div__list">
                <div className="div__list__t">
                    <Item className="div__item div__item__header" value="Loja" />
                    <Item className="div__item div__item__header" value="Faturamento" />
                </div>
                <div className="div__list__b">
                    { 
                        this.state.pageOfItems.map((store, idx) => {
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
                    <Pagination items={this.state.stores} onChangePage={this.onChangePage} />
                </div>
            </div>
        )
    }
};

export default List;