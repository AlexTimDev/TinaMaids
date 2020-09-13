import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'src/theme';
import { navigate } from 'src/utils/navigation';
import Menu from 'src/components/Menu'
import DropDownPicker from 'react-native-dropdown-picker'
import Theme from 'src/theme/Theme';


const dropData = [
    
    {label: 'How soon can you guys come and clean my house?', value: '1'},
    {label: 'Receiption 2', value: '2'},
    {label: 'Receiption 3', value: '3'},
  ]

  state = {
    recipientMethod: "1",
    selected: "Inbox",
    loading: false,
    title: "",
    message: "",
  };
const Support = () => {
  return (
    <ScrollView>
        <Container>      
          <Menu title="Get Help"/>
          <Image 
            source={require('src/assets/img/support/support.png')} 
            style={{width: '100%'}}  
            resizeMode="stretch"
          />
          <Separator />
          <Title>Call Us(Mon-Fri 9am-5pm EST)</Title>
          <TouchableOpacity onPress={()=>navigate ('Blog')}>
            <Description textColor={Colors.textColor}>1(866) 49MAIDS</Description>
          </TouchableOpacity>
          <SpeakerButton 
            bgColor={Colors.textColor}
            onPress={()=>navigate('SpeakScreen')}
          >
            <Image source={require('src/assets/img/support/speaker.png')} />
            <ButtonTitle>I need to speak to someone</ButtonTitle>
          </SpeakerButton>
          <CalendarButton 
            bgColor={Colors.textColor}
            onPress={()=>navigate('MyEstimate')}
          >
            <Image source={require('src/assets/img/support/calendar.png')} />
            <ButtonTitle>I want to book a cleaning</ButtonTitle>
          </CalendarButton>
          <Content>You can also browse through our Frequently Asked Questions </Content>
          
          <DropDownPicker
            items={[]}
            defaultIndex={0}          
            // onChangeItem={item => this.setState({roomID: item.value})}
            containerStyle={{width: '90%', borderRadius: 30, height: 70, marginTop: 30,  backgroundColor: '#fafafa'}}
            style={{borderWidth: 1,borderColor: 'grey', borderRadius: 10}}   
            placeholder="How soon can you guys come and clean my house?"      
          />

          <DropDownPicker
            items={[]}
            defaultIndex={0}          
            // onChangeItem={item => this.setState({roomID: item.value})}
            containerStyle={{width: '90%', borderRadius: 30, height: 70, marginTop: 20,  backgroundColor: '#fafafa'}}
            style={{borderWidth: 1,borderColor: 'grey', borderRadius: 10}}   
            placeholder="How soon can you guys come and clean my house?"      
          />
          <DropDownPicker
            items={[]}
            defaultIndex={0}          
            // onChangeItem={item => this.setState({roomID: item.value})}
            containerStyle={{width: '90%', borderRadius: 30, height: 70, marginTop: 20,  backgroundColor: '#fafafa'}}
            style={{borderWidth: 1,borderColor: 'grey', borderRadius: 10}}   
            placeholder="How soon can you guys come and clean my house?"      
          />
          <DropDownPicker
            items={[]}
            defaultIndex={0}          
            // onChangeItem={item => this.setState({roomID: item.value})}
            containerStyle={{width: '90%', borderRadius: 30, height: 70, marginTop: 20,  backgroundColor: '#fafafa'}}
            style={{borderWidth: 1,borderColor: 'grey', borderRadius: 10}}   
            placeholder="How soon can you guys come and clean my house?"      
          />
          <DropDownPicker
            items={[]}
            defaultIndex={0}          
            // onChangeItem={item => this.setState({roomID: item.value})}
            containerStyle={{width: '90%', borderRadius: 30, height: 70, marginTop: 20,  backgroundColor: '#fafafa'}}
            style={{borderWidth: 1,borderColor: 'grey', borderRadius: 10}}   
            placeholder="How soon can you guys come and clean my house?"      
          />
          <DropDownPicker
            items={[]}
            defaultIndex={0}          
            // onChangeItem={item => this.setState({roomID: item.value})}
            containerStyle={{width: '90%', borderRadius: 30, height: 70, marginTop: 20,  backgroundColor: '#fafafa'}}
            style={{borderWidth: 1,borderColor: 'grey', borderRadius: 10}}   
            placeholder="How soon can you guys come and clean my house?"      
          />
          <DropDownPicker
            items={[]}
            defaultIndex={0}          
            // onChangeItem={item => this.setState({roomID: item.value})}
            containerStyle={{width: '90%', borderRadius: 30, height: 70, marginTop: 20,  backgroundColor: '#fafafa'}}
            style={{borderWidth: 1,borderColor: 'grey', borderRadius: 10}}   
            placeholder="How soon can you guys come and clean my house?"      
          />
          <DropDownPicker
            items={[]}
            defaultIndex={0}          
            // onChangeItem={item => this.setState({roomID: item.value})}
            containerStyle={{width: '90%', borderRadius: 30, height: 70, marginTop: 20,  backgroundColor: '#fafafa'}}
            style={{borderWidth: 1,borderColor: 'grey', borderRadius: 10}}   
            placeholder="How soon can you guys come and clean my house?"      
          />
          <DropDownPicker
            items={[]}
            defaultIndex={0}          
            // onChangeItem={item => this.setState({roomID: item.value})}
            containerStyle={{width: '90%', borderRadius: 30, height: 70, marginTop: 20,  backgroundColor: '#fafafa'}}
            style={{borderWidth: 1,borderColor: 'grey', borderRadius: 10}}   
            placeholder="How soon can you guys come and clean my house?"      
          />
          <DropDownPicker
            items={[]}
            defaultIndex={0}          
            // onChangeItem={item => this.setState({roomID: item.value})}
            containerStyle={{width: '90%', borderRadius: 30, height: 70, marginTop: 20,  backgroundColor: '#fafafa'}}
            style={{borderWidth: 1,borderColor: 'grey', borderRadius: 10}}   
            placeholder="How soon can you guys come and clean my house?"      
          />
          
          <Footer />
        </Container>
    </ScrollView>
  );
};
export default Support;

const Container = styled(View)`
  flex: 1;
  align-items: center;
`;
const Separator = styled(View)`
  width: 90%;
  height: 50px;
  border-bottom-width: 1px;
  border-color: grey;
`;
const Title = styled(Text)`
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;
const Description = styled(Text)`
  font-size: 25px;
  margin-top: 20px;
  color: ${props=>props.textColor};
  text-align: center;
`;
const SpeakerButton = styled(TouchableOpacity)`
  width: 90%;
  height: 50px;
  background-color: ${props=>props.bgColor};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
const CalendarButton = styled(TouchableOpacity)`
  width: 85%;
  height: 50px;
  background-color: ${props=>props.bgColor};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
const ButtonTitle = styled(Text)`
  font-size: 20px;
  color: white;
  text-align: center;
  margin-left: 10px;
  font-weight: 700;
`
const Content = styled(Text)`
  font-size: 16px;
  color: grey;
  text-align: center;
  margin-top: 30px;
`
const Footer = styled(View)`
 height: 20px;
`
