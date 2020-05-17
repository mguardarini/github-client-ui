import React, {useState} from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import styles from './Repository.styles'
import { HeaderBackButton } from '@react-navigation/stack'
import { Card } from '@components/Card'
import { Searchbar } from '@components/Searchbar'

const Repository = ({navigation}) => {

    navigation.setOptions({
        headerShown: true,
        headerTitle: 'Gitub Repositories',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#00A1F1',
        },
        headerTitleStyle: {
            color: '#FFF'
        },
        headerLeft: () => {
            return (
              <View style={styles.botaoVoltar}>
                <HeaderBackButton
                  testID="goBack"
                  onPress={() => {
                    navigation.goBack()
                  }}
                  labelVisible={false}
                  tintColor='white'
                />
              </View>
            )
        },
    })
    return (
       <SafeAreaView style={styles.mainContainer}>
           <View style={styles.mainContainer}>
              <Searchbar></Searchbar>
                <Card title="Meu repositorio" body="My body"></Card>
           </View>
       </SafeAreaView> 
    )
}

export default Repository