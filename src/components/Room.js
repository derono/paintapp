import React from "react";

<<<<<<< HEAD
// Laskukaavoja
const Room = ({ name, size, typeFactor, paintName, paintPrice,
    paintCoverage, paintCount, }) => {
=======
// Laskukaavoja. Laskettu tilavuus, tarvittava maali ja hinta.
const Room = ( { name, size, typeFactor, paintName, paintPrice, 
    paintCoverage, paintCount, } ) => {
>>>>>>> 15c66f0fc1a866117f70830bb686c72bdc730aa8

    var totalSquareMeters = (size * typeFactor) * paintCount;
    var totalLitersNeeded = totalSquareMeters / paintCoverage;
    var totalCost = totalLitersNeeded * paintPrice;

    return (
        <div>
            <p>
                <h5>{name}</h5> Tilavuus: {size}m<sup>2</sup> <br></br> Tarvittava maali: {Math.round(totalLitersNeeded * 100) / 100} litraa.
            </p>
            <p className="costParagraph">Hinta: {Math.round((totalCost * 100) / 100)}€</p>
            <br></br>
        </div>
    )
}

export default Room;