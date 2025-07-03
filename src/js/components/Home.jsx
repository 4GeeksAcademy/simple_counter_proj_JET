import React from "react";
import SecondsCounter from "./SecondsCounter";
// import ClockImage from "./ClockImage";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			{/* <ClockImage /> */}
          <SecondsCounter />
		</div>
	);
};

export default Home;