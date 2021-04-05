import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Avatar, Appbar, Button, TextInput } from 'react-native-paper';
import avLoginP from '../../assets/avloginp.png';
import BgLoginP from '../../assets/bgloginp.png';
import GLOBAL from '../../resources/global';
import { useHistory } from 'react-router-native'

const Loginpeople = () => {
    const [data,setData]=React.useState({
      email: "",
      password: ""
    });
    let history = useHistory();
    let onRoute = (route) =>{
        history.push(route);
    }
    let handleChange = e =>{
      const {name, value}= e;
      setData(prevState=>({
        ...prevState,
        [name]: value
      }));
    }
    return (
      <View style={styles.container}>
          <Appbar.Header style={styles.navbar}>
            <Appbar.Content title="First Here" style={styles.paddingLeft}/>
            <Button mode="outlined" color={'#ff3a3a'} style={styles.btnbusiness}>
              Business
            </Button>
          </Appbar.Header>
          <ImageBackground source={BgLoginP} style={styles.container_avatar}>
            <Avatar.Image size={100} source={avLoginP} />
          </ImageBackground>
          <View>
            <TextInput
              value={data.email}
              onChangeText={(e)=>handleChange({name:'email',value:e})}
              style={styles.txt}
              placeholder={'Email'}
              placeholderTextColor={'#fff'}
              left={<TextInput.Icon name={'account'}/>}
            />
            <TextInput
              value={data.password}
              onChangeText={(e)=>handleChange({name:'password',value:e})}
              style={styles.txt}
              placeholder={'Password'}
              placeholderTextColor={'#fff'}
              secureTextEntry={true}
              left={<TextInput.Icon name={'key'}/>}
            />
            <Button mode="contained" color={'#ff3a3a'} style={styles.btnlogin} onPress={()=>alert(data.email+'\n'+data.password)}>
              LOGIN
            </Button>
            <View style={styles.btnlink}>
              <Button mode="text" color={'#fff'} uppercase={false} onPress={()=>onRoute(GLOBAL.registro)}>
                Register here
              </Button>
              <Button mode="text" color={'#fff'} uppercase={false}>
                ¿Olvido su contraseña?
              </Button>
            </View>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#000',    
    },
    container_avatar:{
      width: '100%',
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    navbar: {
      backgroundColor: '#000',
    },
    btnbusiness:{
      borderColor: '#ff3a3a',
      marginRight: 20,
    },
    paddingLeft:{
      paddingLeft: 20,
    },
    btnlink: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 10,
      marginRight: 10,
    },
    btnlogin: {
      marginLeft: 20,
      marginRight: 20,
    },
    txt: {
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#30363d',
      height: 55,
      color: '#fff'
    },
  });

  export  {Loginpeople};