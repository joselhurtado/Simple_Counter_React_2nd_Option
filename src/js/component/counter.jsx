import React from"react";

export default function Counter(props){
    const number = props.number || 0
    const places = number.toString().split("").reverse()
    console.log(places);

    return <div className="container">
    <h1>SIMPLE COUNTER CLOCK</h1>
    <div className="container-lg row">
        <div className="col box bg-danger clock">
        <h1 class="fa-regular fa-clock"></h1></div>
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
</div>
}


