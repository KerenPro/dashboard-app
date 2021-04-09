import React from 'react'
import {Text, Container, Subtitle, Property, PropertyText, PropertyImg, PropertyStreet, MoveInDate, Rent, DepositWrapper, Status, StatusIndicator} from './style'

const Deposit = ({data}) => {
    
    const {property, moveInDate, rent, deposit, status} = data;
    
    return (
        <Container>
            <Property>
                <PropertyImg src={require(`../../../assets/images/${property.imageUrl}`)}/>
                <PropertyText>
                    <PropertyStreet>{property.address.street}</PropertyStreet>
                    <Subtitle>{property.address.city} {property.address.state}</Subtitle>
                </PropertyText>
            </Property>
            <MoveInDate>{moveInDate}</MoveInDate>
            <Rent>${rent}</Rent>
            <DepositWrapper>
                <Text>${deposit.amount}</Text>
                <Subtitle>{deposit.type}</Subtitle>
            </DepositWrapper>
            <Status>
                <Text>{status.message}</Text>
                {(() => {
                    switch (status.level) {
                        case 1: return <StatusIndicator color="#F17E7E" />;
                        case 2: return <StatusIndicator color="#FFD056" />;
                        case 3: return <StatusIndicator color="#75C282" />;
                        default: return <StatusIndicator color="#AAA5A5" />;
                    }
                })()}
            </Status>
        </Container>
    )
}

export default Deposit
