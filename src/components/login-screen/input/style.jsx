import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin-bottom: 8px;
    font-size: 16px;
    outline: none;
    &:focus {
        border: 1px solid #000;
    } 
    &::placeholder {
        color: #ccc;
    }
`;
