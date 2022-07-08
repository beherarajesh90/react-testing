import './app.scss';
import SharedButton from './components/button';
import Header from './components/header';
import Headline from './components/headline';

const tempArr = [
  {
    name: 'john',
    email: 'john@saveplanet.com',
    age: 22,
    isOnline: true,
  },
];
function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Headline
          heading='Heading'
          desc='lorem ipsum lorem isum'
          tempArr={tempArr}
        />
        <SharedButton />
      </main>
    </div>
  );
}

export default App;
