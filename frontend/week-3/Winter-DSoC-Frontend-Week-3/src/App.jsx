import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Auth from "./Components/Auth/Auth"
import Dashboard from './Components/Dashboard/Dashboard'
import Checkout from './Components/Checkout/Checkout'

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Authorize' element={<Auth />} />

                <Route path='/Dashboard' element={<Dashboard />} />

                <Route path='/Checkout' element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App