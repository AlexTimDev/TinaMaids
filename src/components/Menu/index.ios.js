import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'src/theme';
import { navigate } from 'src/utils/navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import {drawer} from 'src/App'
import { initNotification } from "../../redux/actions/config";
import { useDispatch } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();

  const onPressNotification = () => {
    // dispatch(initNotification());
    navigate('MyNotificationScreen');
  }

  return (
    <Container> 
      <TouchableOpacity
        onPress = {()=>drawer.current.open()}
      >
        <Icon name="menu" size={40} /> 
      </TouchableOpacity>      
      { props.title && <Title>{props.title}</Title> }
      { props.message ? 
        <TouchableOpacity onPress={()=>onPressNotification()}>
          <Image 
            source={require('src/assets/img/dashboard/bell-alert.png')} 
            style={{width: 30, height: 30}} />
          </TouchableOpacity>:
        <View />       
      }
    </Container>
  );
};
export default Header;

const Container = styled(View)`
  width: 100%;
  height: 100px;
  background-color: #15892E;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 20px;
  padding-bottom: 10px;
  align-items: flex-end;
`;
const Title = styled(Text)`
  color: black;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;
