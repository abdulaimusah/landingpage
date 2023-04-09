import logo from './logo.svg';
import './App.css';
import Header from './header';
import Description from './description';
import Picture from './picture'; 
import Footer from './footer';

const App = () => {
  return (
    <div className="text-white bg-slate-900
     flex flex-col">
      <Header />
      <main className="flex mx-4 sm:mx-12
      md:mx-16 mt-12 " >
        <Description />
        <Picture />
      </main>
      <Footer />
    </div>
  );
}

export default App;
