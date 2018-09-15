import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
    const { disabled, minValue } = props;

    const onChange = (event) => {
        const valueChanged = event.target.value;
        props.onChange(valueChanged);
    }

    return (
        <div className="div__label revenue">
            <span>Faturamento mínimo esperado</span>
            <input type="text" 
                   className="div__label label__min revenue" 
                   disabled={disabled} 
                   placeholder={minValue}
                   defaultValue={minValue}
                   onChange={onChange.bind(this)}
                />
        </div>
    );
}

Label.propTypes = {
    disabled: PropTypes.bool,
    minValue: PropTypes.number,
}

Label.defaultProps = {
    disabled: true,
    minValue: 15000,
}

export default Label;