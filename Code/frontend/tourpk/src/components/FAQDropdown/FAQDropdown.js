import React, { useState } from 'react';
import styles from './FAQDropdown.module.css';

const FAQDropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.faqDropdown}>
      <button onClick={toggleDropdown}>
        {question}
      </button>
      {isOpen && (
        <div>
          <p className={styles.answer}>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FAQDropdown;
