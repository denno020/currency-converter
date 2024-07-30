import { createContext, useContext, useMemo, useState } from 'react';

export const ConversionContext = createContext();

const ConversationContextProvider = (props) => {
    const [amount, setAmount] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(0.7456);

    const value = useMemo(() => ({
        exchangeRate,
        setExchangeRate,
        amount,
        setAmount
    }), [exchangeRate, amount])

    return (
        <ConversionContext.Provider value={value}>
            {props.children}
        </ConversionContext.Provider>
    )
}

export default ConversationContextProvider  ;
export const useConversionContext = () => useContext(ConversionContext)
