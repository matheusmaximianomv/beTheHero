import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

const paddingTopHeight = getStatusBarHeight();

export const Container = styled.View`
  flex: 1;
  padding: ${paddingTopHeight}px 18px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin: 48px 0 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
  margin-top: ${(props) => (props.first ? '0px' : '24px')};
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #737380;
`;

export const ContactBox = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  color: #13131a;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  color: #737380;
  font-size: 15px;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled(TouchableOpacity)`
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  align-items: center;
  justify-content: center;
`;

export const ActionText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #fff;
`;
