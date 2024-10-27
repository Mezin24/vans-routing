import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { customFecth } from '../tools/customFetch';

export const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);
  const typeFilter = searchParams.get('type');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await customFecth.get('/vans');
      setVans(data);
    };
    fetchData();
  }, []);

  const filterTypes = [...new Set(vans.map((van) => van.type))];

  if (typeFilter) {
    filterTypes.push('all vans');
  }

  const filters = filterTypes
    // .filter((item) => (typeFilter ? item : item !== 'all vans'))
    .map((item) => (
      <button
        className={`van-type ${item === 'all vans' ? 'clear-filters' : item} ${
          typeFilter === item ? 'selected' : null
        }`}
        key={item}
        onClick={() =>
          item === 'all vans'
            ? setSearchParams({})
            : setSearchParams({ type: item })
        }
      >
        {item}
      </button>
    ));
  // const filters = filterTypes.map((item) => (
  //   <Link
  //     className={`van-type ${item === 'all vans' ? 'clear-filters' : item} ${
  //       typeFilter === item ? 'selected' : null
  //     }`}
  //     key={item}
  //     to={item === 'all vans' ? '.' : `.?type=${item}`}
  //   >
  //     {item}
  //   </Link>
  // ));

  const filteredVans = typeFilter
    ? vans.filter((item) => item.type === typeFilter)
    : vans;

  const vanElements = filteredVans.map((van) => (
    <div key={van.id} className='van-tile'>
      <Link
        to={`${van.id}`}
        state={{ search: searchParams.toString(), type: typeFilter }}
      >
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
      <div className='van-list-filter-buttons'>{filters}</div>
      <div className='van-list'>{vanElements}</div>
    </div>
  );
};
