import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { About, Home, NotFound, VanDetails, Vans } from './pages';
import {
  Dashboard,
  HostVanDetails,
  HostVans,
  Income,
  Reviews,
} from './pages/Host';
import { HostLayout } from './components';
import {
  HostVanDetailsInfo,
  HostVanDetailsImage,
  HostVanPricing,
} from './pages/Host';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans'>
          <Route index element={<Vans />} />
          <Route path=':id' element={<VanDetails />} />
        </Route>
        <Route path='/host' element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='vans' element={<HostVans />} />
          <Route path='vans/:id' element={<HostVanDetails />}>
            <Route index element={<HostVanDetailsInfo />} />
            <Route path='pricing' element={<HostVanPricing />} />
            <Route path='photos' element={<HostVanDetailsImage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
