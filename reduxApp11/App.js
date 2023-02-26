import Index from './src'
import { Provider } from 'react-redux'
import store from './src/store'
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <>
    <Provider store={store}>
    <NativeBaseProvider>
         <Index />
    </NativeBaseProvider>
    </Provider>
    </>
    
  )
}

export default App