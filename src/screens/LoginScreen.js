import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'src/theme';

const LoginScreen = ({navigation}) => {
  return (
    <BackgroundContainer source={require('src/assets/img/login/bg.png')}>     
      <ScrollView>
        <Container>
          <TitleContainer>
            <Title>Welcome!</Title>
          </TitleContainer>
          <Introduction textColor='black'>Existing Customers</Introduction>
          <Input placeholder="Username" 
            placeholderTextColor = "#15892E"
          />
          <Input placeholder="Password" 
            placeholderTextColor = "#15892E"
          />
          <Button onPress={() => navigation.navigate('App')} bgColor={Colors.textColor}>
            <ButtonTitle textColor='white'>Login</ButtonTitle>
          </Button>
          <ForgotButton >
            <ForgotTitle>Forgot your password?</ForgotTitle>
          </ForgotButton>
          
          <CustomerTitle>New Customer?</CustomerTitle>
          <Button onPress={() => navigation.navigate('InformationScreen')} bgColor='#F9CC34'>
            <ButtonTitle textColor='black'>Request An Estimate</ButtonTitle>
          </Button>
          <View style={{height: 30}} />
        </Container>
      </ScrollView>
    </BackgroundContainer>
    
  );
};
export default LoginScreen;

const BackgroundContainer = styled(ImageBackground)`
  flex: 1;
`;
const Container = styled(View)`
  flex: 1;
  align-items: center;
`;
const Title = styled(Text)`
  color: white;
  font-size: 39px;
  font-weight: bold;
  padding-bottom: 10px;
  text-align: center;
`;
const TitleContainer = styled(View)`
  margin-top: 56px;
  margin-bottom: 20px;
  border-bottom-width: 5px;
  width: 70%;
`
const Input = styled(TextInput)`
  width: 80%;
  height: 80px;
  font-size: 20px;
  border-radius: 10px;
  padding-left: 14px;
  margin-bottom: 25px;
  background-color: white;
`;
const Button = styled(TouchableOpacity)`
  width: 80%;
  height: 80px;
  border-radius: 10px;
  background-color: #15892E;
  justify-content: center;
  align-items: center;
  border-width: 3px;
  background-color: ${(props) => props.bgColor};
`;
const ButtonTitle = styled(Text)`
  height: 40px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.textColor};
`;
const Introduction = styled(Text)`
  height: 40px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 25px;
  color: ${(props) => props.textColor};
`;

const ForgotButton = styled(TouchableOpacity)`
  margin-top: 10px;
`
const ForgotTitle = styled(Text)`
  height: 30px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 35px;
  font-weight: 700;
`;
const CustomerTitle = styled(Text)`
  height: 40px;
  text-align: center;
  font-size: 30px;
  margin-bottom: 15px;
  font-weight: 700;
`;
