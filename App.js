import {StyleSheet, View, TextInput, FlatList} from 'react-native'
import { Input } from '@rneui/base'
import {useEffect, useState} from 'react'
import axios from 'axios'
import TrackItem from './components/TrackItem'

const App = () => {
  const [value, setValue] = useState('')
  const [items, setItems] = useState([])

  let url = 'https://itunes.apple.com/search?term=' + value

  const getData = () => {
    axios
      .get(url)
      .then(res => setItems(res.data.results))
      .catch(error => error)
  }

  useEffect(() => {
    getData()
  }, [value])

  return (
    <View style={styles.body}>
      <View style={styles.wrapperForm}>
        <Input
          value={value}
          onChangeText={text => setValue(text)}
        />
      </View>
      <View style={styles.wrapper}>
        <FlatList
          data={items}
          keyExtractor={item => item.trackId}
          renderItem={({item}) => <TrackItem {...item} />}
        />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperForm: {
    width: '100%',
  },
  wrapper: {
    flex: 1,
    width: '100%',
  }
})
