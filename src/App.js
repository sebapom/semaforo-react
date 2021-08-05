import React from "react";
import { useState } from "react";
import './App.css';

const TrafficLight = () => {
	const [color, setColor] = useState({
		color1: true,
		color2: false,
		color3: false
	});

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="mx-auto mt-5">
						<div className="box">
							<div
								className={
									color.color1 ? "color1-light" : "color1"
								}
								onClick={() =>
									setColor({
										color: false,
										color1: true,
										color2: false,
										color3: false
									})
								}></div>
							<div
								className={
									color.color2 ? "color2-light" : "color2"
								}
								onClick={() =>
									setColor({
										color: false,
										color1: false,
										color2: true,
										color3: false
									})
								}></div>
							<div
								className={
									color.color3 ? "color3-light" : "color3"
								}
								onClick={() =>
									setColor({
										color: false,
										color1: false,
										color2: false,
										color3: true
									})
								}></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrafficLight;

