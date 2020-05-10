import React from 'react';
import { Card as CardRN, Title, Paragraph } from 'react-native-paper';

const Card = ({title, body}) => {
    return (
        <CardRN>
            <CardRN.Content>
                <Title>{title}</Title>
                <Paragraph>{body}</Paragraph>
            </CardRN.Content>
        </CardRN>
    )
}

export default Card;