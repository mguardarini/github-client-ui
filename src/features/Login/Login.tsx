import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {Buffer} from 'buffer';
import {Button} from '@components/Button';
import {Input} from '@components/Input';
import {Image} from '@components/Image';
import {GithubLoginAPI} from '@/infrastructure/api/GithubLoginAPI';
import styles from './Login.styles.ts';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  navigation.setOptions({
    headerShown: true,
    headerTitle: 'Welcome Github Client',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#00A1F1',
    },
    headerTitleStyle: {
      color: '#FFF',
    },
  });

  const authenticateUser = async (login, password) => {
    const basicOAuth = `${login}:${password}`;
    let loginToken = new Buffer(basicOAuth).toString('base64');

    var result = await GithubLoginAPI(loginToken);
    console.log(result.status);
    if (result.status == 200) {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Repository',
        }),
      );
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source="https://pbs.twimg.com/media/De7LJDwX4AA54eD?format=png&name=small"
            style={styles.image}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Input
            label="Your github e-mail address"
            value={username}
            onChangeText={(login) => setUsername(login)}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Input
            label="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => authenticateUser(username, password)}
            text="Log in"
          />
          <Button
            opacity
            onPress={() => authenticateUser(username, password)}
            text="Forgot Password?"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
