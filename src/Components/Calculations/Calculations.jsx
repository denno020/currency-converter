import PropTypes from 'prop-types';
import Price from '../../Components/Price';
import { convert } from "../../utils/convert";
import classes from './Calculations.module.css';

const Calculations = (props) => {
    const { amount, currency, exchangeRate } = props;

    const { base, ofx } = convert(amount, exchangeRate);

    return (
        <div aria-live="polite">
            <p>Base: <Price value={base} currency={currency} className={classes.price} /></p>
            <p>OFX: <Price value={ofx} currency={currency} className={classes.price} /></p>
        </div>
    )
}

Calculations.propTypes = {
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    exchangeRate: PropTypes.number.isRequired
}

export default Calculations;
