import styled from "styled-components/native";

type ContainerProps =
    {
        bkColor: string
    }

export const Container = styled.View<ContainerProps>`
flex: 1;
background-color: ${({ bkColor }) => bkColor};
justify-content: center;
align-items: center;
`;

export const LoadingIndicator = styled.ActivityIndicator`
        
`;