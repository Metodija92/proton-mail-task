import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

import Plans from '../components/Plans'
import Filters from '../components/Filters'
import { requestPlans } from '../utils/helpers'

const Home = (props) => {
    const { requestedPlans } = props;
    const [currency, setCurrency] = useState('EUR');
    const [plans, setPlans] = useState(requestedPlans);
    const [shouldUpdate, setUpdate] = useState(false);
    const [cycle, setCycle] = useState('1');

    const currencyUpdate = async (currency) => {
        const updatedPlans = await requestPlans(currency);
        return setPlans(updatedPlans);
    };

    useEffect(() => {
        if (shouldUpdate) {
            currencyUpdate(currency);
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
    const requestedPlans = await requestPlans('EUR');
    return { props: { requestedPlans } }
}

export default Home