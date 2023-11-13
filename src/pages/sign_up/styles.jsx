import styled from "styled-components";

export const Container = styled.div`
    padding: 150px;
    gap: 10px
    height: 100vh;
    flex-direction: column;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: 0px 0px 10px #ccc;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
`;

export const Label = styled.label`
    font-size: 18px;
    font-weight: 600;
    color : #333;

`;

export const SignUp = styled.label`
    font-size: 14px;
    font-weight: 500;
    color : #333;
    margin-top: 10px;

`;  

export const Error = styled.label`
    font-size: 14px;
    font-weight: 500;
    color : red;
    margin-top: 5px;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        color: #f9a826;
        text-decoration: none;
    }
`;
