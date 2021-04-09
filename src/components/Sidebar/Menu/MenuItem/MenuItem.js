import React from 'react'
import {Container, Title, Icon} from './style';

const MenuItem = ({title, active, icon}) => {
    return (
        <Container active={active}>
             <Icon active={active} className="iconify" data-inline="false" data-icon={`mdi-light:${icon}`}></Icon>
            <Title active={active}>{title}</Title>
        </Container>
    )
}

export default MenuItem
