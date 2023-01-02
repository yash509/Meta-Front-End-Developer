import rooftops from './assets/images/central-park.jpg';

function App() {
  const randomImageUrl = "https://picsum.photos/id/400/265";
  return (
    <div>
      <h1>
        Task: add three images with some styling
      </h1>
      <img
        height={200}
        src={rooftops}
        alt="An image of a rooftop in New York"
      />
      <img
        height={200}
        src={require("./assets/images/central-park.jpg")}
        alt="An image of central park"
      />
      <img
        src={randomImageUrl}
        height={200}
      />
    </div>
  );
}

export default App;