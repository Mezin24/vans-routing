import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { About, Home, VanDetails, Vans } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans' element={<Vans />} />
        <Route path='/vans/:vanid' element={<VanDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
