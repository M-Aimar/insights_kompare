import React from 'react';
import ReactDOM from 'react-dom/client';
import {arc} from 'd3-shape';



function BigYellow(props) {
    const width = props.width / 2;
    const height = props.height / 2;


    return (
        <div className="big_yell" >
            <svg width={props.width} height={props.height} >
                <g transform={`translate(${props.width / 2}, ${props.height /2})`}>
                    <circle cx={width/2} cy={height/2} r={(height/2)-props.strokewidth / 2} fill="yellow" stroke="black" strokeWidth={props.strokewidth}/>
                </g>
            </svg>
        </div>
    );
}
export default BigYellow;
