import styled from 'styled-components/native';

export const Constainer = styled.ScrollView`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

export const EpisodeImage = styled.Image`
  width: 100%;
  height: 200px;
  resize-mode: cover;
  border-radius: 4px;
  margin-bottom: 16px;
`;

export const EpisodeName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

export const EpisodeDetails = styled.Text`
  font-size: 16px;
  color: #888;
  margin-bottom: 8px;
`;

export const EpisodeSummary = styled.Text`
  font-size: 16px;
`;

export const EmpytResults = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #ccc;
`;
