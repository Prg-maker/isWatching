import { Text, View , StyleSheet , TouchableOpacity , Animated  } from 'react-native'
import {
  styles
} from './styles'
    
import { HandEye} from 'phosphor-react-native'
import { useState , useEffect } from 'react'
import { api } from '../../api'
    
export function IsWatching (){

  const [visualization , setVisualization] = useState(false)
  const [Animation] =useState(new Animated.Value(0))

  const [vizu , setVizu] = useState()

  function handleToggleTheme(){
    setVisualization(!visualization)
  }

  useEffect(()=> {
    
    async function get(){
      const {data} = await api.get('/')
      setVizu(data.visualization)
      
    }

    get()


  }, [])

  return(
    <View style={styles.container}>

      <View  style={styles.content}>

        <TouchableOpacity onPressOut={handleToggleTheme}>
          <HandEye size={35}/>
        </TouchableOpacity>

        {
          visualization &&   <Text> <Text>{vizu}</Text> visualições</Text>
        }
      
      </View>
    </View>
  )
}