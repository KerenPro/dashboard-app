import React from 'react'
import {Switch} from './style'
import { useThemeContext } from '../../../context/themeContext'

const ToggleSwitch = () => {
  
    const {toggleTheme} = useThemeContext();
    
    return (
        <>
            <Switch>
                <input className="switch__input" type="checkbox" id="switchCheckbox1" onClick={toggleTheme} />
                <label aria-hidden="true" className="switch__label" htmlFor="switchCheckbox1">On</label>
                <div aria-hidden="true" className="switch__marker"></div>
            </Switch>
        </>
    )
}

export default ToggleSwitch
