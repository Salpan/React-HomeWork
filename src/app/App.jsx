import { Counter } from './components/counter/Counter';
import Gallery from './components/gallery/Gallery';
import UserList from './components/user-list/userList';

import './styles.css';

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <h1>Simply counter</h1>
      </header>
      <main>
        <Counter />
        <Gallery />
      </main>
      <footer>8 800 555 35-35</footer>
    </div>
  );
};

export default App;
