import classes from './Input.module.css';

const Input = (props) => {

    return (
        <div>
            <label htmlFor="amount">Amount</label>
            <input type="text" name="amount" id="amount" className={classes.input} />
        </div>
    )

}

export default Input;
