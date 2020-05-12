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

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin: 48px 0 16px;
  font-weight: bold;
  color: #13131a;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

export const IncidentList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 32px;
`;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const IncidentProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const IncidentValue = styled.Text`
  margin: 8px 0 24px;
  font-size: 15px;
  color: #737380;
`;

export const DetailsButton = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
