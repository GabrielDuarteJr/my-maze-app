import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Poster = styled.Image`
  width: 120px;
  height: 180px;
  border-radius: 4px;
`;

export const HeaderDetails = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const SeriesName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

export const SeriesDaysAndTime = styled.Text`
  font-size: 16px;
  color: black;
`;

export const SeriesGenres = styled.Text`
  font-size: 16px;
  color: #888;
`;
