import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { customFecth } from '../tools/customFetch';

export const VanDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [van, setVan] = useState(null);
  useEffect(() => {
    const fetchVan = async () => {
      const { data } = await customFecth.get(`/vans/${id}`);
      setVan(data);
    };
    fetchVan();
  }, []);

  const search = state?.search ? `?${state?.search}` : '';
  const backTo = state?.type ?? 'all';

  return (
    <div className='van-detail-container'>
      <Link to={`..${search}`} className='back-button' relative='path'>
        &larr; <span>Back to {backTo} vans</span>
      </Link>
      {van ? (
        <div className='van-detail'>
          <img alt={van.name} src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className='van-price'>
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className='link-button'>Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
