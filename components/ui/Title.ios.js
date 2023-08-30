import { Text, StyleSheet,Platform } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    //borderWidth: Platform.OS === 'android' ? 2 : 0, // Using Platform :) 1 way Ternary
    //borderWidth: Platform.select({ios:0,android:2}), // Using Platform :) 2 way
    borderWidth: 0,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',// up to 80% of 300PX , lite screens takes less space :) refers to the parent container
    width: 300, //defaults pixels 
  },
});
