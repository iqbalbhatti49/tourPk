import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './SearchResult.module.css';
import { HotelCard } from '../../components';

export default function SearchResult() {
    const location = useLocation();
    const { serviceType, results } = location.state;
    const redirectUrl = serviceType + "Listing";
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}> {serviceType} Matching your Search </h1>
            {results.length !== 0 ? (
                <div className={styles.tabCards}>
                    {
                        results.map((item, index) => {
                            return (
                                <Link to={`/${redirectUrl}/${item.id}`}>
                                    <HotelCard
                                        key={index}
                                        data={item}
                                        type={serviceType}
                                    />
                                </Link>
                            );
                        })
                    }
                </div>)
                : (
                    <div>
                        <p className={styles.noResult}>Oops! No Results Found. </p>
                        <div>Try something else or check your search spelling again</div>
                    </div>
                )
            }
        </div>
    )
};