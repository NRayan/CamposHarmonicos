import { transparentize } from "polished";
import styled from "styled-components/native";

type ButtonProps =
    {
        applyPadding?: boolean
    }

export const Container = styled.TouchableOpacity<ButtonProps>`
flex-direction: row;
align-items: center;
margin-left: ${({ applyPadding, theme }) => applyPadding ? theme.paddings.horizontal : 0};
`;

export const Title = styled.Text`
margin-left: 10px;
color: ${({ theme }) => transparentize(.1, theme.colors.text)};
font-size: 18px;
font-family: ${({ theme }) => theme.fonts[500]};
`;