import style from './Price.module.css'

export const MonthlyPrice = ({annually}) => {
    return (
        <div>
            <div className={style.container}>
                <h2>Our Pricing</h2>

                <div className={style.date}>
                    <h4>Annually</h4>
                    <button type='button' className={style.btn} onClick={annually}>Change</button>
                    <h4>Monthly</h4>
                </div>

                <div className={style.pricez}>
                    <div className={style.basmas}>
                        <h5>Basic</h5>
                        <p className={style.bmprice}>$ <span>19.99</span></p>
                        <ul>
                            <li>500 GB Storage</li>
                            <li>2 Users Allowed</li>
                            <li>Send up to 3GB</li>
                        </ul>

                        <button type='button' className={style.button}>learn more</button>
                    </div>

                    <div className={style.pro}>
                        <h5>Professional</h5>
                        <p className={style.pprice}>$ <span>24.99</span></p>
                        <ul>
                            <li>1 TB Storage</li>
                            <li>5 Users Allowed</li>
                            <li>Send up to 10 GB</li>
                        </ul>

                        <button type='button' className={style.button}>learn more</button>
                    </div>

                    <div className={style.basmas}>
                        <h5>Master</h5>
                        <p className={style.bmprice}>$ <span>39.99</span></p>
                        <ul>
                            <li>2 TB Storage</li>
                            <li>10 Users Allowed</li>
                            <li>Send up to 20 GB</li>
                        </ul>

                        <button type='button' className={style.button}>learn more</button>
                    </div>

                </div>

            </div>

        </div>
    )
}