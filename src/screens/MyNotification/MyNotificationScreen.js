import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Menu from 'src/components/Menu';
import Theme from 'src/theme/Theme';
import Notification from 'src/components/Notification/Notification'
import { connect } from "react-redux";

const notifyData = [
  {
    id: 1,
    type: "estimate",
    title: "New Estimate Price",
    message: "Questions about my past experience and project",
    date: "May 14 2020",
    time: "4: 30 PM",
    check: true,
  },
  {
    id: 2,
    type: "message",
    title: "New Message",
    message: "Questions about my past experience and project",
    date: "Sep 9 2020",
    time: "2: 59 PM",
    check: false,
  },
  {
    id: 3,
    type: "estimate",
    title: "New Estimate Price",
    message: "Questions about my past experience and project",
    date: "May 14 2020",
    time: "4: 30 PM",
    check: true,
  },
  {
    id: 4,
    type: "message",
    title: "New Message",
    message: "Questions about my past experience and project",
    date: "Sep 9 2020",
    time: "2: 59 PM",
    check: false,
  },
  {
    id: 5,
    type: "estimate",
    title: "New Estimate Price",
    message: "Questions about my past experience and project",
    date: "May 14 2020",
    time: "4: 30 PM",
    check: true,
  },
  {
    id: 6,
    type: "message",
    title: "New Message",
    message: "Questions about my past experience and project",
    date: "Sep 9 2020",
    time: "2: 59 PM",
    check: false,
  },
  {
    id: 7,
    type: "estimate",
    title: "New Estimate Price",
    message: "Questions about my past experience and project",
    date: "May 14 2020",
    time: "4: 30 PM",
    check: true,
  },
  {
    id: 8,
    type: "message",
    title: "New Message",
    message: "Questions about my past experience and project",
    date: "Sep 9 2020",
    time: "2: 59 PM",
    check: false,
  },
]


class MyNotificationScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
    }
  }
  
  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Menu title="My Notifications" message={false}/>
        { loading && 
          <ActivityIndicator style={styles.spinnerStyle} animating={loading} size="large" color={'lightgreen'} />
        }
        
        <FlatList
            data={this.props.notifyData}
            renderItem={({ item }) =>
                <Notification
                    item={item}
                    // navigation={this.props.navigation}
                />}

            keyExtractor={item => item.id}
            ListFooterComponent={<View style={{height: 55}}></View>}
        />

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { notifyData } = state.config;
  return {
    notifyData
  };
};

export default connect(
  mapStateToProps,
  {},
)(MyNotificationScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.white,
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
