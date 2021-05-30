import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Box, SubTitle, SubTitlebar } from '../../style/Language';
import { Radio } from 'native-base';

const Box_lang = ({ SubTitle_box, SubTitlebar_box }) => {
  return (
    <Box>
      <View style={{ flexDirection: 'column' }}>
        <SubTitle>{SubTitle_box}</SubTitle>
        <SubTitlebar>{SubTitlebar_box}</SubTitlebar>
      </View>
      <Radio selected={true} style={styles.Radiobutton} />
    </Box>
  );
};
const styles = StyleSheet.create({
  Radiobutton: {
    marginLeft: 40,
    marginTop: 14,
  },
});

export default Box_lang;
