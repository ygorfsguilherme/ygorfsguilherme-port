import SectionBox from '../../components/SectionBox'
import EfectVariants from '../../components/EfectVariants'
import CardSkill from './CardSkill'
import dados from './../../../data/skill.json'
import './Skills.css'

function Skill() {
  return (
    <SectionBox
      title={'Habilidades'}
    >
      <div className='skills'>
      {
          dados.skills.map((item: string, index) => {
              const time = index / 15

              return (
                  <EfectVariants 
                      time={time} 
                      id={index}>

                      <CardSkill
                          img={item}                 
                      />
                  </EfectVariants>
              )
          })
      }
      </div>
    </SectionBox>
  )
}

export default Skill