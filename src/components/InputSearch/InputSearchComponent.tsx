import React from 'react';
import { Button } from 'react-native';
import { Container, TextInput } from './styles';

interface InputSearchInterface {
  value: string;
  onChangeText: (text: string) => void;
  showButtonClear: boolean;
  onPressClear: () => void;
}

const InputSearchComponent: React.FC<InputSearchInterface> = ({
  value,
  onChangeText,
  showButtonClear,
  onPressClear,
}) => {
  return (
    <Container>
      <TextInput
        value={value}
        placeholder="Search series by name"
        onChangeText={onChangeText}
        placeholderTextColor="#888"
      />
      {showButtonClear && <Button title="Clear search" onPress={onPressClear} />}
    </Container>
  );
};

export default InputSearchComponent;
