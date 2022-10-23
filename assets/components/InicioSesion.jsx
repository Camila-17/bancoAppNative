import { View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Children, useState } from 'react';

export const InicioSesion = ({ navigation }) => {







    return (
        <View>
            <TextInput
                      
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        placeholder="Ingrese usuario"
                    />
            <TouchableOpacity style={{ backgroundColor: 'green', padding: 10, borderRadius: 10, marginTop: 80, width: 200 }}
               onPress={() => {
                   navigation.navigate('Cuentas')}}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InicioSesion;