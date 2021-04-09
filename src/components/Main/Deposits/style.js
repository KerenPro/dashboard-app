import styled from 'styled-components';

export const DepositsTitle = styled.h1 `
    font-weight: 500;
    color: ${({theme}) => theme.textColor};
    font-size: 1.3rem;
    display: flex;
    align-items: center;
`

export const DepositsCount = styled.div `
    margin-left: 1rem;
    font-size: 1rem;
    background-color: ${({theme}) => theme.header};
    color: ${({theme}) => theme.headerNumber};
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190,190,190,0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 300ms;
    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: ${({ theme }) => theme.secondary};
    }
`

export const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    margin: 0;
`

export const Subtitle = styled(Text)`
    font-size: 0.6rem;
    color: #B2BFE1;
    margin-top: 2px;
`

export const Property = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
`

export const PropertyText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

export const PropertyImg = styled.img`
    height: 35px;
    width: 35px;
`
export const PropertyStreet = styled(Text)`
    font-size: 1rem;
`
export const MoveInDate = styled(Text)`
    width: 15%;
`
export const Rent = styled(Text)`
    width: 10%;
`
export const DepositWrapper = styled.div`
    width: 15%;
`
export const Status = styled.div`
    display: flex;
    align-items: center;
`
export const StatusIndicator = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: ${props => props.color};
    margin-left: 1rem;
    position: absolute;
    right: 7rem;
`