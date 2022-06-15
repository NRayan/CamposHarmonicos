import { transparentize } from "polished";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.background};
padding: ${({ theme }) => theme.paddings.vertical} ${({ theme }) => theme.paddings.horizontal};
`;

export const ToneContainer = styled.View`
flex-direction: row;
align-items: center;
margin-top: 10%;
margin-bottom: 10%;
`;

export const ToneLabel = styled.Text`
font-size: 22px;
font-family: ${({ theme }) => theme.fonts[600]};
color: ${({ theme }) => theme.colors.text};  
`;

export const ToneTextContainer = styled.View`
margin-left: 15px;
background-color: ${({ theme }) => theme.colors.primary};
padding: 5px 10px;
border-radius: 5px;
justify-content: center;
align-items: center;
`;

export const ToneText = styled.Text`
font-size: 22px;
font-family: ${({ theme }) => theme.fonts[600]};
color: ${({ theme }) => theme.colors.text};  
`;

export const Chords = styled.Text`
font-size: 16px;
font-family: ${({ theme }) => theme.fonts[500]};
color: ${({ theme }) => transparentize(.5, theme.colors.text)};
`;

export const TagsContainer = styled.View`
    flex-direction: row;
    margin:5px 0
`;