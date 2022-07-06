import React from"react";

export default function Counter(props){
    const number = props.number || 0
    const places = number.toString().split("").reverse()
    console.log(places);

    return <div className="container-sm">
    <h1 className="title">SIMPLE COUNTER CLOCK</h1>
    <div className="container row">
        <div className="col box bg-danger">
        <h1 class="clock fa-regular fa-clock fa-beat-fade"></h1></div>
        <div className="col box bg-light">
        <h2>{places.length > 5 ? places[5]: 0}</h2></div>
        <div className="col box bg-light">
        <h2>{places.length > 4 ? places[4]: 0}</h2></div>
        <div className="col box bg-light">
        <h2>{places.length > 3 ? places[3]: 0}</h2></div>
        <div className="col box bg-light">
        <h2>{places.length > 2 ? places[2]: 0}</h2></div>
        <div className="col box bg-light">
        <h2>{places.length > 1 ? places[1]: 0}</h2></div>
        <div className="col box bg-light">
        <h2>{places[0]}</h2></div>
    </div>
	<br />
			<button
				className="container btn btn-dark buttonCounter"
				onClick={() => window.location.reload(false)}>
				Click to Reload!
			</button>
</div>
}


