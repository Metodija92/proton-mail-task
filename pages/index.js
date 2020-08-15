import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

import Plans from '../components/Plans'
import Filters from '../components/Filters'
import {getHeaders, filterResults} from '../utils/helpers'

const Home = (props) => {
    const {selectedPlans} = props;
    const [currency, setCurrency] = useState('EUR');
    const [plans, setPlans] = useState(selectedPlans);
    const [shouldUpdate, setUpdate] = useState(false);
    const [cycle, setCycle] = useState('1');

    const requestPlans = async (currency) => {
        const updateFecth = getHeaders();
        let response = await fetch(`https://api.protonmail.ch/payments/plans?Currency=${currency}`, updateFecth)
        let result = await response.json();
        const updatedPlans = filterResults(result);
        return setPlans(updatedPlans);
    };

    useEffect(() => {
        if (shouldUpdate) {
            requestPlans(currency);
            setUpdate(false);
        }
    });

    const changeCurrency = (event) => {
        setCurrency(event.target.value);
        setUpdate(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.outer_container}>
                <div className='header-container'>
                    <h1>Plans & Prices</h1>
                    <Filters styles={styles}
                        changeCurrency={changeCurrency}
                        setCycle={setCycle}
                    />
                </div>
                {plans && <Plans styles={styles} plans={plans} cycle={cycle} />}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const initialFetch = getHeaders();
    let response = await fetch(`https://api.protonmail.ch/payments/plans?Currency=EUR`, initialFetch)
    let result = await response.json();
    const selectedPlans = filterResults(result);
    return { props: { selectedPlans } }
}
export default Home