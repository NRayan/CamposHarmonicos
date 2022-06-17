import { Foundation } from "@expo/vector-icons";
import React from 'react';
import { useTheme } from 'styled-components/native';
import { Button, ButtonText, Card, Container, Description, Header, Overlay, Title } from './styles';

type Props =
    {
        visible: boolean,
        infoNumber: 1 | 2 | 3,
        onClosePress: () => void
    }

type Info =
    {
        title: string,
        description: string
    }

const infos: Info[] =
    [
        {
            title: "O que são acordes?",
            description: "Um acorde é um grupo de notas, que tocadas ao mesmo tempo, criam um soar harmônico. Isso vale para qualquer tipo de instrumento. Podemos dizer que os acordes geralmente são usados para criar harmonias, e as notas formam as melodias."
        },
        {
            title: "O que são campos harmônicos?",
            description: "Campo harmônico é um conjunto de acordes formados a partir de uma determinada escala."
        },
        {
            title: "O que é cadência?",
            description: "Cadência harmônica ou progressão de acordes na teoria musical são sequências padrões de acordes que produzem efeitos harmônicos."
        },
    ]

export function InfoModal({ visible, infoNumber, onClosePress }: Props) {

    const colors = useTheme().colors;

    return (
        <Overlay transparent animationType='fade' visible={visible}>
            <Container>

                <Card>
                    <Header>
                        <Foundation name='info' color={colors.primary} size={26} />
                        <Title>{infos[infoNumber - 1].title}</Title>
                    </Header>

                    <Description>{infos[infoNumber - 1].description}</Description>

                    <Button onPress={onClosePress}>
                        <ButtonText>Beleza, entendi!</ButtonText>
                    </Button>
                </Card>

            </Container>
        </Overlay>
    )
}