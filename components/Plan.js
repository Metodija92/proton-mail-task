import texts from '../texts/appTexts'

const Plan = (props) => {
    const {
        styles,
        cycle,
        plan,
        mostPopular,
        symbol,
        monthlyRate,
    } = props;

    const toGigs = plan.MaxSpace / 1073741824;
    const price = plan.Pricing[cycle] / 100;
    const isPro = plan.Name === 'professional';
    const isAnnual = cycle === '12';
    const isBiennial = cycle === '24';

    return (
        <div className={styles.plan}>
            {mostPopular && <h4 className={styles.most_popular}>MOST POPULAR</h4>}

            <h2>{plan.Name.toUpperCase()}</h2>
            <p>{symbol} <span className={styles.fees_span}>{monthlyRate}</span> /mo</p>

            {isAnnual &&
                <span>Billed as {symbol} {price} per year</span>
            }

            {isBiennial &&
                <span>Billed {symbol} {price} every 2 years</span>
            }

            <p>{texts.plansDescriptions[plan.Name].title}</p>

            <ul>
                <li>{plan.MaxMembers} {isPro && '- 5000'} user</li>
                <li>{toGigs} GB storage {isPro && 'per user'}</li>
                <li>{plan.MaxAddresses} addresses {isPro && 'per user'}</li>
                <li>Supports {plan.MaxDomains} domain{plan.MaxDomains > 1 && 's'}</li>
                <li>{texts.plansDescriptions[plan.Name].desc}</li>
                {plan.MaxVPN > 0 ?
                    <li>Includes ProtonVPN</li> :
                    <li>ProtonVPN (optional)</li>
                }
            </ul>

            <button className={styles.select_button}>Select</button>
        </div>
    )
}

export default Plan