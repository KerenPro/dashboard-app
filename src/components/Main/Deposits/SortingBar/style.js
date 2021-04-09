import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 0.4rem 1rem;
    background-color: ${({ theme }) => theme.secondary};
    margin: 2rem 0;
    border-radius: 5px;
`

export const Text = styled.h1`
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`

export const Property = styled(Text)`
    width: 30%;
`

export const MoveInDate = styled(Text)`
    width: 15%;
`

export const Rent = styled(Text)`
    width: 10%;
`

export const Deposit = styled(Text)`
    width: 15%;
`

export const Status = styled(Text)`
`