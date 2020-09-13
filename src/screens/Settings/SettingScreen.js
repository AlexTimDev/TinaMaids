import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { navigate } from 'src/utils/navigation';
import Menu from '../../components/Menu';
import Theme from 'src/theme/Theme';
import { connect, useSelector } from "react-redux";

class SettingScreen extends React.Component {
  state = {
    loading: false,
  };

  componentDidMount () {

  }
  
  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Menu title="Settings" message={false}/>
        { loading && 
          <ActivityIndicator style={styles.spinnerStyle} animating={loading} size="large" color={'lightgreen'} />
        }
        
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigate('MyAccount')}>
          <View style={styles.contentContainer}>
              <Text numberOfLines={1} style={styles.textContent}>My Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigate('ChangePassword')}>
          <View style={styles.contentContainer}>
              <Text numberOfLines={1} style={styles.textContent}>Change Password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigate('AboutUs')}>
          <View style={styles.contentContainer}>
              <Text numberOfLines={1} style={styles.textContent}>About Us</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemContainer} onPress={() => navigate('FranchiseOpportunity')}>
          <View style={styles.contentContainer}>
              <Text numberOfLines={1} style={styles.textContent}>Franchise Opportunities</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    );
  }
}
export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
  },
  itemContainer: {
    height: 70,
    width: "100%",
    paddingLeft: 30,
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  textContent: {
    color: Theme.black,
    fontSize: Theme.fontSubTitle,
    paddingVertical: 2,
  },
  spinnerStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    justifyContent: "center",
  },

});
