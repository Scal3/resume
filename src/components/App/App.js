import './App.css';

import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import MyTechsSkills from '../MyTechsSkills/MyTechsSkills';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <MyTechsSkills/>
    </div>
  );
}

export default App;
