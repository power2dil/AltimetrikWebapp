import React, { useState } from "react";
import { useEffect } from "react";

function ListHotel() {
    const [hotelsData, setHotelsData] = useState([])

    useEffect(() => {

        fetch("http://127.0.0.1:3000/api/hotel/properties", {
            cors: true
        }).then(res => res.json()).then(res => {
            console.log(res)
            setHotelsData(res)
        }).catch(error => {

        });

        return () => {

        }
    }, [])




    return ( 
        <div>
            List Hotel Properties
        </div>
     );
}

export default ListHotel;