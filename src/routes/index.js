import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../pages/cadastro/index'
import Login from '../pages/login/index'
import Calendario from '../pages/calendario/index';

const Stack = createNativeStackNavigator();

export default function Routes(){

  return(
    <Stack.Navigator>

      {/* renderização da página de login */}
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />

      {/* renderização da página de cadastro */}
      <Stack.Screen
        name='Cadastro'
        component={Cadastro}
        options={{ headerShown: false }}
      />

      {/* renderização da página de calendário */}
      <Stack.Screen 
        name='Calendario'
        component={Calendario}
        options={{ headerShow: false }}
      />
    </Stack.Navigator>
  )
}