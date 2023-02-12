import { FC } from 'react';

import { Home } from './pages/Home/Home';
import { Header } from './shared/Header/Header';

const App: FC = () => {
  return (
    <div className="container">
      <Header />
      <Home />
    </div>
  );
};

export default App;
