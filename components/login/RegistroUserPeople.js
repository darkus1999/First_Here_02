import * as React from 'react';
import { BackHandler, StyleSheet, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import GLOBAL from '../../resources/global';
import { useHistory } from 'react-router-native';
import imgregistro from '../../assets/registroabajo.png';
import imgregistroportada from '../../assets/registroportada.png';

const RegistroUserPeople = () =>{
    const [text, setText] = React.useState('');
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
                <Card.Cover style={styles.portada, {backgroundColor:'transparent'}} source={imgregistroportada}/>
                <ImageBackground style={styles.formulario} source={imgregistro}>
                <Button icon="plus" mode="outlined" style={styles.btn}>
                    Agregar Foto
                </Button>
                <TextInput
                label="Nombres"
                value={text}
                onChangeText={text => setText(text)}
                style={styles.txt}
                />
                <TextInput
                label="Apeliidos"
                value={text}
                onChangeText={text => setText(text)}
                style={styles.txt}
                />
                <TextInput
                label="Direccion"
                value={text}
                onChangeText={text => setText(text)}
                style={styles.txt}
                />
                <TextInput
                label="Celular"
                value={text}
                onChangeText={text => setText(text)}
                style={styles.txt}
                />
                <TextInput
                label="Nacimiento"
                value={text}
                onChangeText={text => setText(text)}
                style={styles.txt}
                />
                <TextInput
                label="DNI"
                value={text}
                onChangeText={text => setText(text)}
                style={styles.txt}
                />
                <Button icon="plus" mode="outlined" style={styles.btn}>
                    Agregar Curriculum
                </Button>
                <Button mode="contained" color={'#ff3a3a'} style={styles.btn}>
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
    formulario:{
        height: '60%',
        alignItems: 'center'
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