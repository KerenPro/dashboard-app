import React from 'react'
import Nav from './Nav/Nav.js'
import {Container} from './style'
import NewDepositBtn from './NewDepositBtn/NewDepositBtn';
import Deposits from './Deposits/Deposits';
import  depositData from '../../DepositData.json'

const Main = () => {
    return (
        <Container>
            <Nav />
            <NewDepositBtn />
            <Deposits title="Deposits" count={2} data={depositData.active} />
            <Deposits title="Deposits" count={0} data={depositData.closed} />
        </Container>
    )
}

export default Main
