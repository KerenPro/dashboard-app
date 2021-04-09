import React from 'react'
import * as S from './style'

const Deposit = ({data}) => {
    
    const {property, moveInDate, rent, deposit, status} = data;
    
    return (
        <S.Container>
            <S.Property>
                <S.PropertyImg src={require(`../../../assets/images/${property.imageUrl}`)} alt="house"/>
                <S.PropertyText>
                    <S.PropertyStreet>{property.address.street}</S.PropertyStreet>
                    <S.Subtitle>{property.address.city} {property.address.state}</S.Subtitle>
                </S.PropertyText>
            </S.Property>
            <S.MoveInDate>{moveInDate}</S.MoveInDate>
            <S.Rent>${rent}</S.Rent>
            <S.DepositWrapper>
                <S.Text>${deposit.amount}</S.Text>
                <S.Subtitle>{deposit.type}</S.Subtitle>
            </S.DepositWrapper>
            <S.Status>
                <S.Text>{status.message}</S.Text>
                {(() => {
                    switch (status.level) {
                        case 1: return <S.StatusIndicator color="#F17E7E" />;
                        case 2: return <S.StatusIndicator color="#FFD056" />;
                        case 3: return <S.StatusIndicator color="#75C282" />;
                        default: return <S.StatusIndicator color="#AAA5A5" />;
                    }
                })()}
            </S.Status>
        </S.Container>
    )
}

export default Deposit
