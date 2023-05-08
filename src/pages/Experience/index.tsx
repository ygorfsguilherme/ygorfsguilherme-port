import SectionBox from '../../components/SectionBox'
import dados from './../../../data/experience.json'
import './Works.css'
import CardWork from './CardWork'

function Experience() {
  return (
    <SectionBox title='Experiência' id='works'>
      <div className='works'>
          {
            dados.works.map((item: any, index) => {
              return <CardWork id={index} data={item} position={index} />
            })
          }
      </div>
    </SectionBox>
  )
}

export default Experience