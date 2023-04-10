import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from '../pages/cadastro/index'
import Login from '../pages/login/index'
import EsqueciSenha from '../pages/esqueci-senha/index';
import Inicial from '../pages/inicial/index';
import Perfil from '../pages/perfil/index';

const Stack = createNativeStackNavigator();

export default function Routes(){

  return(
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
      
    </Stack.Navigator>
  )
}