import styled from 'styled-components'

export const AddButton = styled.a `
    background-color: ${({theme}) => theme.colorGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    top: 6rem;
    right: 7rem;
    cursor: pointer;
`

export const AddIcon = styled.span`
    color: white;
    font-size: 30px;
`