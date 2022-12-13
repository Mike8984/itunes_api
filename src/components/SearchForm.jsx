import React from 'react'
import {View, StyleSheet} from 'react-native'
import {Input} from '@rneui/base'



const SearchForm = ({searchValue, setSearchValue}) => {
  return (
    <View style={styles.wrapperForm}>
      <Input value={searchValue} onChangeText={text => setSearchValue(text)} />
    </View>
  )
}

export default SearchForm

const styles = StyleSheet.create({
  wrapperForm: {
    width: '100%',
  },
})
