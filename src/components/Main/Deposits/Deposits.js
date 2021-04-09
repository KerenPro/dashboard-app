import React from 'react'
import * as S from './style';
import SortingBar from './SortingBar/SortingBar';
import Deposit from './Deposit';
import AllDepositsBtn from '../AllDepositsBtn/AllDepositsBtn'

const Deposits = ({title, data, count}) => {
    return (
        <div>
            <S.DepositsTitle>{title}<S.DepositsCount>{count}</S.DepositsCount></S.DepositsTitle>
            <SortingBar />
            {data.map(deposit => (
                <Deposit data={deposit} key={deposit.property.address.street} />
            ))}
            <AllDepositsBtn title={title} />
        </div>
    )
}

export default Deposits
