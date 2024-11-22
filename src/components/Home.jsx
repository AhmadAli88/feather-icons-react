import { Home } from 'react-feather';
const MyHome = () => {
  return (
    <div>
      <Home className='icon' />
      <Home style={{ stroke: 'blue', fill: 'none' }} />
    </div>
  );
};

export default MyHome;
