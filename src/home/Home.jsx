
import Featured from '../components/featured/Featured';
import List from '../components/List/List';
import Navbar from '../components/navbar/Navbar';

import "./home.scss";
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured type="movies"/> {/* within nothing in type even empty string we cannot see the dropdown for genre*/ }
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home

