import React from 'react'
import {
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native'
import styled from 'styled-components/native'

const Header = (props) => {
  return (
    <Container source={require('src/assets/img/dashboard/top-bg.png')}>
      <Image source={require('src/assets/img/dashboard/logo.png')} />
      <ContentContainer>
        <Image source = {require('src/assets/img/dashboard/tree.png')} style={{marginLeft: 15}} />
        <UserContainer>
          <SunContainer>
            <Image source={require('src/assets/img/dashboard/sun.png')} />
          </SunContainer>
          <WelcomeContainer>
            <WelcomeTitle>Welcome</WelcomeTitle>
            <User>William Geronco</User>
          </WelcomeContainer>
        </UserContainer>
      </ContentContainer>  
    </Container>
  )
}

export default Header

const Container = styled(ImageBackground)`
  width: 100%;
  height: 287px;
  border-bottom-width: 3px;
  align-items: center;
`
const ContentContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`
const UserContainer = styled(View)`
  flex-direction: column;
  flex: 1;
  height: 100%;
`
const SunContainer = styled(View)`
  align-items: flex-end;
  flex: 1;
  padding-right: 10px;
  padding-top: 20px;
`
const WelcomeContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const WelcomeTitle = styled(Text)`
  fontSize: 40px;
  color: #15892E;
`
const User = styled(Text)`
  fontSize: 25px;
  color: #15892E;
`