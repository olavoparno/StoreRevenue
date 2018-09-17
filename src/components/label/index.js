import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
    let { disabled, minValue } = props;

    minValue = minValue.toLocaleString(
        "pt-BR",
        { minimumFractionDigits: 2 }
    )

    const onChange = (event) => {
        let valueChanged = event.target.value;
        valueChanged = valueChanged.toLocaleString(
            "pt-BR",
            { minimumFractionDigits: 2 }
        )

        props.onChange(valueChanged);
    }

    return (
        <div className="div__label revenue">
            <span>Faturamento mínimo esperado</span>
            <input type="number" 
                   className="div__label label__min revenue" 
                   disabled={disabled} 
                   placeholder={minValue}
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