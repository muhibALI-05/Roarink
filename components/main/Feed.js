import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../Colors';
import Feed from '../Feed';
import Stories from '../Stories';
import Header from '../Header';
import Favourites from '../Favourites'
import Threads from '../Threads'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export class FeedScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Feed', // Set 'Feed' as the default active tab
    };
  }

  renderHeaderAndStories() {
    return (
      <>
        <Header />
        <View style={styles.storiesWrapper}>
          <Stories />
        </View>
      </>
    );
  }

  renderContent(navigation) {
    const { activeTab } = this.state;

    switch (activeTab) {
      case 'Favourites':
        return (
          <>
            {this.renderHeaderAndStories()}
            {this.renderTabs()}
            <ScrollView style={styles.feedContainer}>
              <Favourites/>
            </ScrollView>
          </>
        );
      case 'Threads':
        return <Threads />;
      default:
        // Render Feed as default
        return (
          <>
            {this.renderHeaderAndStories()}
            {this.renderTabs()}
            <ScrollView style={styles.feedContainer}>
              <Feed navigation={this.props.navigation} />
            </ScrollView>
          </>
        );
    }
  }

  renderTabs() {
    return (
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, this.state.activeTab === 'Favourites' && styles.activeTab]}
          onPress={() => this.setState({ activeTab: 'Favourites' })}
        >
          <Text style={[styles.tabText, this.state.activeTab === 'Favourites' && styles.activeText]}>Favourites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, this.state.activeTab === 'Threads' && styles.activeTab]}
          onPress={() => this.setState({ activeTab: 'Threads' })}
        >
          <Text style={[styles.tabText, this.state.activeTab === 'Threads' && styles.activeText]}>Threads</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderContent()}</View>;
  }
}
export default FeedScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    backgroundColor:'white'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth:1,
    borderColor: 'lightgrey',
    marginLeft:10,
    marginRight:10
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  tabText:{
    fontSize:14,
    color:'#A49797',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute', // Fixed position
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
    width: '100%', // Occupy full width
    backgroundColor: 'white',
  },
  feedContainer: {
    display: 'flex',
  },
  icon: {
    width: 40,
    height: 40,
  },
  logo: {
    width: 150,
    height: '100%',
  },
  headerRightWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  storiesWrapper: {
    marginTop:-45
  },
  activeTab: {
    borderBottomWidth:2,
    borderBottomColor:'#0BCC9E'
  },
  activeText:{
    fontWeight: 'bold',
    color:'black'
  },
});