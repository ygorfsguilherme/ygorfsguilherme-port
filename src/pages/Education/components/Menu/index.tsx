import React from 'react'
import './styles.css'

interface IMenu {
    view: string
    setView: React.Dispatch<React.SetStateAction<string>>
}

function Menu({ view, setView }: IMenu) {
  return (
    <div className='menu'>
    <button 
        className={
            'btn__view ' + (view === 'graduation' ? 'active' : '')
        }
        onClick={() => setView('graduation')}
        >
        Graduação
    </button>

    <button 
        className={
            'btn__view ' + (view === 'certification' ? 'active' : '')
        }
        onClick={() => setView('certification')}
        >
        Certifição
    </button>

    <button 
      className={
        'btn__view ' + (view === 'course' ? 'active' : '')
        }
        onClick={() => setView('course')}

        >
        Cursos
    </button>
  </div>
  )
}

export default Menu