

import React from 'react'

export default function Air(props) {

    const air = props.air

    if (air <= 50) {
        return <h5><b>Good</b></h5> ;
    } else if (air >= 51 & air <= 100) {
        return <h5><b>Moderate</b></h5> ;
    } else if (air >= 101 & air <= 150) {
        return <h5><b>Unhealthy for Sensitive Groups</b></h5> ;
    }else if (air >= 150 & air <= 200) {
        return <h5><b>Unhealthy </b></h5> ;
    }else if (air > 200) {
        return <h5><b>Very Unhealthy</b></h5> ;
    }

}
