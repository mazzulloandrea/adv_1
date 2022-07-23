import { route } from 'preact-router';
import style from './style.css';

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <button onclick={() => route('/etcRoute')}>Gioca a Etc</button>
    <button onclick={() => route('/audioRoute')}>Ascolta</button>
  </div>
);

export default Home;
