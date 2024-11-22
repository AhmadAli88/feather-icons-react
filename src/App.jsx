import './App.css';
import CustomIcon from './components/CustomIcon';
import DynamicIcon from './components/DynamicIcon';
import FeatherIconsExample from './components/FeatherIconsExample';
import MyHome from './components/Home';

function App() {
  return (
    <div>
      <FeatherIconsExample />
      <CustomIcon />
      <MyHome />
      <div>
        <h1>Dynamic Icon Rendering</h1>
        <DynamicIcon iconName='Camera' size={48} color='blue' />
        <DynamicIcon iconName='Home' size={48} color='green' />
      </div>
    </div>
  );
}

export default App;
