import Plan from './Plan'

const Plans = (props) => {
    const currencieSymbols = {
        EUR: '€',
        USD: '$',
        CHF: 'CHF'
    }
    const { plans, styles, cycle } = props;
    const isAnnual = cycle === '12';
    const isBiennial = cycle === '24';
    return (
        <div className={styles.plans_container}>
            <div className={styles.plan}>
                <h2>FREE</h2>
                <p><span className={styles.fees_span}>0</span> /mo</p>

                <p>The basic for private and secure communications</p>
                <ul>
                    <li>1 user</li>
                    <li>500 MB storage</li>
                    <li>1 address</li>
                    <li>No domain support</li>
                    <li>ProtonVPN (optional)</li>
                </ul>
                <button className={styles.select_button}>Select</button>
            </div>
            {plans.map((plan, i) => {
                const mostPopular = plan.Name === 'plus';
                const symbol = currencieSymbols[plan.Currency];
                const monthlyRate = cycle === '1' ?
                    plan.Pricing[cycle] / 100 :
                    Math.round(plan.Pricing[cycle] / 100 / Number(cycle) * 100) / 100;

                return (
                    <Plan key={i}
                        styles={styles}
                        cycle={cycle}
                        plan={plan}
                        mostPopular={mostPopular}
                        symbol={symbol}
                        monthlyRate={monthlyRate}
                        isAnnual={isAnnual}
                        isBiennial={isBiennial}
                    />
                )
            })}
        </div>
    )
}

export default Plans