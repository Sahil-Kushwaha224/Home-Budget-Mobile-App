import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';
import InputFieldStyles from '../styles/InputFieldStyles';
import TypographyStyles from '../styles/TypographyStyles';


const InputField = ({ title, keyboardType, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={InputFieldStyles.container}>
      <Text style={TypographyStyles.regularText}>{title}</Text>
      <TextInput
        style={[
          InputFieldStyles.textInputBase,
          isFocused ? InputFieldStyles.textInputOnFocus : InputFieldStyles.textInputOnBlur
        ]}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={onChange}
        placeholder={title} 
        returnKeyType="next" 
      />
    </View>
  );
};

export default InputField;
