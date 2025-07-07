import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock as farClock } from "@fortawesome/free-regular-svg-icons";

const ClockImage = (props) => {
  return <FontAwesomeIcon icon={farClock} {...props} />;
};

export default ClockImage;