import React, { useState, useEffect } from "react";

const useTemp = () => {
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not Supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
          );

          const data = await res.json();

          setTemp(Math.round(data.main.temp));
          setCity(data.name);
        } catch (err) {
          setError("Failed to Fetch Weather");
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError("Location Access Denied");
        setLoading(false);
      },
    );
  }, []);
  return { temp, city, loading, error };
};

export default useTemp;
