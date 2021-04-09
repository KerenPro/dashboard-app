import React from 'react'
import * as S from './style';

const AllDepositsBtn = ({title}) => {
    return (
        <S.Container>
            <S.Button>All {title}</S.Button>
        </S.Container>
    )
}

export default AllDepositsBtn
