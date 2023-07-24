import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

const LoaderComponent: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator testID='loader-activity-indicator' />
    </Container>
  );
};

export default LoaderComponent;
