import golden from './golden.png';
import './App.css';
import SpellDictionary from './SpellDictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Spell Wiz</h1>
      <h2 className='slogan'>Your Complete Guide to Harry Potter Spells</h2>
      <img src={golden}  className="App-logo" alt="Golden" />
      <main>
        <SpellDictionary />
      </main>
      <footer className="text-center">Coded by Natália Thomé</footer>
      </div>
    </div>
  );
}
