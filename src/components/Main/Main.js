import React from 'react'
import Nav from './Nav/Nav.js'
import {Container} from './style'
import NewDepositBtn from './NewDepositBtn/NewDepositBtn';
import Deposits from './Deposits/Deposits';
import depositData from '../../DepositData.json'

const Main = () => {
    return (
        <Container>
            <Nav />
            <NewDepositBtn />
            <Deposits title="Active Deposits" count={2} data={depositData.active} />
            <Deposits title="Closed Deposits" count={8} data={depositData.closed} />
        </Container>
    )
}

export default Main
