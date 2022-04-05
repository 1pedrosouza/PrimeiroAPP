import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo} > Praias Zikas do Brasil </Text>
      <Text style={estilo.frase} > Minhas Férias...</Text>
      <ScrollView>
      <Image style={estilo.image} source={require("./assets/praia1.jpg")}/>
      <Text style={estilo.legenda}>Praia Com Agua</Text>
      <Image style={estilo.image} source={require("./assets/praia4.jpg")}/>
      <Text style={estilo.legenda}>Praia Com Areia</Text>
      <Image style={estilo.image} source={require("./assets/praia3.png")}/>
      <Text style={estilo.legenda}>😡???????????😡</Text>
      <Image style={estilo.image} source={require("./assets/praia5.jpg")}/>
      <Text style={estilo.legenda}>Praia Grande Literalmente</Text>
      <Image style={estilo.image} source={require("./assets/futinite.gif")}/>
      </ScrollView>
    </View>

  );
}

const estilo = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:'#EBF7D9',
     alignItems: 'center',
   

   
  },

  image:{
    marginTop: 35,
    width: 250,
    height:250,
    borderRadius: 15,
  },



frase:{
    marginTop: 30,
    marginBottom: 30,
    fontSize:20,
    color: 'blue',
    fontStyle: 'oblique',
  },

  legenda:{


    fontSize:20,
    color: 'blue',
    fontStyle: 'oblique',
    textAlign: 'center',
  },

titulo:{
      marginTop: 30,
      fontSize:35,
    color: '#9BFF00',
    fontWeight:'bold',
     fontStyle: "italic",
       textAlign: 'center',
  },



});
