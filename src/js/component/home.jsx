import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./SimpleCounter/SimpleCounter";

//create your first component
const Home = () => {
	return (
		<div>
			<SimpleCounter />
		</div>
	);
};

export default Home;
