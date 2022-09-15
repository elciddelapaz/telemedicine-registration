import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Registration from './components/registration/Registration';
import TermsAndConditions from './components/termsAndConditions/TermsAndConditions';

function App() {
  return (
    <div>
      <Navbar />
      <Registration />
      <TermsAndConditions />
      <Footer />
    </div>
  );
}

export default App;
