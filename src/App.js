import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetQuestions from './Components/GetQuestions';
import SetQuestion from './Components/SetQuestion';
import Navbar from './Components/Navbar';
import Java from './Components/Java';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/java' element={<Java language = "Java"/>}></Route>
        <Route path='/html' element={<Java language = "HTML"/>}></Route>
        <Route path='/css' element={<Java language = "CSS"/>}></Route>
        <Route path='/javascript' element={<Java language = "JavaScript"/>}></Route>
        <Route path='/mysql' element={<Java language = "MySQL"/>}></Route>
        <Route path='/mongodb' element={<Java language= "MongoDB"/>}></Route>
        <Route path='/getquestion' element={<GetQuestions/>}></Route>
        <Route path = '/setquestion' element={<SetQuestion/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
