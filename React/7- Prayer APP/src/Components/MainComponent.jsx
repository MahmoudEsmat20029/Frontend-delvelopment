/*
  Author: Mahmoud Esmat
  Date  : 23-12-2025
*/

// ================ Imports ================
import { useEffect, useState } from "react";
import image from "../assets/image.png";
import moment from "moment";

// ================ Global variables ================
const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
const cities = ["Cairo", "Zagazig"];

// ================ Main Function ================
export default function MainComponent() {
  // useState Hook
  const [timingsData, setTimingsData] = useState(null);
  const [city, setCity] = useState("Cairo");
  const [currentTime, setCurrentTime] = useState("");
  const [nextPrayer, setNextPrayer] = useState(prayers[0]);

  const [countDown, setCountDown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // to appear time like "00:00:00" not "0:0:0"
  const pad = (n) => n.toString().padStart(2, "0");

  // ================ Side effects ================
  // useEffect hook
  // Fetch timings API
  useEffect(() => {
    const fetchTimings = async () => {
      try {
        const today = moment().format("DD-MM-YYYY");
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByAddress/${today}?address=${city},EG`
        );
        const data = await response.json();
        setTimingsData(data.data.timings);
      } catch (error) {
        console.error("Failed to fetch prayer timings:", error);
        setTimingsData(null);
      }
    };

    fetchTimings();
  }, [city]);

  // Get next prayer and calculate the time difference
  useEffect(() => {
    if (!timingsData) return;

    const interval = setInterval(() => {
      setCurrentTime(moment().format("MMMM Do YYYY, HH:mm:ss"));

      const now = moment();
      let upcomingPrayer = prayers[0];
      let prayerTime;

      for (let prayer of prayers) {
        prayerTime = moment(timingsData[prayer], "HH:mm");
        if (now.isBefore(prayerTime)) {
          upcomingPrayer = prayer;
          break;
        }
      }

      setNextPrayer(upcomingPrayer);

      if (now.isAfter(moment(timingsData["Isha"], "HH:mm"))) {
        prayerTime = moment(timingsData[upcomingPrayer], "HH:mm").add(1, "day");
      }

      const diffSeconds = prayerTime.diff(now, "seconds");

      const hours = Math.floor(diffSeconds / 3600);
      const minutes = Math.floor((diffSeconds % 3600) / 60);
      const seconds = diffSeconds % 60;

      setCountDown({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [timingsData]);

  return (
    <div className="container">
      <header>
        <div className="city-container">
          <p>{currentTime}</p>
          <h2>{city}</h2>
        </div>

        <div className="counter-container">
          <p>{nextPrayer} is next</p>
          <h2>{`${pad(countDown.hours)}:${pad(countDown.minutes)}:${pad(
            countDown.seconds
          )}`}</h2>
        </div>
      </header>

      <hr />

      <div className="content">
        {/* Row Start */}
        <div className="row text-center justify-content-md-center">
          {prayers.map((prayer, index) => {
            return (
              <div key={index} className="col-12 col-sm-4 col-md-2">
                <div className="card">
                  <img src={image} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{prayer}</h5>
                    <h1 className="card-text">
                      {timingsData ? timingsData[prayer] : "--:--"}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Row End */}

        {/* Dropdown Button Start */}
        <div className="dropdown" style={{ marginTop: "20px" }}>
          <button
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Cities List
          </button>
          <ul className="dropdown-menu">
            {cities.map((cityName, index) => {
              return (
                <li key={index}>
                  <a
                    onClick={() => setCity(cityName)}
                    className={
                      cityName === city
                        ? "dropdown-item active"
                        : "dropdown-item"
                    }
                    href="#"
                  >
                    {cityName}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Dropdown Button End */}
      </div>
    </div>
  );
}
