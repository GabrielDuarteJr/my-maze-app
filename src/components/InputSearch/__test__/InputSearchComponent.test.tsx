import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import InputSearchComponent from '../InputSearchComponent';

describe('InputSearchComponent', () => {
  it('should update input value correctly', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <InputSearchComponent value="" onChangeText={onChangeText} showButtonClear={false} onPressClear={() => {}} />
    );

    const input = getByPlaceholderText('Search series by name');

    fireEvent.changeText(input, 'Hello, World!');

    expect(onChangeText).toHaveBeenCalledWith('Hello, World!');
  });

  it('should display clear button', () => {
    const { getByText } = render(
      <InputSearchComponent value="" onChangeText={() => {}} showButtonClear={true} onPressClear={() => {}} />
    );

    const clearButton = getByText('Clear search');

    expect(clearButton).toBeTruthy();
  });

  it('should not display the clear button', () => {
    const { queryByText } = render(
      <InputSearchComponent value="" onChangeText={() => {}} showButtonClear={false} onPressClear={() => {}} />
    );

    const clearButton = queryByText('Clear search');

    expect(clearButton).toBeNull();
  });
});

