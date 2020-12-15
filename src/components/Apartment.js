import React from "react";
import Room from "./Room";

// aparments.json tiedostossa voi lisätä erikokoisia asuntoja

const Apartment = ({ name, rooms, paint }) => {

    function getTotalPrice(rooms, paint) {
        let paintPrice = paint.paintPrice;
        let totalLetersNeeded = getTotalLiters(rooms, paint);
        let totalPrice = totalLetersNeeded * paintPrice;

        return totalPrice;
    }

    function getTotalLiters(rooms, paint) {
        let paintCount = paint.paintCount;
        let totalSquareMeters = 0;
        let paintCoverage = paint.paintCoverage;

        rooms.forEach((element) => {
            totalSquareMeters += (element.size * element.typeFactor);
        });

        let totalLetersNeeded = (totalSquareMeters / paintCoverage) * paintCount;

        return totalLetersNeeded;
    }

    function getSquareMeters(rooms) {
        let totalSquareMeters = 0;

        rooms.forEach((element) => {
            totalSquareMeters += element.size;
        });

        return totalSquareMeters;
    }

    return (
        <div className="apartmentDiv">
            <fieldset className="apartmentFieldset">
                <h3>{name} {getSquareMeters(rooms)}m<sup>2</sup></h3>
                <h4>Huoneet:</h4>
                <div className="rooms">
                    {rooms.map((room, i) => {
                        return <Room key={i} {...room} {...paint} />
                    })}
                    <p><strong>
                        Asunnon maalauksen hinta: {Math.round((getTotalPrice(rooms, paint) * 100) / 100)}€
                    </strong></p>
                    <p><strong>
                        Tarvittava maali: {Math.round((getTotalLiters(rooms, paint) * 100) / 100)} litraa
                    </strong></p>
                </div>
            </fieldset>
        </div>
    )

}

export default Apartment;