import React from 'react'
import classes from '../styles/screen.module.css'

const Point = ({x, y, index, active}) => {
  const circleColor= active?'#f00':'#343a40'
  const screenWidth=172 //без ширины точки
  const screenHeight=364 //без высоты точки
  const w=Math.floor(screenWidth*(x/100)) // координата X в процентах
  const h=Math.floor(screenHeight*(y/100))// координата Y в процентах
//   console.log('w ', w, ' h ', h)
//   console.log('w ', `${w}px`, ' h ', `${h}px`)
  return (
    <div className={classes.circle} style={{top:`${h}px`, left: `${w}px`, backgroundColor:circleColor}}>
        <div className={classes.point} >
            {index+1}
        </div>
    </div>
  )
}

export default Point
