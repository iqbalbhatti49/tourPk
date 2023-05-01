import React, { useState } from 'react';
import styles from './FAQDropdown.module.css';
import { FaChevronDown } from 'react-icons/fa';

const FAQDropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.faqDropdown} onClick={toggleDropdown}>

      <div className={styles.faqQuestion} onClick={toggleDropdown}>
        <p>{question}</p>
        <FaChevronDown className={isOpen ? styles.open : styles.closed} />
      </div>


      {/* <button onClick={toggleDropdown}>
        {question}
      </button> */}
      {isOpen && (
        <div>
          <p className={styles.answer}>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQDropdown;
