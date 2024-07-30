import { convert } from "../../utils/convert";

const Calculations = (props) => {
    const { amount, exchangeRate } = props;

    return (
        <div aria-live="polite">
            {convert(amount, exchangeRate)}
        </div>
    )
}

export default Calculations;
