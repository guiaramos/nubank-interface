import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, TabsContainer, TabItem, TabText} from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Reference friend</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Collect</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Deposit</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transfer</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Block card</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
