import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { navigate } from 'src/utils/navigation';
import OneSignal from 'react-native-onesignal';
import { connect } from "react-redux";
import { addNotification } from "../../redux";
import Menu from 'src/components/Menu';
import Header from './Header'
import Content from './Content'

let _this = null;
class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    
    _this = this;

    //Remove this method to stop OneSignal Debugging 
    OneSignal.setLogLevel(6, 0);
    
    // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
    OneSignal.init("2084fe55-dee1-4e62-a03c-4694f96e6f17", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
    
    // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
    //OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    
    this.state = {
        isNotify: false,
    }
  }

  componentDidMount () {
    if (this.props.isReadNotify == false)
      this.setState({isNotify: true})
    else
      this.setState({isNotify: false})
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isReadNotify != this.props.isReadNotify) {
      if (this.props.isReadNotify == false)
        this.setState({isNotify: true})
      else
        this.setState({isNotify: false})
    }
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    // console.log("Notification received: ", notification);
    const bigPicture = notification.payload.bigPicture;
    const body = notification.payload.body;
    const launchURL = notification.payload.launchURL;
    const title =  notification.payload.title;

    const notifyData = {
      id: new Date().getTime(),
      title,
      message: body,
      bigPicture,
      launchURL,
      type: "message",
      date: new Date(),
      check: false,
    }

    _this.props.addNotification(notifyData);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
    
    navigate('MyNotificationScreen');
  }
  
  onIds(device) {
    // console.log('Device info: ', device);
  }
  render() {
    const { isNotify } = this.state;

    return (
      <ScrollView>
        <Container>      
          <Menu message={isNotify}/>
          <Header />
          <Content />
        </Container>
      </ScrollView>
    );
  }
};

const mapStateToProps = (state) => {
  const { notifyData, isReadNotify } = state.config;
  return {
    notifyData,
    isReadNotify
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    addNotification: (data) => dispatch(addNotification(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

const Container = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
`;
