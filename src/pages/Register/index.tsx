import React, { useState } from 'react';
  
import Wallpaper from '../../components/Wallpaper';  
import { Alert,ScrollView,StyleSheet,SafeAreaView ,View } from 'react-native';
import { useNavigation,useRoute  } from '@react-navigation/native';
  

import InputTextField from '../../components/InputTextField';
import  ButtonRegister from '../../components/ButtonRegister';
 
import contactRepository from "../../repositories/contact.repository";

import   User   from "../../models/User";
 

import SignInSection from '../../components/SignInSection';
 

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
 



export default function RegisterPage() { 

  const [isLoading, setIsLoading] = useState(false);

  const navigation=useNavigation();
  const route = useRoute(); 

  const usernameImg= require('../../images/username.png')  ;

  const passwordImg = require( '../../images/password.png') ;
    const [ name, setName ] = React.useState('');
    const [ age, setAge ] = React.useState(0); 
    const [ address, setAddress ] = React.useState(''); 
    const [ email, setEmail ] = React.useState(''); 
    const [ userPassword, setPassword ] = React.useState(''); 
    
        
  
  
    React.useEffect(() => {
       
      if (route.params) {
            Alert.alert('Passei por aqui');
            const { user } = route.params as any;
            setName(user.name);
            setAge(user.age); 
            setAddress(user.address); 
            setEmail(user.email);
            setPassword(user.userPassword);
        }
     
       
    }, []);

    async function handleSave() {
        try {
          setIsLoading(true)
          
          if (name === undefined || name.trim() === '') {
            alert('Nome é obrigatório!');
            setName("")
            setIsLoading(false)
     
                 
     
            return ;
        } 
        if (address === undefined ||  address.trim() === '') {
            alert('Endereço é obrigatório!');
            setIsLoading(false)
            return  ;
        }
        if (email === undefined ||  email.trim() === '') {
            alert('Email é obrigatório!');
            setIsLoading(false)
            return ;
        }
        if (age < 18 ) {
          alert('Usuário tem que ser maior de idade!');
          setIsLoading(false)
          return ;
         }
        if (age === undefined ) {
            alert('Age é obrigatório!');
            setIsLoading(false)
            return ;
        }
        
        if ( userPassword === undefined ||  userPassword.trim() === '') {
            alert('Senha é obrigatório!');
            setIsLoading(false)
          
            return ;
        }


        const contact = { name, age,address,email,userPassword } as User;

        
       
        
        contactRepository.addUser(contact).then((result) => {
          setIsLoading(false);

          if (!result) {
              setIsLoading(false);
              Alert.alert(
                  'Erro!',
                  'Usuário não cadastrado'
              );
              return;
          }


          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        }); 

        }) .catch((error) => {
          console.error(error);
          Alert.alert(
              'Erro ao Autenticar',
              'Houve um erro ao tentar se registar'
          );
      }); 
 
    

          setIsLoading(false)
          setName('')
          setAddress('')
          setAge(0);
          setEmail('')
          setPassword('') 
         

          

        } catch (error) {
            Alert.alert('Não foi possível salvar, verificar os dados!');
        }
    }

  return (
    
    <SafeAreaView  >
         <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          extraScrollHeight={100}>
          <Wallpaper> 
        <View style={styles.container}>  
        <InputTextField
          source={usernameImg}
          value={name}
          placeholder="Name"
          onChange={setName} 
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          secureTextEntry={false}
          
          keyboardtype={'default'}
        />
      <InputTextField
          source={usernameImg}
          value={age}
          placeholder="Age"
          onChange={setAge}
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          secureTextEntry={false}
          keyboardtype={'numeric'}
        />
      <InputTextField
          source={usernameImg}
          value={email}
          placeholder="Email"
          onChange={setEmail}
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          
          keyboardtype={'default'}
          secureTextEntry={false}
        />
      <InputTextField
          source={usernameImg}
          value={address}
          placeholder="Address"
          onChange={setAddress}
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          secureTextEntry={false}
          
          keyboardtype={'default'}
        />
      <InputTextField
          source={passwordImg}
          value={setPassword}
          placeholder="Password"
          onChange={setPassword}
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          secureTextEntry={true}
          
          keyboardtype={'default'}
        />
          <SignInSection></SignInSection>
              <ButtonRegister onPress={handleSave} value='Register'></ButtonRegister>
              </View>  
        </Wallpaper> 
        </KeyboardAwareScrollView>
        </SafeAreaView>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:35
    },
    
  });