import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image
} from 'react-native';

import { Button } from '@components/Button'
import { Input } from '@components/Input'

import styles from './Login.styles'

const Login = () => {

    const [username, setUsername] = useState('')

    return (
       <SafeAreaView>
           <View style={styles.mainContainer}>
               <View style={styles.imageContainer}>
                 <Image
                    source={{
                        uri: 'https://github.blog/wp-content/uploads/2012/03/codercat.jpg?resize=896%2C896',
                    }}
                    style=
                    {styles.image}
                 />

               </View>
               <View style={styles.fieldContainer}>
                <ScrollView>
                    <Input
                            label='Your github e-mail address'
                            value={username}
                            theme= { {colors: 'BLUE'} }
                            onChangeText={text => setUsername(text)}
                        />
                </ScrollView>
               </View>
               <View style={styles.buttonContainer}>

                    <Button text= "Next"/>
        
               </View>
           </View>
       </SafeAreaView> 

    )
}

export default Login
