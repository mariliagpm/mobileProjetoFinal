import React from 'react';
import { FlatList, Text, View } from 'react-native'; 
import { ListItem, Button } from 'react-native-elements'  
import { Product } from '../../models/product';

import storage from '../../repositories/contact.repository';
import styles from './styles';
   
 
import ButtonLogout from '../../components/ButtonLogout'; 
import Wallpaper from '../../components/Wallpaper'; 

import { useNavigation } from '@react-navigation/native';
import { Alert  } from 'react-native';

export default function ListProductPage() {
    
const navigation = useNavigation();
        function goLogin(){

        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        }); 
        
        } 
 
    const [products, setProducts] = React.useState<Product[]>();

    
    function handleDelete( product: Product) { 
      Alert.alert(
        "Confirmação de deleção",
        "Deseja realmente excluir o produto?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );  
    }

    function goEditContact(product: Product) { 

      Alert.alert(
        "Nome do produto = " +product.name+" \nQuantidade = "+product.amount)
 
    }

    const defaultOptions = {
        significantDigits: 2,
        thousandsSeparator: ',',
        decimalSeparator: '.',
        symbol: '$'
      }
       function formatar(num:any){
           
        if (typeof num !== 'number') num = 0.0
         num = num.toFixed(defaultOptions.significantDigits)
      
        const [currency, decimal] = num.split('.')
        return `${defaultOptions.symbol} ${currency.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          defaultOptions.thousandsSeparator
        )}${defaultOptions.decimalSeparator}${decimal}`
        }


    async function handleSave() {}
    
    storage.list().then(products => setProducts(products));
     return (


        <Wallpaper>
            
        <View style={styles.container}>
  <FlatList
                data={products}
                style={styles.list}
                keyExtractor={item => item.id.toString()}
                
                
                
                renderItem={({ item }) => (
                     
                    <ListItem.Swipeable bottomDivider  
                    leftContent={
                        <Button
                        title="Info"
                        icon={{ name: 'info', color: 'white' }}
                        buttonStyle={{ minHeight: '100%' }}
                        onPress={() => goEditContact(item)}
                      />
                      }
                      rightContent={
                        <Button
                            title="Delete"
                            icon={{ name: 'delete', color: 'white' }}
                            onPress={() => handleDelete(item)}
                            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
    />
                      }
                    >
                      <ListItem.Content>
                      <ListItem.Title><Text style={styles.name}>{item.name}</Text> - <Text style={styles.factory}>{item.factory.name}</Text>  </ListItem.Title>
                      <View style={styles.subtitleView}>
                   <Text style={styles.price}>{formatar(item.price)}</Text>
                  </View>
                         </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem.Swipeable>
                    )}
            />
 
       
        </View>
        
        <ButtonLogout onPress={goLogin} value='Login'></ButtonLogout>
         
        </Wallpaper>
    );

}
 