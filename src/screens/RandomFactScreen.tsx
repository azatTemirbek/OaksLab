import React from 'react';
import {ActivityIndicator, Card, Text} from 'react-native-paper';
import {useGerRandomFactQuery} from '../service/ApiService';

const RandomFactScreen = (): JSX.Element => {
  const {data, isLoading} = useGerRandomFactQuery();
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <Card style={{margin: 16}}>
      <Card.Content>
        <Text variant="titleLarge">{data?.source}</Text>
        <Text variant="bodyMedium">{data?.text}</Text>
      </Card.Content>
    </Card>
  );
};

export default RandomFactScreen;
