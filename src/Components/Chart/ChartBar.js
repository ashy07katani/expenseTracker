import React from 'react'
import './ChartBar.css'
export default function ChartBar(props) {
    let barFillStyle = {
        height: "100%",
        width: "100%",
        border: "1px solid #313131",
        borderRadius: "12px",
        backgroundColor: "#c3b4f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }

    let barFillHeight = '0%'
    if(props.maxValue > 0)
    {
        barFillHeight = Math.round((props.value/props.maxValue) *100)+'%';
        console.log(barFillHeight)
    }
  return (
    <div className="chart-bar">
        <div className='="chart-bar__inner' style={barFillStyle}>
            <div className="chart-bar__fill" style={{height:barFillHeight}}></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
  )
}
