import React from 'react';
import {ActivityIndicator, Card} from 'react-native-paper';
import {useGerRandomFactQuery} from '../service/ApiService';

const RandomFactScreen = (): JSX.Element => {
  const {data, isLoading} = useGerRandomFactQuery();
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <Card.Title title={`Source: ${data?.source}`} subtitle={data?.text} />
  );
};

export default RandomFactScreen;
