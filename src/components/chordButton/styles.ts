import { lighten } from "polished";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
const width = Dimensions.get("window").width;

export const Container = styled.TouchableOpacity`
    width: ${width / 3}px;
    aspect-ratio: 1;
    background: ${({ theme }) => lighten(.03, theme.colors.background)};
    border-radius: 10px;
    margin: 10px ${width * 0.05}px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: 23px;
    font-family: ${({ theme }) => theme.fonts[700]};
`;  