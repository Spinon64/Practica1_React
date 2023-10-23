import { StatusBar } from 'expo-status-bar';
import {Component} from 'react';
import {Alert, TextInput, Switch, Button,StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      switchValue: false, texto : '',
    };

  }
  onChange = (value) =>{
    console.warn(`El switch cambiara a ${value}`);
    this.setState({switchValue:value});
  }
  
  onChangeText = (value) => {
    console.warn(`El texto cambiara a ${value}`);
    this.setState({ texto: value })
    
  }
  showAlert = () =>{
    Alert.alert(
      `${this.state.texto}`,
      'Es lo que se escribió.',
      [
        {
          text: 'OK',
          onPress: () => console.log('Botón OK presionado'),
        },
      ]
    );
  };
 render(){
  return (
    <View style={styles.container}>
      
      <Button
      title='Mostrar Alerta'
      onPress={this.showAlert}
      accesibilityLabel="Learn More about this button"
      />
       <TextInput
          placeholder="Escribe algo..."
          onChangeText={(texto) => this.onChangeText(texto)}
          value={this.state.texto}
        
        />
       <Switch
        onValueChange={()=>this.onChange(!this.state.switchValue)}
        value={this.state.switchValue}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

