import { transparentize } from "polished";
import styled from "styled-components/native";

type ButtonProps =
    {
        showBottomBorder?: boolean
    }

export const Container = styled.View`
flex: 1;
padding: ${({ theme }) => theme.paddings.vertical} 0
`;

export const Title = styled.Text`
color: ${({ theme }) => transparentize(.3, theme.colors.text)};
font-size: 16px;
font-family: ${({ theme }) => theme.fonts[600]};
margin: 25px ${({ theme }) => theme.paddings.horizontal} 10px ;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
flex-direction: row;
align-items: center;
padding: 15px ${({ theme }) => theme.paddings.horizontal};
background-color: ${({ theme }) => transparentize(.95, theme.colors.text)};
border-top-width:1px;
border-bottom-width: ${({ showBottomBorder }) => showBottomBorder ? 1 : 0}px;
border-color: ${({ theme }) => transparentize(.9, theme.colors.text)};
`;

export const ButtonText = styled.Text`
color: ${({ theme }) => theme.colors.text};
font-size: 16px;
font-family: ${({ theme }) => theme.fonts[400]};
margin-left: 15px;
`;