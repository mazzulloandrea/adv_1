import Audio from '../../components/Audio';

// Note: `user` comes from the URL, courtesy of our router
const AudioRoute = () => {
  return (
    <div>
      <Audio paragraph={1} />
    </div>
  );
}

export default AudioRoute;
