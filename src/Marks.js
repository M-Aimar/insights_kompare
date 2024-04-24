import { line, curveNatural} from "d3-shape";
import * as d3 from "d3-geo";

const projection = d3.geoEqualEarth();
const path = d3.geoPath(projection);
export const Marks = ({worldAtlas}) => (
    <g className='marks' >
        {/*{worldAtlas.features.map(feature =>(*/}
        {/*    <path d={path(feature)} />*/}
        {/*))}*/}

        <path d={path(worldAtlas)} />

        {/*{cities.map(d => {*/}
        {/*    const [x,y] = projection([d.lng, d.lat]);*/}
        {/*    return <circle cx={x} cy={y} r={sizeScale(sizeValue(d))} fill={'white'}/>*/}
        {/*    }*/}
        {/*)}*/}
    </g>
)