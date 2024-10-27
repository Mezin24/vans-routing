import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { customFecth } from '../../tools/customFetch';

export const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchHostVans = async () => {
      const { data } = await customFecth('/vans?hostId=123');
      setVans(data);
    };
    fetchHostVans();
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link to={van.id} key={van.id} className='host-van-link-wrapper'>
      <div className='host-van-single' key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className='host-van-info'>
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className='host-vans-title'>Your listed vans</h1>
      <div className='host-vans-list'>
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};
