import React from 'react';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Amount available</Title>
            <Description>US$ 420,789,19</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Received transfer of US$ 20,000 from Mark Zulch today at 8:00am.
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
