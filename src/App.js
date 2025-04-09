import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Contacts from './Pages/Contacts/Contacts';
import Faqs from './Pages/Faqs/Faqs';
import Partners from './Pages/Partners/Partners';
import AppEngaz from './Pages/AppEngaz/AppEngaz';
import Features from './Pages/features/Features';
import Footer from './Component/Footer';


function App() {
  return (
    <div >
        <Navbar/>
       <Home/>   
       <Services/>
       <Features/>

        <AppEngaz/>
       <Faqs />
      <Partners />
      <Contacts />
      <Footer/>
   
    </div>
      
    
      
  );
}

export default App;
