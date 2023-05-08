import React from 'react'
import './styles.css'
import {IDateTime} from './IDateTime'

function DateTime(props: IDateTime) {
  return (
    <time className='datetime' >

      {props.dateStart}
      {props.dateStart != '' ? ' - ': ""}
      {props.dateEnd}
    </time>
  )
}

export default DateTime