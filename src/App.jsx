const movies = ["Lord of the Ring", "Star Wars", "dune"];
export const animals = [
  {
    id: 1,
    name: "dog",
    img: "https://nypost.com/wp-content/uploads/sites/2/2022/12/worlds-cutest-dog-comp-1.jpg",
  },
  {
    id: 2,
    name: "cat",
    img: "https://img.freepik.com/foto-gratis/lindo-gatito-domestico-sienta-ventana-mirando-fuera-ia-generativa_188544-12519.jpg",
  },
  {
    id: 3,
    name: "bird",
    img: "https://media.cnn.com/api/v1/images/stellar/prod/190414090035-01-cassowary.jpg",
  },
];

const HTMLmovies = movies.map((movie, id) => {
  return (
    <p key={id}>
      {id} - {movie}
    </p>
  );
});

const HTMLanimals = animals.map((animal) => {
  return (
    <div key={animal.id}>
      <h2>{animal.name}</h2>
      <img src={animal.img} alt="" width={200} />
    </div>
  );
});

function App() {
  return (
    <div>
      <h1>Renderizado de listas</h1>
      {HTMLmovies}
      {HTMLanimals}
    </div>
  );
}

export default App;
