import './App.css';
import SpellDictionary from './SpellDictionary';
import wand from './wand.png';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
      <img src={wand} className="App-logo" alt="wand"/>     
      <h1>Spell Wiz</h1>
      </div>
      <h2 className='slogan'>Your Complete Guide to Harry Potter Spells</h2>
      <main>
        <h3>Type a spell:</h3>
        <SpellDictionary defaultKeyword="aguamenti"/>
      </main>
      <footer className="text-center">Coded by
      <a href="https://github.com/nataliathome"> Natália Thomé</a>
      </footer>
      </div>
    </div>
  );
}
