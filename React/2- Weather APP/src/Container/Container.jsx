/* ================= Imports ================= */
import "./Container.css";

// --- MUI Library ---
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

// --- React Hooks ---
import { useEffect, useState } from "react";

// --- i18n (Simple Local Translation) ---
import { resources } from "../translation"; // Translation Catalog
import i18n from "i18next";

// --- Axios for API requests ---
import axios from "axios";

// --- Moment for Dates ---
import moment from "moment";
import "moment/locale/ar";
moment.locale("ar");

// Initialize i18next ONCE
i18n.init({
  resources,
  lng: "en",
});

const governorates = [
  { lon: "31.2357", lat: "30.0444", gov: "Cairo" },
  { lon: "31.2073", lat: "30.0131", gov: "Giza" },
  { lon: "31.2056", lat: "30.4667", gov: "Qalyubia" },
  { lon: "29.9187", lat: "31.2001", gov: "Alexandria" },
  { lon: "30.1337", lat: "31.0409", gov: "Beheira" },
  { lon: "27.2453", lat: "31.3525", gov: "Matrouh" },
  { lon: "31.8162", lat: "31.4175", gov: "Damietta" },
  { lon: "31.5233", lat: "31.0364", gov: "Dakahlia" },
  { lon: "30.9394", lat: "31.1094", gov: "KafrElSheikh" },
  { lon: "31.1167", lat: "30.8667", gov: "Gharbia" },
  { lon: "31.0120", lat: "30.4667", gov: "Monufia" },
  { lon: "31.5167", lat: "30.7333", gov: "Sharqia" },
  { lon: "32.2951", lat: "31.2653", gov: "PortSaid" },
  { lon: "32.2662", lat: "30.5965", gov: "Ismailia" },
  { lon: "32.5498", lat: "29.9668", gov: "Suez" },
  { lon: "33.7990", lat: "30.5821", gov: "NorthSinai" },
  { lon: "34.2748", lat: "28.9410", gov: "SouthSinai" },
  { lon: "30.8418", lat: "29.3084", gov: "Fayoum" },
  { lon: "31.0900", lat: "29.0667", gov: "BeniSuef" },
  { lon: "30.7400", lat: "28.0894", gov: "Minya" },
  { lon: "31.1837", lat: "27.1801", gov: "Assiut" },
  { lon: "31.7000", lat: "26.5500", gov: "Sohag" },
  { lon: "32.7267", lat: "26.1551", gov: "Qena" },
  { lon: "32.6396", lat: "25.6872", gov: "Luxor" },
  { lon: "32.8998", lat: "24.0908", gov: "Aswan" },
  { lon: "30.5450", lat: "25.4543", gov: "NewValley" },
];

// To cancel Axios request if component unmounts
let cancelAxios = null;

/* ================= MAIN COMPONENT ================= */
export default function ContainerBox() {
  // Date string
  const [dateAndTime, setDateAndTime] = useState("");

  // Language state (manual toggle)
  const [language, setLanguage] = useState("en");

  // Toggle between governorates
  const [governorate, setGovernorate] = useState(governorates[0]);

  // Active governorate
  const [activeGov, setActiveGov] = useState(governorates[0].gov);

  // Weather data
  const [temp, setTemp] = useState({
    currentTemp: null,
    description: "",
    minTemp: null,
    maxTemp: null,
    iconTemp: "",
  });

  function handleGovernorateWeather(index) {
    setGovernorate({
      lon: governorates[index].lon,
      lat: governorates[index].lat,
      gov: governorates[index].gov,
    });

    setActiveGov(governorates[index].gov);
  }

  // Set Date on Component Mount
  useEffect(() => {
    setDateAndTime(moment().format("MMMM Do YYYY"));
  }, []);

  // Fetch Weather on Mount
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${governorate.lat}&lon=${governorate.lon}&appid=325bef11804965e987f40a9a93bb5d08`,
        {
          cancelToken: new axios.CancelToken((c) => (cancelAxios = c)),
        }
      )
      .then((response) => {
        const data = response.data;

        const current = Math.round(data.main.temp - 272.15);
        const min = Math.round(data.main.temp_min - 272.15);
        const max = Math.round(data.main.temp_max - 272.15);
        const desc = data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        setTemp({
          currentTemp: current,
          description: desc,
          minTemp: min,
          maxTemp: max,
          iconTemp: icon,
        });
      });

    return () => cancelAxios && cancelAxios();
  }, [governorate]);

  // Toggle Language Button
  function handleClick() {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  }

  return (
    <>
      <Container maxWidth="md" className="container">
        <Box
          className="Box"
          sx={{ direction: language === "ar" ? "ltr" : "rtl" }}
        >
          {/* WEATHER CARD Start */}
          <div
            className="card"
            style={{ direction: language === "ar" ? "rtl" : "ltr" }}
          >
            {/* Header (City + Date) Start */}
            <nav style={{ display: "flex" }}>
              <Typography variant="h2">
                {language === "ar" ? i18n.t(governorate.gov) : governorate.gov}
              </Typography>

              <Typography variant="h5">{dateAndTime}</Typography>
            </nav>
            {/* Header (City + Date) End */}

            <hr />

            <main style={{ display: "flex", alignItems: "center" }}>
              {/* Weather Data Start */}
              <div style={{ width: "55%" }}>
                <div className="degree">
                  <Typography className="degree" variant="h2">
                    {temp.currentTemp ?? "…"}°C
                  </Typography>

                  {/* Weather Icon */}
                  {temp.iconTemp && (
                    <img src={temp.iconTemp} alt="weather-icon" />
                  )}
                </div>

                {/* Weather Description Start */}
                <p className="cloud-name">
                  {language === "ar"
                    ? i18n.t(temp.description)
                    : temp.description}
                </p>
                {/* Weather Description End */}

                {/* Min / Max Temperature Start */}
                <Typography className="temp" sx={{ margin: "25px" }}>
                  {language === "ar"
                    ? `${i18n.t("max")}: ${temp.maxTemp}° | ${i18n.t("min")}: ${
                        temp.minTemp
                      }°`
                    : `max: ${temp.maxTemp}°C | min: ${temp.minTemp}°C`}
                </Typography>
                {/* Min / Max Temperature End */}
              </div>
              {/* Weather Data End */}

              {/* Cloud Icon */}
              <CloudIcon
                className="icon"
                sx={{ color: "#fff", fontSize: "200px" }}
              />
            </main>
          </div>
          {/* WEATHER CARD End */}

          {/* LANGUAGE SWITCH BUTTON Start */}
          <button onClick={handleClick}>
            {language === "ar" ? "إنجليزى" : "Arabic"}
          </button>
          {/* LANGUAGE SWITCH BUTTON End */}
        </Box>
        <div className="governorates">
          {governorates.map((g, index) => (
            <button
              key={index}
              onClick={() => handleGovernorateWeather(index)}
              className={activeGov === g.gov ? "active" : ""}
            >
              {language === "ar" ? i18n.t(g.gov) : g.gov}
            </button>
          ))}
        </div>
      </Container>
    </>
  );
}
