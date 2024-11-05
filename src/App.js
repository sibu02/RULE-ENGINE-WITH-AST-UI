import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EvaluateRule from './component/EvaluateRule';
import Navbar from './component/Navbar';
import RuleForm from './component/RuleForm';
import RuleModification from './component/RuleModification';
import AddSubExpression from './component/AddSubExpression';
import RemoveSubExpression from './component/RemoveSubExpression';
import MainPage from './component/MainPage';
import AstVisualization from './component/AstVisualization';
import Notification from './component/Notification';
import Footer from './component/Footer';
import AboutPage from './component/AboutPage';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Notification/>
      <div className="flex-grow">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/viewtree/:id' element={<AstVisualization/>}/>
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
