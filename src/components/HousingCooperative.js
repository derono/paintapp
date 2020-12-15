import React from "react";
import Apartment from "./Apartment";

const HousingCooperative = ({ apartments = [], paint }) => {

    function getTotalPrice(apartments, paint) {
        let paintPrice = paint.paintPrice;
        let totalLitersNeeded = getTotalLiters(apartments, paint);
        var totalPrice = totalLitersNeeded * paintPrice;

        return totalPrice;
    }

    function getTotalLiters(apartments, paint) {
        let paintCount = paint.paintCount;
        let totalSquareMeters = 0;
        let paintCoverage = paint.paintCoverage;

        apartments.forEach((element) => {
            element.rooms.forEach((element) => {
                totalSquareMeters += (element.size * element.typeFactor);
            })
        });

        let totalLitersNeeded = (totalSquareMeters / paintCoverage) * paintCount;
        return totalLitersNeeded;
    }

    return (
        <section>
            <h1 className="apartmentHeader">Asunnot:</h1>
            <div className="apartments">
                {apartments.map((apartment, i) => {
                    return <Apartment key={i} {...apartment} paint={paint} />
                })}
            </div>
            <div>
                <h2>
                    Maalauksen kokonaishinta yhteensä: {Math.round((getTotalPrice(apartments, paint) * 100) / 100)}€
                    <br></br>          
                    {paint.paintName} -maalia tarvitaan yhteensä: {Math.round((getTotalLiters(apartments, paint) * 100) / 100)} litraa
                </h2>
            </div>
            <div>
                <br></br>
                <h6>
                </h6>
            </div>
        </section>
    )
};

export default HousingCooperative;