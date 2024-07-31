import PropTypes from 'prop-types';
import countryToCurrency from '../../Libs/CountryCurrency.json';

const Price = (props) => {
    const { value, currency, className } = props;

    if (isNaN(value)) {
        return <span>⚠️ Input isn't a number</span>;
    }

    const price = new Intl.NumberFormat(currency, { style: 'currency', currency: countryToCurrency[currency] }).format(
        value,
      )

    return (
        <span className={className}>{price}</span>
    )
}

Price.propTypes = {
    value: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Price;
