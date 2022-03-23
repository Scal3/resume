import './App.css';

import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import MyTechsSkills from '../MyTechsSkills/MyTechsSkills';
import MyProjects from '../MyProjects/MyProjects';
import WorkExperience from '../WorkExperience/WorkExperience';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <MyTechsSkills/>
      <MyProjects/>
      <WorkExperience/>
    </div>
  );
}

export default App;
