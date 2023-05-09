import styles from "./Contract.module.css";
import { Button } from "../../components/index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const Contract = () => {
   const contract = useSelector((state) => state.contract.agreement);
   const navigate = useNavigate();

   const acceptContract = () => {
      navigate('/signupAsSeller');
   }
   const rejectContract = () => {
      swal("Contract is mandatory for registration", "You have to accept and abide by all terms and conditions of contract to register as a service provider on tourPk", "warning");
   }

   return (
      <>
         <div className={styles.container}>
            <div className={styles.header}>
               <p className={styles.subHeading}>CONTRACT TAILORED TO FIT YOUR NEEDS</p>
               <h1 className={styles.Heading}>TourPK Service Provider Agreement</h1>
               <p className={styles.description}>
                  This Service Provider Agreement is made and entered into by and between TourPK (the "Company"), and the individual or entity identified below as the Service Provider. By registering for the TourPK website as a Service Provider, Service Provider agrees to be bound by the terms and conditions of this Agreement.
               </p>
            </div>
            <div className={styles.content}>
               {
                  Object.entries(contract).map(([key, val]) =>
                     <div key={key}>
                        <h2 key={key}>{key}</h2>
                        <p>{val}</p>
                     </div>
                  )
               }
            </div>
            <div className={styles.buttons}>
               <Button type="primary" value="Accept" handleClick={acceptContract} />
               <Button type="secondary" value="Reject" handleClick={rejectContract} />
            </div>
         </div>
      </>
   );
};

export default Contract;
