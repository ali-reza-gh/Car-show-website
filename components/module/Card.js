import Link from "next/link";
import styles from "./Card.module.css";

import Location from "../icons/Location";

const Card = (props) => {
    const { id, name, model, year, location, image, price, distance } = props
    return (
        <Link href={`/cars/${id}`}>
            <div className={styles.container}>
                <img src={image} className={styles.image} />
                <h4 className={styles.title}>{`${name} ${model}`}</h4>
                <p className={styles.detail}>{`${year} . ${distance}`}</p>
                <div className={styles.footer}>
                    <p>${price}</p>
                    <div className={styles.location}>
                        <p>{location}</p>
                        <Location />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card; 