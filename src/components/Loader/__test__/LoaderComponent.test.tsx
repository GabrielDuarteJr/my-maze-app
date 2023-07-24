import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import LoaderComponent from '../LoaderComponent';

describe('LoaderComponent', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<LoaderComponent />);

    const activityIndicator = getByTestId('loader-activity-indicator');

    expect(activityIndicator).toBeTruthy();
  });
});
