import React from 'react'
import * as S from './style';

const MenuItem = ({title, active, icon}) => {
    return (
        <S.Container active={active}>
             <S.Icon active={active} className="iconify" data-inline="false" data-icon={`mdi-light:${icon}`}></S.Icon>
            <S.Title active={active}>{title}</S.Title>
        </S.Container>
    )
}

export default MenuItem
