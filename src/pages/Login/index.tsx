import React, { useState } from 'react'; 
import Wallpaper from '../../components/Wallpaper'; 
import SignUpSection from '../../components/SignUpSection';
import { Alert } from 'react-native';
import { useNavigation,useRoute  } from '@react-navigation/native'; 
 
import InputTextField from '../../components/InputTextField';
 
import Logo from '../../components/Logo';

 
import contactRepository from "../../repositories/contact.repository";

import  CustomButton from '../../components/ButtonLogin';
 
 

 





export default function LoginPage() { 

  const [isLoading, setIsLoading] = useState(false);

  const navigation=useNavigation();
  const route = useRoute(); 

  const usernameImg= require('../../images/username.png')  ;

  const passwordImg = require( '../../images/password.png') ;
    const [ email, setEmail ] = React.useState(''); 
    const [ userPassword, setPassword ] = React.useState(''); 
    
        
  
  
    React.useEffect(() => {
       
      if (route.params) {
            Alert.alert('Passei por aqui');
            const { user } = route.params as any;
            
            setEmail(user.email);
            setPassword(user.userPassword);
        }
     
       
    }, []);

    async function handleSave() {
        try {
       
         
        if (email === undefined || email.trim() === '') {
            alert('Email é obrigatório!');
             
            return ;
        }
    
         
        
        if ( userPassword === undefined ||  userPassword.trim() === '') {
            alert('Senha é obrigatório!');
          
          
            return ;
        }


       
        
        contactRepository.login(email,userPassword).then((result) => {
          
          if (!result) {

              Alert.alert(
                  'Erro!',
                  'Usuário não cadastrado aqui'
              );
                
              return;
            
          }
          else{
                 navigation.navigate("Lista de Produtos");
          }


        

        }) .catch((error) => {
          console.error(error);
          Alert.alert(
              'Erro ao Autenticar',
              'Houve um erro ao tentar se registar'
          );
      }); 
 
    
 
         

          

        } catch (error) {
            Alert.alert('Não foi possível salvar, verificar os dados!');
        }
    }

  return (
 
          <Wallpaper>
           <Logo></Logo>
     
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
          source={passwordImg}
          value={userPassword}
          placeholder="Password"
          onChange={setPassword}
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
          
          keyboardtype={'default'}
          secureTextEntry={true}
        /> 
             <SignUpSection />
      
             
             <CustomButton onPress={handleSave} value='Register'></CustomButton>
         
        </Wallpaper> 
    );
  }