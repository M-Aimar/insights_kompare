import React, { useState, useEffect } from "react";
import { json } from 'd3';
import axios from "axios";

const GEO_JSON_URL = 'https://path/to/your/geojson.geojson'; // Replace with the URL of your GeoJSON data

export const useWorldAtlas = () => {
    const [data, setData] = useState(null);
    const [IsLoadingGeoJson, setIsLoadingGeoJson] = useState(false);
    const [GeoJsonProgress, setGeoJsonProgress] = useState(null)
    const [GeoJsonBackup, setGeoJsonBackup] = useState(null)
    const [GeoJsonData, setGeoJsonData] = useState(null)
    // const fetchGeoJson = async () => {
    //     setIsLoadingGeoJson(true);
    //     const response = await axios.get(GEO_JSON_URL, {
    //         onDownloadProgress: progressEvent => {
    //             setGeoJsonProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100));
    //         }
    //     })
    //     setGeoJsonBackup(JSON.parse(JSON.stringify(response?.data)));
    //     setGeoJsonData({...response?.data});
    //     setIsLoadingGeoJson(false);
    // };
    console.log(GeoJsonData)

    useEffect(() => {
        // fetchGeoJson()
    }, []);

    return <h1>hi there </h1>;

}