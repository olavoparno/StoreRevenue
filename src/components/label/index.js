import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
    const { disabled, minValue } = props;
    return (
        <div className="div__label">
            <span>Faturamento mínimo esperado</span>
            <input type="text" className="div__label label__min" disabled={disabled} placeholder={minValue} />
        </div>
    );
}

Label.propTypes = {
    disabled: PropTypes.bool,
    minValue: PropTypes.string,
}

Label.defaultProps = {
    disabled: true,
    minValue: "15.000,00",
}

export default Label;