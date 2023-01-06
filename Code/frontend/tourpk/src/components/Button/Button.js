import styles from "./Button.module.css";

const Button = (props) => {
   const { value, type } = props;
   let rootClass = "";
   if (type == "secondary")
      rootClass = styles.buttonSecondary;
   else
      rootClass = styles.buttonPrimary;

   return (
      <input type="button" value={value} className={rootClass} />
   );
};

export default Button;
