import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {

  const { TEXTSTYLE, BUTTONSTYLE } = styles;

  return (
    <TouchableOpacity style={BUTTONSTYLE} onPress={onPress}>
       <Text style={TEXTSTYLE}>
         {children}
       </Text>
    </TouchableOpacity>
  );
};


const styles = {
  TEXTSTYLE: {
    alignSelf: 'center',
    color: 'blue',
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  BUTTONSTYLE: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
    marginLeft: 5,
    marginRight: 5
  }
}

export default Button;
