import {faCheck, faTree, faWifi, faUtensils, faSwimmingPool, faFan, faTv, faTshirt, faThermometerHalf, faToiletPaper, faCutlery, faLaptop, faFire, faClock, faBone, faFireBurner, faBan, faLock, faKey, faPerson, faPeopleArrows, faCloud } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const getIconComponent = (info) => {
  const iconMap = {
    "garden": faTree,
    "wifi": faWifi,
    "kitchen": faUtensils,
    "pool": faSwimmingPool,
    "air conditioning": faFan,
    "tv": faTv,
    "dryer": faTshirt,
    "heater": faThermometerHalf,
    "essentials": faToiletPaper,
    "Refrigerator": faCloud,
    "hangers": faTshirt,
    "cutlery": faCutlery,
    "laptop": faLaptop,
    "smoking": faFire,
    "pm": faClock,
    "am": faClock,
    "pets": faBone,
    "party": faFireBurner,
    "ban": faBan,
    "no": faBan,
    "lock": faLock,
    "visitor": faPerson,
  };
  
  const lowerInfo = info.toLowerCase();
  for (const key in iconMap) {
    if (lowerInfo.includes(key.toLowerCase())) {
      return <FontAwesomeIcon icon={iconMap[key]} />;
    }
  }
  return <FontAwesomeIcon icon={faCheck} />;
};
