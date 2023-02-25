import Index from './src'
import { Provider } from 'react-redux'
import store from './src/store'

const App = () => {
  return (
    <>
    <Provider store={store}>
    <Index />
    </Provider>
    </>
    
  )
}

export default App