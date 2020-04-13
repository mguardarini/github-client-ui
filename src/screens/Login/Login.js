import React, {useState} from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';

import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { GithubLogo }  from '@components/GithubLogo'

import styles from './Login.styles'

const Login = ({navigation}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    navigation.setOptions({
        headerShown: true,
        headerTitle: 'Welcome Github Client',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white',
        }
    })

    return (
       <SafeAreaView style={styles.mainContainer}>
           <View style={styles.mainContainer}>
               <View style={styles.imageContainer}>
                <GithubLogo
                      source='https://github.blog/wp-content/uploads/2012/03/codercat.jpg?resize=896%2C896'
                      style={styles.image}
                  />
               </View>
               <View style={styles.fieldContainer}>
                    <Input
                            label='Your github e-mail address'
                            value={username}
                            onChangeText={login => setUsername(login)}
                        />
               </View>
               <View style={styles.fieldContainer}>
                    <Input
                            label='Password'
                            value={password}
                            onChangeText={password => setPassword(password)}
                        />
               </View>
               <View style={styles.buttonContainer}>
                    <Button text= "Log in"/>
               </View>
           </View>
       </SafeAreaView> 
    )
}

export default Login
