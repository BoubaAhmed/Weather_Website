import React from 'react'

export default function HumidityStatus(props){
        const humidity = props.humidity;

        if (humidity < 30) {
            return <h6><b>Low humidity</b></h6> ;
        } else if (humidity >= 30 & humidity <= 50) {
            return <h6><b>Comfortable humidity</b></h6> ;
        } else if (humidity >= 51 & humidity <= 70) {
            return <h6><b>Moderate humidity</b></h6> ;
        }else if (humidity >= 71 & humidity <= 90) {
            return <h6><b>High humidity </b></h6> ;
        }else if (humidity > 90) {
            return <h6><b> Very high humidity</b></h6> ;
        }
    };

