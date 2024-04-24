import {useWorldAtlas} from "./useWorldAtlas";
import {svg} from "d3-fetch";
import React from "react";
import {Marks} from "./Marks";
import {useCities} from "./useCities"
import {scaleSqrt} from 'd3-scale';
import * as d3 from 'd3';

const width = 900;
const height = 500;

const App = iterable => {
    let worldAtlas = useWorldAtlas();
    let cities = useCities();

    const sizeValue = d => d.population;
    const maxRadius = 10;

    const sizeScale = scaleSqrt().domain([0, d3.max(cities, sizeValue)]).range([0, maxRadius])

    if (!worldAtlas || !cities){
        return <pre>Loading...</pre>
    }
    // else {
    //     data = data.features[74]
    //
    // }
    return (
        <svg width={width} height={height}>
            <Marks worldAtlas={worldAtlas} cities={cities} sizeScale={sizeScale} sizeValue={sizeValue}/>
        </svg>
    );
}

export default App;
