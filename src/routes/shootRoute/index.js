import Shoot from '../../components/Shoot';

// Note: `user` comes from the URL, courtesy of our router
const ShootRoute = () => {
  return (
    <div>
      <Shoot MaxCounter={3} />
    </div>
  );
}

export default ShootRoute;
