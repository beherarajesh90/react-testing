import './app.scss';
import Header from './components/header';
import Headline from './components/headline';
function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Headline heading='Heading' desc='lorem ipsum lorem isum' />
      </main>
    </div>
  );
}

export default App;
