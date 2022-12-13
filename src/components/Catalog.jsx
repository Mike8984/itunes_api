import {StyleSheet, View, FlatList} from 'react-native'
import {useEffect, useState} from 'react'
import TrackItem from './TrackItem'
import {useDispatch, useSelector} from 'react-redux'
import {getItems} from '../store/catalog'
import SearchForm from './SearchForm'

const Catalog = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const items = useSelector(state => state.catalog.items)

  useEffect(() => {
    dispatch(getItems(value))
  }, [value])

  return (
    <View style={styles.body}>
      <SearchForm searchValue={value} setSearchValue={setValue} />
      <View style={styles.wrapper}>
        <FlatList
          data={items}
          keyExtractor={item => item.trackId}
          renderItem={({item}) => <TrackItem item={item} />}
        />
      </View>
    </View>
  )
}

export default Catalog

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {
    flex: 1,
    width: '100%',
  },
})
