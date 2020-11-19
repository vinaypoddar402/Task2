import React,{useState} from 'react';
import { Text, TextInput, View, Button, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {


function validation(){
  if(username!="admin") {
    alert("Wrong username is entered")
  }
  else if(password!="admin@123"){
  alert("Wrong username is entered")
  }
  else{
    navigation.navigate("Screen2")
  }
}

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const windowWidth= useWindowDimensions().width;
  return(

    <View style={{ backgroundColor: 'green',flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text Style={{fontsize: 30}}>Enter username</Text>
      <TextInput
      label="username"
      value={username}
      style={{
        height: 40, borderColor: 'yellow', borderWidth: 1, width: 250, borderRadius: 10, backgroundColor: 'blue'
      }}
      onChangeText={text => setUserName(text)}
      value={username}
    />
     <Text>Enter password</Text>
     <TextInput
     label="password"
     value={password}
     style={{
      height: 40, borderColor: 'yellow', borderWidth: 1, width: 250, borderRadius: 10
    }}
     onChangeText={text => setPassword(text)}
     value={password}
    />

<TouchableOpacity
          style={styles.Button}
          onPress={() =>validation()}
        >
          <Text style={styles.TextStyle}> ENTER </Text>
            
          </TouchableOpacity>
  
    </View>
  )
}
const styles = StyleSheet.create({
  Button: {

    height:40,
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'yellow',
    backgroundColor: 'white'},

 
  TextStyle:{
      color:'red',
      textAlign:'center',
      fontSize:20
    
  }
})

function Screen2({ navigation }) {

  const [fullname, setfullName] = React.useState('');
  const windowWidth= useWindowDimensions().width;
  return(
    <View style={{ backgroundColor: 'green',flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text Style={{fontsize: 30}}>Enter fullname</Text>
    <TextInput
    label="fullname"
    value={fullname}
    style={{
      height: 40, borderColor: 'yellow', borderWidth: 1, width: 250, borderRadius: 10, backgroundColor: 'blue'
    }}
    onChangeText={text => setfullName(text)}
    value={fullname}
    />

    <Button title="enter" onPress={() => navigation.navigate('Display',{full:fullname})} />
    </View>
  );
}

function DisplayScreen(route){
  console.log(route)
  let data= route.params
  return(
    <View style={{ backgroundColor: 'green',flex: 1, justifyContent: "center", alignItems: "center" }}>

<Text Style={{fontsize: 30}}>{route.route.params.full} you are registered successfully</Text>  
    </View>

  );
}
 

const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          title:'Login',
          headerstyle:{backgroundColor:'blue'},
          headerTintColor:'blue',
          headerTintStyle:{
            fontWeight:'bold',
            fontSize:20
          }

        }}/>
        <Stack.Screen name="Screen2" component={Screen2}
        options={{
          title:'Home',
          headerstyle:{backgroundColor:'blue'},
          headerTintColor:'blue',
          headerTintStyle:{
            fontWeight:'bold',
            fontSize:20
          }

        }}/>
        <Stack.Screen name="Display" component={DisplayScreen}
        options={{
          title:'Display',
          headerstyle:{backgroundColor:'blue'},
          headerTintColor:'blue',
          headerTintStyle:{
            fontWeight:'bold',
            fontSize:40
          }

        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


