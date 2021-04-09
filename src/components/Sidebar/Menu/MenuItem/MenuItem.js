import React from 'react'
import {Container, Title, Icon} from './style';

const MenuItem = ({title, active, icon}) => {
    return (
        <Container active={active}>
            <Title active={active}>{title}</Title>
        </Container>
    )
}

export default MenuItem
