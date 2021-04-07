import * as React from 'react';
import { BackHandler, StyleSheet, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import GLOBAL from '@resources/lang/global';
import { useHistory } from 'react-router-native';
import imgregistro from '@resources/assets/registroabajo.png';
import imgregistroportada from '@resources/assets/registroportada.png';

const RegistroUserPeople = () =>{
    const [data, setData] = React.useState({
        foto: "",
        nombres: "",
        apellidos: "",
        direccion: "",
        celular: "",
        nacimiento: "",
        dni: "",
        currciculum: ""
    });
    let handleChange = e =>{
        const {name, value}= e;
        setData(prevState=>({
          ...prevState,
          [name]: value
        }));
      }
    let history = useHistory();
    const irLogin = () =>{
        history.push(GLOBAL.login);
        return true;
    }
    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        irLogin
      );
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Card.Cover style={styles.portada, {backgroundColor:'transparent'}}  source={imgregistroportada}/>
                <ImageBackground style={styles.imgformulario} source={imgregistro}>
                    <Button icon="plus" mode="outlined" style={styles.btn}>
                        Agregar Foto
                    </Button>
                    <TextInput
                    label="Nombres"
                    value={data.nombres}
                    onChangeText={(e)=>handleChange({name:'nombres',value:e})}
                    style={styles.txt}
                    />
                    <TextInput
                    label="Apeliidos"
                    value={data.apellidos}
                    onChangeText={(e)=>handleChange({name:'apellidos',value:e})}
                    style={styles.txt}
                    />
                    <TextInput
                    label="Direccion"
                    value={data.direccion}
                    onChangeText={(e)=>handleChange({name:'direccion',value:e})}
                    style={styles.txt}
                    />
                    <TextInput
                    label="Celular"
                    value={data.celular}
                    onChangeText={(e)=>handleChange({name:'celular',value:e})}
                    style={styles.txt}
                    />
                    <TextInput
                    label="Nacimiento"
                    value={data.nacimiento}
                    onChangeText={(e)=>handleChange({name:'nacimiento',value:e})}
                    style={styles.txt}
                    />
                    <TextInput
                    label="DNI"
                    value={data.dni}
                    onChangeText={(e)=>handleChange({name:'dni',value:e})}
                    style={styles.txt}
                    />
                    <Button icon="plus" mode="outlined" style={styles.btn}>
                        Agregar Curriculum
                    </Button>
                    <Button mode="contained" color={'#ff3a3a'} style={styles.btn} onPress={()=>alert(data.nombres)}>
                        ENVIAR
                    </Button>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container:{
        height: '100%',
    },
    portada:{
        height: '40%',
    },
    imgformulario:{
        height: '100%',
        alignItems: 'center',
    },
    btn:{
        width: '90%',
        marginBottom: 10,
        padding: 5,
    },
    txt:{
        width: '90%',
        marginBottom: 10
    },
});

export {RegistroUserPeople};