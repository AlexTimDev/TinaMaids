import React, { version } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { navigate } from 'src/utils/navigation';
import Menu from 'src/components/Menu';
import Colors from 'src/theme/Colors';
import Theme from 'src/theme/Theme';
import Inbox from 'src/components/MyMessage/Inbox'
import { connect, useSelector } from "react-redux";
import DropDownPicker from 'react-native-dropdown-picker';

const dropData = [
  // {label: 'Receiption 1', value: '1', icon: () => <Icon name="flag" size={18} color="#900" />},
  {label: 'Receiption 1', value: '1'},
  {label: 'Receiption 2', value: '2'},
  {label: 'Receiption 3', value: '3'},
]

class MessageDetail extends React.Component {
  state = {
    recipientMethod: "1",
    selected: "Inbox",
    loading: false,
    title: "",
    item: this.props.navigation.state?.params?.item,
  };

  componentDidMount () {
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.navigation.state.params?.item.id != this.props.navigation.state.params?.item.id)
    {
      this.setState({item: this.props.navigation.state?.params?.item})
    }
  }

  onPressHistory = () => {
    const {
      selected,
    } = this.state;

    this.setState({selected: "History"})
    navigate('MyMessageScreen', {selected: 'History'});
  };

  onPressInbox = () => {
    const {
      selected,
    } = this.state;

    this.setState({selected: "Inbox"})
    navigate('MyMessageScreen', {selected: 'Inbox'});
  };

  onChangeTitle = (text) => {
    this.setState({
        title: text,
    })
  }

  onChangeMessage = (text) => {
      this.setState({
          message: text,
      })
  }


  render() {
    const { loading, selected, item } = this.state;

    return (
      <View style={styles.container}>
        <Menu title="My Messages" message={false}/>
        { loading && 
          <ActivityIndicator style={styles.spinnerStyle} animating={loading} size="large" color={'lightgreen'} />
        }
        
        <View style={{height: 2}}></View>
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

        <View style={styles.body}>
          <Text style={styles.title}>Message</Text>

          <Text style={styles.message}>
            {item.message}
          </Text>

          <View style={{height: 15}}></View>
          <View style={styles.line}></View>
          <View style={{height: 15}}></View>
          <Text style={styles.message}>
            {item.message}
          </Text>
          <View style={{height: 15}}></View>
          <View style={{flexDirection: "row", justifyContent: "center"}}>
            <TouchableOpacity style={styles.btnSendWrapper} onPress={() => navigate('MessageReply', {messageSent: true})}>
                <Text style={styles.btnSend}>
                  Reply
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default MessageDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white
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
  body: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  title: {
    marginVertical: 10,
    color: Theme.black,
    fontSize: Theme.fontTitle,
    fontWeight: "bold"
  },
  message: {
    marginVertical: 10,
    color: Theme.black,
    fontSize: Theme.fontSubTitle,
  },
  btnSendWrapper: {
    marginTop: 35,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#c7c7c7",
    backgroundColor: Theme.primaryDark,
  },
  btnSend: {
    color: Theme.white,
    fontSize: Theme.fontSubTitle,
    paddingHorizontal: 60,
    paddingVertical: 4,
    textAlign: "center"
  },
  line: {
    borderColor: Theme.black,
    opacity: 0.5,
    borderWidth: 0.5
  }
});
