import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faBasketball,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";

const SportIcon = ({ sport_name }) => {
  if (!sport_name && typeof value === "string") return null;

  const sportIcons = {
    football: faFutbol,
    basketball: faBasketball,
    volleyball: faVolleyball,
  };

  const selectedIcon = sportIcons[sport_name.toLowerCase()];

  if (selectedIcon) {
    return <FontAwesomeIcon icon={selectedIcon} className="me-1 ms-1" />;
  }

  return null;
};

export default SportIcon;
