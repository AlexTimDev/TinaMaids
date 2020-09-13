import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
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

class NewMessage extends React.Component {
  state = {
    recipientMethod: "1",
    selected: "Inbox",
    loading: false,
    title: "",
    message: "",
  };

  componentDidMount () {
  }
  
  componentDidUpdate(prevProps, prevState) {
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
    const { loading, selected, recipientMethod } = this.state;

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
          <DropDownPicker
            items={dropData}
            placeholder="Choose recipient"
            // defaultValue={recipientMethod}
            containerStyle={{height: 40, width: "100%"}}
            style={{backgroundColor: 'white',  borderWidth: 0.5}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            labelStyle={{
              fontSize: Theme.fontSubTitle,
              textAlign: 'left',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => this.setState({
                recipientMethod: item.value
            })}
          />
        <Text style={[styles.title, {marginTop: 15}]}>Title:</Text>
        <TextInput
            style={styles.input}
            placeholder={""}
            onChangeText={(text) => this.onChangeTitle(text)}
            value={this.state.title}
        />

        <Text style={styles.title}>Your message:</Text>
        <TextInput
            style={styles.areatext}
            multiline={true}
            // numberOfLines={5}
            textAlignVertical = "top"
            paddingHorizontal={12}
            onChangeText={(text) => this.onChangeMessage(text)}
            value={this.state.message}
        />

        <Text style={styles.title}>Attachment:</Text>

        <View style={{flexDirection: "row"}}>
          <TouchableOpacity style={styles.btnBrowserWrapper} onPress={() => console.log('aaa')}>
            <Text style={styles.btnBrowse}>
              Browse...
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnSendWrapper} onPress={() => navigate('MyMessageScreen', {messageSent: true})}>
            <Text style={styles.btnSend}>
              Send
            </Text>
        </TouchableOpacity>

        </View>

        
      </View>
    );
  }
}
export default NewMessage;

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
    marginTop: 10,
    paddingHorizontal: 20
  },
  title: {
    marginVertical: 8,
    color: Theme.black,
    fontSize: Theme.fontSubTitle,
    fontWeight: "bold"
  },
  input: {
    paddingBottom: 8,
    height: 40,
    width: "100%",
    fontSize: 15,
    paddingHorizontal: 15,
    borderColor: "#c7c7c7",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: Theme.fontText
  },
  areatext: {
    height: 120,
    borderColor: "#c7c7c7",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: Theme.fontText
  },
  btnBrowserWrapper: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#c7c7c7",
    backgroundColor: Theme.white,

  },
  btnBrowse: {
    color: Theme.black,
    fontSize: Theme.fontSubTitle,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },

  btnSendWrapper: {
    marginTop: 35,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#c7c7c7",
    backgroundColor: Theme.primary,
  },
  btnSend: {
    color: Theme.white,
    fontSize: Theme.fontSubTitle,
    paddingHorizontal: 12,
    paddingVertical: 8,
    textAlign: "center"
  },
});
