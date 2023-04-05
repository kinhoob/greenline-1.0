import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from '../pages/cadastro/index'
import Login from '../pages/login/index'

const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>

      {/* renderização da página de cadastro */}
      <Stack.Screen
        name='Bemvindo'
        component={Cadastro}
        options={{ headerShown: false }}
      />

      {/* renderização da página de login */}
       <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}