import React from 'react';
import { useState, useEffect } from 'react';
import styles from './BookingSummary.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../Button/Button';

export const BookingSummary = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [days, setDays] = useState(1);

    useEffect(() => {
        setDays(calculateDays());
    }, [endDate, startDate])

    const calculateDays = () => {
        const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    const billingSummary = [
        {
            label: `$79 x ${days} nights `,
            value: 79
        },
        {
            label: 'Weekly Discount',
            value: '$-28'
        },
        {
            label: 'Cleaning Fee',
            value: '$62'
        },
        {
            label: 'Service Fee',
            value: '$83'
        },
        {
            label: 'Occupancy Taxes and Fees',
            value: '$29'
        }
    ];
    return (
        <div className={styles.container} >
            <h3> 75$ / night</h3>

            <div className={styles.calendar}>
                <div id={styles.checkin}>
                    <span> <b>Check-In</b> </span>
                    <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div id={styles.checkout}>
                    <span> <b>Check-Out</b> </span>
                    <DatePicker showIcon selected={endDate} onChange={(date) => setEndDate(date)} />
                </div>

            </div>
            <div>
                <div className={styles.summary}>
                    <div className={styles.reserveBtn}>
                        <Button value="Reserve Now" type="primary" />
                    </div>
                    {billingSummary.map((item, index) => (
                        <div className={styles.summaryItem} key={index}>
                            <p>{item.label}</p>
                            <p>{item.value > 0 ? item.value * days : item.value}</p>
                        </div>
                    ))}
                    <hr className={styles.hr}></hr>
                    <div className={styles.summaryItem}>
                        <p className={styles.total}>Grand Total</p>
                        <p className={styles.total}>$ 701.00</p>
                    </div>
                    <div className={styles.form}>

                    </div>
                </div>
            </div>
        </div>
    );
};