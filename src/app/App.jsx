import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Counter } from './components/counter/Counter';
import Gallery from './components/gallery/Gallery';
import UserList from './components/user-list/UserList';
import { Main } from './components/main/Main';

import './styles.css';
import { Layout } from '../common/components/layout/Layout';
import { Feed } from './components/feed/Feed';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/posts" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
