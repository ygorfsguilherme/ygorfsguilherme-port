import React from 'react'
import './styles.css'
import SectionBox from '../../components/SectionBox'
import CardEducational from './components/CardEducational'
import data from '../../../data/education.json'
import Menu from './components/Menu'

function Education() {
  const [view, setView] = React.useState('graduation')

  return (
    <SectionBox title='Educação' id='graduation'>

      <div className='education__container'>

        <Menu view={view} setView={setView} />

        <section 
            className={'education__section' +
                (view === 'graduation' ? ' active' : '')
          }
        >
            {
                data.graduation.map((item, index) => {
                    return (
                        <CardEducational 
                            key={index}
                            {...item}
                        />
                    )
                })
            }
        </section> 

        <section 
            className={'education__section' +
                (view === 'certification' ? ' active' : '')
          }
        >
            {
                data.certification.map((item, index) => {
                    return (
                        <CardEducational 
                            key={index}
                            {...item}
                        />
                    )
                })
            }
        </section> 

        <section 
            className={'education__section' +
                (view === 'course' ? ' active' : '')
          }
        >
            {
                data.course.map((item, index) => {
                    return (
                        <CardEducational 
                            key={index}
                            {...item}
                        />
                    )
                })
            }
        </section> 
      </div>
    </SectionBox>
  )
}

export default Education