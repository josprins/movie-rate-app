import React from 'react';

const Item = (props) => {
	return (
		<div className="item">
			<img src={props.img} alt="whatever" />
			<div className="text">
				<p className="title">Title: {props.title}</p>
				<p className="rating">Rating: {props.rating}</p>
			</div>
		</div>
	);
};

export default Item;
