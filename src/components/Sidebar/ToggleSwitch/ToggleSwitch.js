import React from 'react'
import * as S from './style'
import { useThemeContext } from '../../../context/themeContext'

const ToggleSwitch = () => {
  
    const {toggleTheme} = useThemeContext();
    
    return (
        <>
            <S.Switch>
                <input className="switch__input" type="checkbox" id="switchCheckbox1" onClick={toggleTheme} />
                <label aria-hidden="true" className="switch__label" htmlFor="switchCheckbox1">On</label>
                <div aria-hidden="true" className="switch__marker"></div>
            </S.Switch>
        </>
    )
}

export default ToggleSwitch
