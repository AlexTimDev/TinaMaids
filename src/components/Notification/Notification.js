import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { navigate } from 'src/utils/navigation';
import Theme from "../../theme/Theme";
import moment from "moment"
import { connect } from "react-redux";
import { updateNotification } from "../../redux";

class Notification extends React.Component {
    onPressItem = () => {
      const {item} = this.props;
      let newItem = {
        ...item,
        check: true,
      }

      this.props.updateNotification(newItem);

      if (item.type == "message")
        navigate('MessageDetail', {item: item})
      else if (item.type == "estimate")
        navigate('PersonalInfo', {accept: false})
    }

    render() {
        console.log(this.props.item)
        return (
            <TouchableOpacity style={styles.container} onPress={() =>this.onPressItem()}>
              <View style={styles.contentContainer}>
                <View style={{flex: 10}}>
                  <View style={{ flexDirection: 'row'}}>
                        <Text numberOfLines={1} style={{ color: Theme.black, fontSize: Theme.fontSubTitle }}>{this.props.item.title}</Text>
                        {/* <View style={{flex: 1}}>
                          <Text numberOfLines={1} style={{ color: Theme.black, fontSize: Theme.fontText }}>{this.props.item.message}</Text>
                        </View> */}
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 3 }}>
                        <Text numberOfLines={1} style={{ color: Theme.black, fontSize: Theme.fontText }}>{moment(this.props.item.date).format('MMM DD YYYY')} - </Text>
                        <Text numberOfLines={1} style={{ color: Theme.black, fontSize: Theme.fontText }}>{moment(this.props.item.date).format('h:mm A')}</Text>
                  </View>
                </View>

                <View style={{flex: 1}}>
                  {!this.props.item.check && <View style={styles.circle}/>}
                </View>
              </View>

              <View style={styles.line}></View>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state) => {
  const { notifyData } = state.config;
  return {
    notifyData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    updateNotification: (data) => dispatch(updateNotification(data)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  line: {
      borderColor: Theme.black,
      opacity: 0.5,
      borderWidth: 0.5
  },
  circle: {
    alignSelf: "flex-end",
    width: 1,
    borderRadius: 5,
    borderWidth:5,
    borderColor: Theme.primary,
  }
});