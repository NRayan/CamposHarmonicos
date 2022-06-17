import styled from "styled-components/native";

export const Overlay = styled.Modal`
flex: 1;
`;

export const Container = styled.View`
flex: 1;
padding: 5%;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,.7);
`;

export const Card = styled.View`
padding: 5%;
background-color: ${({ theme }) => theme.colors.background};
border-radius: 10px;
width: 100%;
`;

export const Header = styled.View`
flex-direction: row;
align-items: center;
`;

export const Title = styled.Text`
margin-left: 10px;
color: ${({ theme }) => theme.colors.text};
font-size: 16px;
font-family: ${({ theme }) => theme.fonts[600]};
`;

export const Description = styled.Text`
color: ${({ theme }) => theme.colors.text};
font-size: 14px;
font-family: ${({ theme }) => theme.fonts[500]};
margin: 15px 0;
`;

export const Button = styled.TouchableOpacity`
align-self: flex-end;
background-color: ${({ theme }) => theme.colors.primary};
border-radius: 5px;
padding: 10px 15px;
`;

export const ButtonText = styled.Text`
color: ${({ theme }) => theme.colors.text};
font-size: 13px;
font-family: ${({ theme }) => theme.fonts[600]};
`;

