export default function Filters(props) {
    const { styles, changeCurrency, setCycle } = props;
    return (
        <div className={styles.filter_container}>
            <select id='billing-cycle' className={styles.filters} onChange={(event) => setCycle(event.target.value)}>
                <option value='1'>Monthly</option>
                <option value='12'>Annually</option>
                <option value='24'>Biennially</option>
            </select>
            <select id='currency' className={styles.filters} onChange={() => changeCurrency(event)}>
                <option value='EUR'>€ Euro</option>
                <option value='USD'>$ USD</option>
                <option value='CHF'>Swiss Franc</option>
            </select>
        </div>
    )
}