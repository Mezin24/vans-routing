import { useOutletContext } from 'react-router-dom';

export const HostVanDetailsImage = () => {
  const { van } = useOutletContext();
  return (
    <div>
      <img
        src={van.imageUrl}
        className='host-van-detail-image'
        alt={van.name}
      />
    </div>
  );
};
