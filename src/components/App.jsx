// create your App component here
import { useEffect, useState } from "react";

const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchDogImage = async () => {
    setIsLoading(true);

    const response = await fetch(DOG_API_URL);
    const data = await response.json();
    setDogImage(data.message);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
      <h1>Random Dog Generator</h1>
      <button onClick={fetchDogImage}>Get New Dog</button>
      {isLoading ? <p>Loading...</p> : <img src={dogImage} alt="A Random Dog" />}
    </div>
  );
}

export default App;
