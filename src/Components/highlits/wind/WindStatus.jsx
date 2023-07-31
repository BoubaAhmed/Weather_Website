import React from 'react'

export default function WindStatus(props){
        const wind = props.wind;

        if (wind < 1) {
            return <h6><b>Calm Wind</b></h6> ;
        } else if (wind >= 1 & wind <= 5) {
            return <h6><b> Light breeze</b></h6> ;
        } else if (wind >= 6 & wind <= 19) {
            return <h6><b> Moderate breeze</b></h6> ;
        }else if (wind >= 20 & wind <= 39) {
            return <h6><b>Fresh breeze</b></h6> ;
        }else if (wind > 40) {
            return <h6><b>Strong wind</b></h6> ;
        }
    };

