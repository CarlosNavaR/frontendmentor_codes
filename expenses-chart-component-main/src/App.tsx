import Graph from './views/graph';
import logo from './assets/logo.svg';

import './styles/App.css';

function App() {
  return (
    <div className='main_container'>
      <div className='header_container'>
        <div className='header_title'>
          <p>My balance</p>
          <span>$921.48</span>
        </div>
        <div className='header_img'>
          <img src={logo} alt='currency' />
        </div>
      </div>
      <Graph />
      <div className='attribution'>
        Challenge by
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by <a href='#'>Buz 🚀</a>.
      </div>
    </div>
  );
}

export default App;
