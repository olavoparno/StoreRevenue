import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
    constructor(props) {
        super(props);
        
        const { defaultValue, data } = props;

        this.state = {
            defaultValue: defaultValue,
            stores: data
        };
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data !== prevState.stores) {
            return {
                stores: nextProps.data.stores
            }
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.data !== nextProps.data) {
            return true;
        }
        if (this.state.stores !== nextState.stores) {
            return true;
        }
        return false;
    }

    onChange(event) {
        const valueChanged = event.target.value;
        this.props.onChangeSearch(valueChanged);
    }

    render() {
        return (
            <div className="div__search">
                <input 
                    type="text" 
                    className="div__search input__search" 
                    placeholder={this.state.defaultValue} 
                    onChange={this.onChange.bind(this)}
                />
            </div>
        );
    }
}

Search.propTypes = {
    data: PropTypes.any,
    defaultValue: PropTypes.string,
    onChangeSearch: PropTypes.func
}

Search.defaultProps = {
    defaultValue: "Pesquisa",
}

export default Search;