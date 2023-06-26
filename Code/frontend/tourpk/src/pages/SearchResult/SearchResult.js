import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './SearchResult.module.css';
import { HotelCard, SectionSearch } from '../../components';

export default function SearchResult() {
    const location = useLocation();
    let serviceType, results;
    serviceType = location.state ? location.state.serviceType : "";
    results = location.state ? location.state.results : "";
    const redirectUrl = serviceType + "Listing";
    return (
        <>
        <SectionSearch/>
        <div className={styles.container}>
            
            <h3 className={styles.heading}> {serviceType} Matching your Search </h3>
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
                <div  className={styles.noResult}>
                    <p>Oops! No Results Found. </p>
                    <div>Try something else or check your search spelling again</div>
                </div>
                )
            }
        </div>
        </>
    )
};