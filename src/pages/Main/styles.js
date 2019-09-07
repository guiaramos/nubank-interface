import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: rgba(138, 5, 190, 1);
  padding-top: ${getStatusBarHeight()}px;
`;
