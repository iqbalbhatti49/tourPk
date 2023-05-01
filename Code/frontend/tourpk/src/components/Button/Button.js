import styles from "./Button.module.css";

const Button = (props) => {
   const { value, type, width, btnType, font, handleClick } = props;
   let rootClass = type == "secondary" ? styles.buttonSecondary : styles.buttonPrimary;

   const buttonStyle = {
      width: width,
      font: font,
   };

   return (
      <input type={btnType ? "submit" : "button"} value={value} className={rootClass} style={buttonStyle} onClick={handleClick} />
   );
};

export default Button;