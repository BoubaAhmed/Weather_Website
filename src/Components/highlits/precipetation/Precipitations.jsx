import React from 'react'

export default function Precipitations(props){
        const precipitations = props.precipitations;

        if (precipitations === 0) {
            return <h5><b>None</b></h5> ;
        } else if (precipitations >= 0.1 & props.wprops.eatherprecipitations <= 2.5) {
            return <h5><b>Light</b></h5> ;
        } else if (precipitations >= 2.6 & precipitations <= 7.6) {
            return <h5><b>Moderate</b></h5> ;
        }else if (precipitations >= 7.7 & precipitations <= 25.4) {
            return <h5><b>Heavy </b></h5> ;
        }else if (precipitations > 25.4) {
            return <h5><b>Very Heavy</b></h5> ;
        }
    };

