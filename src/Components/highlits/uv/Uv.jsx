import React from 'react'

export default function Uv(props) {

    const uv = props.uv
    
    if (uv <= 2) {
        return <h5><b>Low</b></h5> ;
    } else if (uv >= 3 & uv <= 5) {
        return <h5><b>Moderate</b></h5> ;
    } else if (uv >= 6 & uv <= 7) {
        return <h5><b>High</b></h5> ;
    }else if (uv >= 8 & uv <= 10) {
        return <h5><b>Very High</b></h5> ;
    }else if (uv > 11) {
        return <h5><b>Extreme</b></h5> ;
    }
}
