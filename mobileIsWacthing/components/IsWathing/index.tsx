import { Text, View } from 'react-native'
import {
  styles
} from './styles'
    


import {HandEye} from 'phosphor-react-native'
    
export function IsWatching (){
  return(
    <View style={styles.container}>

      <View style={styles.content}>
        <HandEye size={35}/>
        <Text> <Text>12</Text> visualições</Text>
      </View>
    </View>
  )
}