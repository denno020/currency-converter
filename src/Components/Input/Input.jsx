import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
import { useConversionContext } from '../../context/ConversionContext'
import classes from './Input.module.css';

const Input = (props) => {

    const { setAmount } = useConversionContext();

    const debouncedUpdate = useDebouncedCallback(
        value => props.onUpdate(value),
        300
    );

    return (
        <div>
            <label htmlFor="amount">Amount</label>
            <input type="tel" pattern="[0-9]+" name="amount" id="amount" className={classes.input} onChange={e => debouncedUpdate(e.target.value)} required disabled={props.disabled} />
        </div>
    )

}

Input.propTypes = {
    onUpdate: PropTypes.func,
    disabled: PropTypes.bool
};

Input.defaultProps = {
    disabled: false
}

export default Input;
