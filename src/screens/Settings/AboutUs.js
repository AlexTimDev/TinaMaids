import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Menu from 'src/components/Menu';
import Theme from '../../theme/Theme';
import { connect, useSelector } from "react-redux";

class AboutUs extends React.Component {
  state = {
    currentPwd: "",
    newPwd: "",
    confirmPwd: "",
  };

  componentDidMount () {

  }
  
  componentDidUpdate(prevProps, prevState) {

  }

  onChangeCurrentPassword = (text) => {
    this.setState({currentPwd: text});
  }
  onChangeNewPassword = (text) => {
    this.setState({newPwd: text});
  }
  onChangeConfirmPassword = (text) => {
    this.setState({confirmPwd: text});
  }

  

  render() {

    return (
      <View style={styles.container}>
        <Menu title="About Us" message={false}/>
        <ImageBackground
          source={Theme.aboutus_bkg}
          imageStyle={{
            resizeMode: 'contain',
           }}
          style={{
            height: "100%",
            width: "100%",
            flex: 10,
          }}
        >
        </ImageBackground>

      </View>
    );
  }
}
export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1e9c7',
  },
});
