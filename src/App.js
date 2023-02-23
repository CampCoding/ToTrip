import './App.css';
import { Link, Route,Routes } from 'react-router-dom';
import{Header,CGlogin,CGsignup,ProfileEdit,Profile,Touristlogsign, Page,Search} from './components/Exportfiles'
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="app">
      <Header/>
      <div className="">
      <Routes>
        <Route path='/' element={<Page/>}/>
        <Route path='cgsignup' element={<CGsignup/>}/>
        <Route path='cglogin' element={<CGlogin/>}/>
        <Route path='tlogsign' element={<Touristlogsign/>}/>
        <Route path='profile/:profid' element={<Profile/>}/>
        <Route path='profileedit' element={<ProfileEdit/>}/>
        <Route path='search' element={<Search/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
