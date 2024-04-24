import React, { useState, useEffect } from "react";
import { json } from 'd3';
import { feature } from 'topojson';

const jsonURL = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'

export const useWorldAtlas = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        json(jsonURL).then(topojsonData =>{
            const {countries} = topojsonData.objects
            setData(feature(topojsonData, countries))
        });
    }, []);

    return data;
}