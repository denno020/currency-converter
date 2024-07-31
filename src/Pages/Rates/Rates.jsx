import { useCallback, useState } from 'react';
import Calculations from '../../Components/Calculations';
import DropDown from '../../Components/DropDown';
import Input from '../../Components/Input';
import ProgressBar from '../../Components/ProgressBar';
import Loader from '../../Components/Loader';

import { useConversionContext } from '../../context/ConversionContext';

import { useAnimationFrame } from '../../Hooks/useAnimationFrame';
import { ReactComponent as Transfer } from '../../Icons/Transfer.svg';

import classes from './Rates.module.css';

import CountryData from '../../Libs/Countries.json';
import countryToCurrency from '../../Libs/CountryCurrency.json';

let countries = CountryData.CountryCodes;

const Rates = () => {
    const [fromCurrency, setFromCurrency] = useState('AU');
    const [toCurrency, setToCurrency] = useState('US');

    const [progression, setProgression] = useState(0);
    const [loading, setLoading] = useState(false);
    const { amount, setAmount, exchangeRate, setExchangeRate } = useConversionContext();

    const Flag = ({ code }) => (
        <img alt={code || ''} src={`/img/flags/${code || ''}.svg`} width="20px" className={classes.flag} />
    );

    const fetchData = useCallback(() => {
        if (!loading) {
            setLoading(true);

            fetch(`https://rates.staging.api.paytron.com/rate/public?buyCurrency=${countryToCurrency[toCurrency]}&sellCurrency=${countryToCurrency[fromCurrency]}`).then(res => res.json()).then((data) => {
                setExchangeRate(data.retailRate);
                setLoading(false);
            })
        }
    }, [toCurrency, fromCurrency]);

    // Demo progress bar moving :)
    useAnimationFrame(!loading, (deltaTime) => {
        setProgression((prevState) => {
            if (prevState > 0.998) {
                fetchData();
                return 0;
            }
            return (prevState + deltaTime * 0.0001) % 1;
        });
    });

    // useEffect(() => {
    //     fetchData();
    //     setProgression(0); // Reset progress bar, because we've just requested new data
    // }, [fromCurrency, toCurrency])

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.heading}>
                    Currency Conversion
                    {loading && (
                        <div className={classes.loaderWrapper}>
                            <Loader width={'25px'} height={'25px'} />
                        </div>
                    )}
                </div>

                <div className={classes.rowWrapper}>
                    <div>
                        <DropDown
                            leftIcon={<Flag code={fromCurrency} />}
                            label={'From'}
                            selected={countryToCurrency[fromCurrency]}
                            options={countries.map(({ code }) => ({
                                option: countryToCurrency[code],
                                key: code,
                                icon: <Flag code={code} />,
                            }))}
                            setSelected={(key) => {
                                setFromCurrency(key);
                            }}
                            style={{ marginRight: '20px' }}
                        />
                    </div>

                    <div className={classes.exchangeWrapper}>
                        <div className={classes.transferIcon}>
                            <Transfer height={'25px'} />
                        </div>

                        <div className={classes.rate}>{exchangeRate}</div>
                    </div>

                    <div>
                        <DropDown
                            leftIcon={<Flag code={toCurrency} />}
                            label={'To'}
                            selected={countryToCurrency[toCurrency]}
                            options={countries.map(({ code }) => ({
                                option: countryToCurrency[code],
                                key: code,
                                icon: <Flag code={code} />,
                            }))}
                            setSelected={(key) => {
                                setToCurrency(key);
                            }}
                            style={{ marginLeft: '20px' }}
                        />
                    </div>
                </div>

                <ProgressBar
                    progress={progression}
                    animationClass={loading ? classes.slow : ''}
                />

                <div className={classes.rowWrapper}>
                    <div style={{ marginRight: '20px' }}>
                        <Input onUpdate={setAmount} />
                    </div>

                    <div className={classes.exchangeWrapper}>
                        <div className={classes.transferIcon}>
                            <Transfer height={'25px'} />
                        </div>
                        <div className={classes.rate} style={{ visibility: 'hidden' }}>{exchangeRate}</div>
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <Calculations amount={amount} currency={toCurrency} exchangeRate={exchangeRate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rates;
