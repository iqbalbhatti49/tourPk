import styles from "./Button.module.css";

const Button = (props) => {
   const { value, type, width } = props;
   let rootClass = "";
   if (type == "secondary")
      rootClass = styles.buttonSecondary;
   else
      rootClass = styles.buttonPrimary;

   const buttonStyle = {
      width: width,
   };

   return (
      <input type="button" value={value} className={rootClass} style={buttonStyle} />
   );
};

export default Button;
