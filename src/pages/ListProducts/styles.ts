import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
    },

    title: {
        fontSize: 22,
        marginBottom: 5,
    },

    subtitle: {
        fontSize: 16,
        marginBottom: 10,
    },

    titleButton: {
        marginHorizontal: 10,
    },

    list: {
        width: Dimensions.get('window').width - 20
    },


    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingTop: 10
      }, 
      price: { 
        color: 'red',
        fontSize:15,
        fontWeight:'bold'
      },
      
      factory: { 
        color: 'black' ,
        fontSize:16,
      },
      name: { 
        color: 'black',
         fontSize:18,
         fontWeight:'bold'
      },
});