import React from 'react'
import Index from './src'
import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import store from './src/store'

const App = () => {
 
  return (
    <Provider store={store}>
    <NativeBaseProvider>
        <Index /> 
    </NativeBaseProvider>
    </Provider>
  )
}

export default App
