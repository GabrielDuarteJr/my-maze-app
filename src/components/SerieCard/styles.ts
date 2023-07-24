import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const SeriesName = styled.Text`
  margin-left: 16px;
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const Poster = styled.Image`
  width: 80px;
  height: 120px;
  border-radius: 4px;
`;
