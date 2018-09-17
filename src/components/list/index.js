import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '../pagination';

const TableItem = ({
    item: { name, revenue }, className
  }) => (
    <tr>
      <td>{name}</td>
      <td className={className}>{`R$ ${revenue.toLocaleString(
        "pt-BR",
        { minimumFractionDigits: 2 }
      )}`}</td>
    </tr>
);
class List extends React.Component {
    constructor(props) {
        super(props);
        
        const stores = this.props.data;

        this.state = {
            stores: stores,
            pageOfItems: [],
            orderedBy: true,
            sortedBy: "name"
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

    componentDidUpdate() {
    }
    
    componentDidMount() {
        this.sortBy("name");
    }

    sortBy(prop) {
        const totalLength = this.state.stores.length;
        this.setState({
            sortedBy: prop,
            orderedBy: !this.state.orderedBy,
            stores: this.state.stores.sort((a, b) => {
                if (a[prop] < b[prop]) return this.state.orderedBy ? -1 : 1;
                if (a[prop] > b[prop]) return this.state.orderedBy ? 1 : -1;
                return 0;
            })
        });

        if (this.state.stores.indexOf(this.state.pageOfItems[0]) > -1 &&
        this.state.stores.indexOf(this.state.pageOfItems[0]) > totalLength-this.state.pageOfItems.length) {
            this.setState({
                pageOfItems: this.state.stores.slice(0, 10)
            })
        } else {
            this.setState({
                pageOfItems: this.state.pageOfItems.sort((a, b) => {
                    if (a[prop] < b[prop]) return this.state.orderedBy ? -1 : 1;
                    if (a[prop] > b[prop]) return this.state.orderedBy ? 1 : -1;
                    return 0;
                })
            })
        }
    };
    
    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        const { minValue } = this.props;
        return (
            <div className="div__list">
                <table >
                <thead>
                    <tr>
                    <td
                        className={`
                        ${this.state.sortedBy === "name" ? "isSorted" : ""}
                        ${this.state.orderedBy ? "orderedByASC" : "orderedByDESC"}
                        `}
                        onClick={() => this.sortBy("name")}
                    >
                        loja
                    </td>
                    <td
                        className={`
                        ${this.state.sortedBy === "revenue" ? "isSorted" : ""}
                        ${this.state.orderedBy ? "orderedByASC" : "orderedByDESC"}
                        `}
                        onClick={() => this.sortBy("revenue")}
                    >
                        faturamento
                    </td>
                    </tr>
                </thead>
                <tbody>
                    { 
                        this.state.pageOfItems.map(store => {
                        let className = "td";
                        if (store.revenue < minValue) {
                            className += " --below";
                        } 
                        return (
                            <TableItem className={className} key={store.name} item={store} />
                            )
                        })  
                    }
                </tbody>
                </table>
                <Pagination items={this.state.stores} onChangePage={this.onChangePage} />
            </div>
          );
    }
};

List.propTypes = {
    data: PropTypes.any.isRequired,
    minValue: PropTypes.number
}

export default List;