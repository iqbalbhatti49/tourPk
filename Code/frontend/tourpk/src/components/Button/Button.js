import styles from "./Button.module.css";

const Button = (props) => {
   const { value, type, width, btnType } = props;
   let rootClass = type == "secondary" ? styles.buttonSecondary : styles.buttonPrimary;

   const buttonStyle = {
      width: width
   };

   return (
      <input type={btnType ? "submit" : "button"} value={value} className={rootClass} style={buttonStyle} />
   );
};

export default Button;
