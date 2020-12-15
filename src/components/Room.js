import React from "react";

const Room = ( { name, size, typeFactor, paintName, paintPrice, 
    paintCoverage, paintCount, } ) => {

    var totalSquareMeters = (size * typeFactor) * paintCount;
    var totalLitersNeeded = totalSquareMeters / paintCoverage;
    var totalCost = totalLitersNeeded * paintPrice;

    return (
        <div>
            <p>
                {name}, tilavuudeltaan {size}m<sup>2</sup> maalaamiseen tarvitaan {Math.round(totalLitersNeeded * 100) / 100} litraa.
            </p>
            <p className="costParagraph">Hinta: {Math.round((totalCost * 100) / 100)}€</p>
            <br></br>
        </div>
    )
}

export default Room;