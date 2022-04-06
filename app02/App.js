import * as React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo} > Site Foto </Text>
      <Text style={estilo.frase} > Perfils</Text>
      <ScrollView>
     <Image style={estilo.icone} source={require("./assets/luffyicone.jpg")}/>
     <Text style={estilo.nome}>Monkey D. Luffy</Text>
      <ScrollView>
      <Image style={estilo.image} source={require("./assets/zoroluffy.jfif")}/>
      <Text style={estilo.legenda}>O ZORO DORMIU KKKKK</Text>
      <Image style={estilo.image} source={require("./assets/tripulacao.jfif")}/>
      <Text style={estilo.legenda}>eu e a tropa😎</Text>
      <Image style={estilo.image} source={require("./assets/kaido.jpg")}/>
      <Text style={estilo.legenda}>matei o kaido facil dms</Text>
      
      </ScrollView>
      



     <Image style={estilo.icone} source={require("./assets/saitamaicone.jfif")}/>
     <Text style={estilo.nome}>Saitama</Text>
      <ScrollView>
      <Image style={estilo.image} source={require("./assets/saitama1.jpg")}/>
      <Text style={estilo.legenda}>Pai ta no shape</Text>
      <Image style={estilo.image} source={require("./assets/saitama2.jpg")}/>
      <Text style={estilo.legenda}>estou te regando </Text>
      <Image style={estilo.image} source={require("./assets/saitama3.jpg")}/>
      <Text style={estilo.legenda}>eu</Text>
     
      </ScrollView>




     <Image style={estilo.icone} source={require("./assets/gokuicone.jpg")}/>
     <Text style={estilo.nome}>Goku</Text>
      <ScrollView>
      <Image style={estilo.image} source={require("./assets/goku1.jpg")}/>
      <Text style={estilo.legenda}>parcerin vegeta e eu</Text>
      <Image style={estilo.image} source={require("./assets/goku2.jpg")}/>
      <Text style={estilo.legenda}>eu e o freezer</Text>
      <Image style={estilo.image} source={require("./assets/goku3.jpg")}/>
      <Text style={estilo.legenda}>Gohan tá meio diferente </Text>
     
      </ScrollView>





   </ScrollView>


    </View>

  );
}

const estilo = StyleSheet.create({

container:{
    flex:1,
    backgroundColor:'white',
     alignItems: 'center',
   

   
  },

  image:{
    marginTop: 15,
    width: 250,
    height:250,
    borderRadius: 15,
  },

  nome:{
   fontSize:20,
    color: 'black',
    fontStyle: 'oblique',

    flexDirection:'row',
  },



frase:{
    marginTop: 30,
 
    fontSize:20,
    color: 'blue',
    fontStyle: 'oblique',
  },

  legenda:{
    fontSize:20,
    color: 'black',
    fontStyle: 'oblique',
    textAlign: 'center',
  },

   icone:{
    height: 60,
    width:60,
    borderRadius:20,
    marginRight:230,
    marginTop: 50,
  },

titulo:{

      marginTop:40,
      fontSize:35,
    color: '#9BFF00',
    fontWeight:'bold',
     fontStyle: "italic",
       textAlign: 'center',
  },



});
