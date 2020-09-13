import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { navigate } from 'src/utils/navigation';
import Menu from 'src/components/Menu';
import Colors from 'src/theme/Colors';
import Theme from 'src/theme/Theme';
import Inbox from 'src/components/MyMessage/Inbox'
import { connect, useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons'

const messageData = [
  {
    id: 1,
    sendername: "Jonnas Doe",
    message: "Questions about my past experience and project",
    date: "May 14 2020",
    time: "4: 30 PM",
  },
  {
    id: 2,
    sendername: "Jone Smith",
    message: "Questions about my past experience and project",
    date: "Aug 24 2020",
    time: "3:20 PM",
  },
  {
    id: 3,
    sendername: "Lucas Sem",
    message: "Questions about my past experience and project",
    date: "May 14 2020",
    time: "4:30 PM",
  },
  {
    id: 4,
    sendername: "Lucas Sem",
    message: "Questions about my past experience and project",
    date: "May 14 2020",
    time: "4:30 PM",
  },
  {
    id: 5,
    sendername: "Lucas Sem",
    message: "Questions about my past experience and project",
    date: "May 14 2020",
    time: "4:30 PM",
  },
  {
    id: 6,
    sendername: "Lucas Sem",
    message: "Questions about my past experience and project",
    date: "May 14 2020",
    time: "4:30 PM",
  },
  {
    id: 7,
    sendername: "Jonnas Doe",
    message: "Questions about my past experience and project",
    date: "May 14 2020",
    time: "4:30 PM",
  },
  {
    id: 8,
    sendername: "Jonnas Doe",
    message: "Questions about my past experience and project",
    date: "May 14 2020",
    time: "4:30 PM",
  },
]

const historyData = [
  {
    id: 1,
    sendername: "Lonmeia Doe",
    message: "This is test data for history",
    date: "Feb 14 2020",
    time: "8: 54 AM",
  },
  {
    id: 2,
    sendername: "Durkaie caie",
    message: "This is test data for history",
    date: "Sep 12 2020",
    time: "3: 22 PM",
  },
]

class MyMessageScreen extends React.Component {
  state = {
    selected: "Inbox",
    loading: false,
    messageSent: false,
  };

  componentDidMount () {

  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.navigation.state.params?.selected != this.props.navigation.state.params?.selected)
    {
      this.setState({selected: this.props.navigation?.state?.params?.selected != undefined ? 
        this.props.navigation?.state?.params?.selected : "Inbox"})
    }

    if(prevProps.navigation.state.params?.messageSent != this.props.navigation.state.params?.messageSent)
    {
      this.setState({messageSent: this.props.navigation?.state?.params?.messageSent != undefined ? 
        this.props.navigation?.state?.params?.messageSent : false})
    }
  }

  onPressHistory = () => {
    const {
      selected,
    } = this.state;

    this.setState({selected: "History"})
  };

  onPressInbox = () => {
    const {
      selected,
    } = this.state;

    this.setState({selected: "Inbox"})
  };

  onPressMessageClose = () => {
    this.setState({messageSent: false});
    this.props.navigation.setParams({messageSent: false})
  }
  render() {
    const { loading, selected, messageSent } = this.state;

    return (
      <View style={styles.container}>
        <Menu title="My Messages" message={false}/>
        { loading && 
          <ActivityIndicator style={styles.spinnerStyle} animating={loading} size="large" color={'lightgreen'} />
        }
        <View style={{flexDirection: "row-reverse"}}>
          <TouchableOpacity style={styles.newMessageContainer} onPress={() => navigate('NewMessage')}>
            <Text style={styles.newMessage}>
              New Message
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flexDirection: "row"}}>
          <TouchableOpacity style={[styles.btnTabContainer,{marginRight: 2}]} onPress={this.onPressInbox}>
            <Text style={ [styles.btnTab, selected == "Inbox" ? {backgroundColor: Theme.primaryDark} : {backgroundColor: Theme.primary}]}>
              Inbox
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnTabContainer,{marginLeft: 2}]} onPress={this.onPressHistory}>
            <Text style={ [styles.btnTab, selected == "History" ? {backgroundColor: Theme.primaryDark} : {backgroundColor: Theme.primary}]}>
              History
            </Text>
          </TouchableOpacity>
        </View>

        { selected == "Inbox" ? 
          <FlatList
              data={messageData}
              renderItem={({ item }) =>
                  <Inbox
                      item={item}
                      // navigation={this.props.navigation}
                  />}

              keyExtractor={item => item.id}
              ListFooterComponent={<View style={{height: 55}}></View>}
          />
          :
          <FlatList
            data={historyData}
            renderItem={({ item }) =>
                <Inbox
                    item={item}
                    // navigation={this.props.navigation}
                />}

            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{height: 55}}></View>}
          />
        }

      { messageSent == true && 
        <View style={styles.modal}>
          <View style={{position: "absolute", top: 5, right: 5}}>
            <TouchableOpacity onPress={()=>this.onPressMessageClose()}>
              <Icon name="close" size={40} color={Theme.white}/> 
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', justifyContent: "center", alignSelf: "center"}}>
            <Text style={styles.textMessage}>
              Message Sent
            </Text>
            <Text style={styles.textMessage}>
              Successfully
            </Text>
          </View>
        </View>
      }
      </View>
    );
  }
}
export default MyMessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  newMessageContainer: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: Theme.primaryDark
  },
  newMessage: {
    color: Theme.white,
    fontSize: Theme.fontSubTitle,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  btnTabContainer: {
    flex: 1,

  },
  btnTab: {
    color: Theme.white,
    fontSize: Theme.fontSubTitle,
    paddingVertical: 8,
    paddingHorizontal: 12,
    textAlign: "center",
  },
  spinnerStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    justifyContent: "center",
  },
  modal: {
    position: 'absolute',
    top: 200,
    justifyContent: "center",
    alignSelf: "center",
    width: "60%",
    height: 160,
    borderRadius: 8,
    backgroundColor: Theme.primaryDark
  },
  textMessage: {
    color: Theme.white,
    fontSize: Theme.fontSubTitle,
    paddingVertical: 2,
  }
});
