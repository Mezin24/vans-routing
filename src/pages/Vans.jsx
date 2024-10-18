import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { customFecth } from '../tools/customFetch';

export const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await customFecth.get('/vans');
      setVans(data);
    };
    fetchData();
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className='van-tile'>
      <Link to={`/vans/${van.id}`}>
        <img alt={van.name} src={van.imageUrl} />
        <div className='van-info'>
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='van-list'>{vanElements}</div>
    </div>
  );
};
