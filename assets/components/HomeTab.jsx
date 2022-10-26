import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image } from 'react-native';
import { useState } from 'react';
import InicioSesion from "./InicioSesion";
import Cuentas from "./Cuentas";
import Movimientos from './Movimientos';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
    
    return (
      <>
        {/* Imagen del banco */}
        <View style={{ flex: 0.4, alignItems: "center" }}>
          <View>
            <Image
              source={require("../Style/bancoBogota.png")}
              style={{ width: 800, height: 150 }}
            />
          </View>
        </View>

        {/* Menu de navegacion */}
        <Tab.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarActiveBackgroundColor: "#7fff00",
            tabBarInactiveTintColor: "black",
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Inicio"
            component={InicioSesion}
            options={{
              tabBarStyle: { display: "none" }, //Para no mostrar el menu
              title: "Incio sesion",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={30} />
              ),
            }}
          />

          <Tab.Screen
            name="Cuentas"
            component={Cuentas}
            options={{
              title: "Cuenta",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="key" color={color} size={30} />
              ),
            }}
          />

          <Tab.Screen
            name="Movimientos"
            component={Movimientos}
            options={{
              title: "Movimientos",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cash" color={color} size={30} />
              ),
            }}
          />
        </Tab.Navigator>
      </>
    );
}

export default HomeTab;
