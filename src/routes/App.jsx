import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import '../styles/global.css';
import Layout from '../containers/Layout';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import Orders from '../pages/Orders';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={ <Home/> } />
              <Route path="*" element={ <NotFound />} />
              <Route exact path="/login" element={ <Login />} />
              <Route exact path="/recovery-password" element={ <PasswordRecovery />} />
              <Route exact path="/send-email" element={ <SendEmail />} />
              <Route exact path="/new-password" element={ <NewPassword />} />
              <Route exact path="/my-account" element={ <MyAccount />} />
              <Route exact path="/create-account" element={ <CreateAccount />} />
              <Route exact path="/checkout" element={ <Checkout />} />
              <Route exact path="/orders" element={ <Orders />} />
            </Routes>
          </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App