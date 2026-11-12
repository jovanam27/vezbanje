
import './App.css';

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2>StudentHub</h2>

        <div className="nav-links">
          <a href="#">Početna</a>
          <a href="#">O nama</a>
          <a href="#">Kontakt</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <h1>Dobrodošli na StudentHub!</h1>
          <p>
            Sve što ti je potrebno za uspešno studiranje
            nalazi se na jednom mestu.
          </p>

          <button>Saznaj više</button>
        </section>

        <section className="cards">
          <div className="card">
            <h3>📚 Materijali</h3>
            <p>Pronađi skripte, knjige i druge materijale za učenje.</p>
          </div>

          <div className="card">
            <h3>📅 Organizacija</h3>
            <p>Organizuj svoje obaveze i prati rokove.</p>
          </div>

          <div className="card">
            <h3>💡 Saveti</h3>
            <p>Pronađi korisne savete za efikasnije studiranje.</p>
          </div>
        </section>
      </main>

    </div>
  );
}

export default App;
