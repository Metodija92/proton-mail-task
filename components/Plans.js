import Plan from './Plan'

const Plans = (props) => {
    const { plans, styles, cycle } = props;
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
                return (
                    <Plan key={i}
                        styles={styles}
                        cycle={cycle}
                        plan={plan}
                    />
                )
            })}
        </div>
    )
}

export default Plans