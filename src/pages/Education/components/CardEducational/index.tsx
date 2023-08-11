import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles.css'
import DateTime from '../../../../components/DateTime'
import { ICardEducational } from './ICardEducational'

function CardEducational(
  props: ICardEducational
) {
  return (
    <div className='education__section__container'>
        <div className='education__section__header'>
            <FontAwesomeIcon icon={faBuildingColumns} />
            <h3>{props.school}</h3>
        </div>

        <DateTime 
          dateStart={props.dateStart}
          dateEnd={props.dateEnd}          
        />

        <div className='education__section__body'>
          <p>{props.course}</p>
        </div>

        <span className='education__section__faixa'></span>

        <img className='education__section__medal' width='40' src="/icons/medal.png" alt="" />
    </div>
  )
}

export default CardEducational