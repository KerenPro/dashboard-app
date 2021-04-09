import React from 'react'
import {Container, Property, MoveInDate, Rent, Deposit, Status} from './style'

const SortingBar = () => {
    return (
        <Container>
            <Property>Property</Property>
            <MoveInDate>Move In Date</MoveInDate>
            <Rent>Rent</Rent>
            <Deposit>Deposit</Deposit>
            <Status>Status</Status>
        </Container>
    )
}

export default SortingBar
