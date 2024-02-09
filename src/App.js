import './App.css';
import CustomerSupport from './components/CustomerSupport';
import DetailedFeatures from './components/DetailedFeatures';
import Footer from './components/Footer';
import Header from './components/Header';
import Inquiry from './components/Inquiry';
import MainFeature from './components/MainFeature';

function App() {
  return (
    <div className="App">
      <Header />
      <Inquiry />
      <MainFeature />
      <DetailedFeatures />
      <CustomerSupport />
      <Footer />
    </div>
  );
}

export default App;

