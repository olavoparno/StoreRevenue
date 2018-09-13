import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
    const { defaultValue } = props;
    return (
        <div className="div__search">
            <input type="text" className="div__search input__search" placeholder={defaultValue} />
        </div>
    );
}

Search.propTypes = {
    defaultValue: PropTypes.string,
}

Search.defaultProps = {
    defaultValue: "Pesquisa",
}

export default Search;