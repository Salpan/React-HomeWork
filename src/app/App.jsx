import { Counter } from './components/Counter';

import './styles.css';

const App = () => {
  return (
    <div className="wrapper">
      <header>
        <h1>Simply counter</h1>
      </header>
      <main>
        <Counter />
      </main>
      <footer>8 800 555 35-35</footer>
    </div>
  );
};

export default App;
