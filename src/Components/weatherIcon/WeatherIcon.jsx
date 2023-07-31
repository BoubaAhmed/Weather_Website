import React from 'react'

export default function WeatherIcon(props){
        const src = props.src;
        const alt = props.alt;
        const hieght = props.hieght
        const className = props.className
        return <img className={className} src={src} height={hieght} alt={alt} />;


    };

