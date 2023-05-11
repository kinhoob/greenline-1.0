import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from '../pages/cadastro/index'
import Login from '../pages/login/index'
import EsqueciSenha from '../pages/esqueci-senha/index';
import Inicial from '../pages/inicial/index';
import Perfil from '../pages/perfil/index';
import Calendario from '../pages/calendario/index';
import Suporte from '../pages/suporte/index';
import Ranqueamento from '../pages/ranqueamento';
import Mapa from '../pages/mapa/index';
import React from 'react';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (

    <Stack.Navigator>



      {/* renderização tela inicial */}
      <Stack.Screen
        name='Inicial'
        component={Inicial}
        options={{ headerShown: false }}
      />

      {/* renderização da página de login */}
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />

      {/* renderização da tela de esqueci a senha */}
      <Stack.Screen
        name='EsqueciSenha'
        component={EsqueciSenha}
        options={{ headerShown: false }}
      />

      {/* renderização da página de cadastro */}
      <Stack.Screen
        name='Cadastro'
        component={Cadastro}
        options={{ headerShown: false }}
      />

      {/* renderização da página de perfil */}
      <Stack.Screen
        name='Perfil'
        component={Perfil}
        options={{ headerShown: false }}
      />

      {/* renderização tela de suporte*/}
      <Stack.Screen
        name='Suporte'
        component={Suporte}
        options={{ headerShown: false }}
      />

      {/* renderização tela do calendário*/}
      <Stack.Screen
        name='Calendario'
        component={Calendario}
        options={{ headerShown: false }}
      />



      {/* renderização tela de ranqueamento */}
      <Stack.Screen
        name='Ranqueamento'
        component={Ranqueamento}
        options={{ headerShown: false }}
      />

      {/* renderização tela do mapa*/}
      <Stack.Screen
        name='Mapa'
        component={Mapa}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}