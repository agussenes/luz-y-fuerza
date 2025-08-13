import Router from './Router';
// Importamos componentes parciales
import Header from './components/partials/Header/Header';
import Footer from './components/partials/Footer/Footer';
import SocialSidebar from './components/partials/SocialSidebar/SocialSidebar';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
      <Router />
      </main>
      <Footer />
      <SocialSidebar />
    </>
  );
}

export default App;
