import golden from './golden.png';
import './App.css';
import SpellDictionary from './SpellDictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Spell Wiz - spells </h1>
      <img src={golden}  className="App-logo" alt="Golden" />
      <main>
        <SpellDictionary />
      </main>
      <footer className="text-center">Coded by Natália Thomé</footer>
      </div>
    </div>
  );
}
