import Etc from '../../components/Etc';

// Note: `user` comes from the URL, courtesy of our router
const EtcRoute = () => {
  return (
    <div>
      <Etc MaxCounter={3} />
    </div>
  );
}

export default EtcRoute;
