import Tours from "./Tours";
import Loading from "./Loading";
import "./styles.css";
import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div>
        <h1>No Tour available</h1>
        <button onClick={fetchTours}>Reset</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Visit Us</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}
