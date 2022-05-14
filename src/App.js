import './App.scss';
import UserList from './components/users/UserList';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateUser from './components/users/CreateUser';


function App() {
  return (
    <Provider store={store}>
      <div className="layout">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<UserList />} />
            <Route path="/CreateUser" exact element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
