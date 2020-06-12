export default {
  navigationOptions: ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible
    }
  },
  defaultNavigationOptions: null,
  animationEnabled: false,
  mode: 'modal',
  headerMode: 'screen'
}