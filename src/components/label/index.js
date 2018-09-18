import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.value !== nextState.value) {
            return true;
        }
        return false;
    }

    onChange(event) {
        let valueChanged = event.target.value;
        valueChanged = valueChanged.toLocaleString(
            "pt-BR",
            { minimumFractionDigits: 2 }
        )
        this.setState({
            value: valueChanged
        })

        this.props.onChange(valueChanged);
    }
    render() {
    let { disabled, minValue } = this.props;
    minValue = minValue.toLocaleString(
        "pt-BR",
        { minimumFractionDigits: 2 }
    )
        return (
            <div className="div__label revenue">
                <span>Faturamento mínimo esperado</span>
                <input type="number" 
                    className="div__label label__min revenue" 
                    disabled={disabled} 
                    placeholder={minValue}
                    onChange={this.onChange.bind(this)}
                    />
            </div>
        );
    }
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