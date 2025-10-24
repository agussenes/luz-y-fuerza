import Router from './Router';
// Importamos componentes parciales
import Header from './components/partials/Header/Header';
import Footer from './components/partials/Footer/Footer';
// import SocialSidebar from './components/partials/SocialSidebar/SocialSidebar';

function App() {
  return (
    <>
      <section className="appGlobal d-flex flex-column">
        <Header />
        <main className="main-content flex-grow-1">
          <Router />
        </main>
        <Footer />
      </section>
      {/* <SocialSidebar /> */}
    </>
  );
}

export default App;
