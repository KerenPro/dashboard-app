import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

export const ProfileImg = styled.img `
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
`

export const MessageIcon = styled.span `
    color: ${({theme}) => theme.colorGray};
    font-size: 27px;
    cursor: pointer;
`