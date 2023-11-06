import React, { useEffect, useState, useCallback, useRef } from "react";
import DatePicker from "../components/DatePicker";
import arrow from "../images/arrow.svg";
import { toJpeg } from "html-to-image";
import logo from "../images/guarapo_logo.svg";
import ReactGA from "react-ga4"

if (typeof window !== "undefined" ) {
  ReactGA.initialize("G-LLN4J3R6S9");
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
}

function Main() {
  const Years = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]
  const Weeks = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50,]
  const [userWeeks, setUserWeeks] = useState(0);
  const [totalWeeks, setTotalWeeks] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    let row = [];
    for (let i = 0; i < 4680; i++) {
      if (i < userWeeks) {
        row.push(
          <div key={i} className="square black">
            <div className="content"></div>
          </div>
        )
      }
      else{
      row.push(
        <div key={i} className="square">
          <div className="content"></div>
        </div>
      )}
    }
    setTotalWeeks(row);
    
  }, [userWeeks]);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toJpeg(ref.current, { cacheBust: true, backgroundColor: "#ffffff" })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-live-in-weeks.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="container">
      {/* Header */}
      <div className="row justify-content-center">
        <div className="header col-12 d-flex flex-wrap justify-content-around align-items-center">
          <span>
          <i className="fa-solid fa-2x fa-calendar-days me-3"></i><h2 className="header-title">90 YEAR LIFE IN WEEKS</h2>
          </span>
          <span>
          <a className="text-secondary" href="https://instagram.com/guarapomedia" target="_blank" rel="noreferrer"><i className="fa-brands fa-2x fa-instagram me-3" aria-label="instagram"></i></a>
          <a className="text-secondary"  href="https://twitter.com/guarapomedia" target="_blank" rel="noreferrer"><i className="fa-brands fa-2x fa-x-twitter me-3"  aria-label="twitter"></i></a>
          <a className="text-secondary"  href="https://github.com/waltermazzariol/gatsby-your-live-in-weeks" target="_blank" rel="noreferrer"><i className="fa-brands fa-2x fa-github" aria-label="github"></i></a>
          </span>
        </div>
        <div className="col-12">
          <hr />
        </div>

        {/* Date picker */}
        <div className="col-12 col-md-3 mb-5 mt-4">
          <DatePicker setDate={setUserWeeks} />
        </div>

        <div className="col-12">
          <hr />
        </div>
      </div>

      {/* Matrix */}
      <div ref={ref}>
        <div className="row g-0  mt-5 justify-content-center text-center">
          <div className="col-12">
            <h1 className="mb-5">MY LIVE IN WEEKS</h1>
          </div>
          <div className="wrapper col-11 col-lg-8">
            <div className="week-title">
              Week of the Year <img src={arrow} alt="arrow" />
            </div>
           
            <div className="weeks">
            {Weeks.map((key) => (
              <div key={key} className="week-number">
                {key}
              </div>
            ))}
            </div>
            <div className="year-title">
              <img src={arrow} className="arrow-rotate" alt="arrow" /> Age
            </div>
          </div>
          <div className="w-100"></div>
          <div className="wrapper col-1 years">
            {Years.map((key) => (
              <div key={key} className="year-number">
                {key}
              </div>
            ))}
          </div>
          <div className="wrapper col-10 col-lg-8">
            <div className="squares">{totalWeeks.map((key) => key)}</div>
          </div>
          <div className="col-12">
            <h2 className="text-center my-5 fw-semibold">You only live once</h2>
            <hr />
          </div>
          <div className="w-100"></div>
          <div className="col-12 col-md-3 justify-content-center">
            <button className="btn btn-primary mt-3" onClick={onButtonClick}>
              Download Image for print →
            </button>
            
          </div>
        </div>
      </div>
      <div className="col-12 my-5">
      <p className="text-secondary"></p>
        <div className="text-center text-secondary">
        <p>Based on the article <a href="https://waitbutwhy.com/2014/05/life-weeks.html">Life in Weeks</a> - 
          Copyright &copy; 2020 - {new Date().getFullYear()}
          </p><p><a
            href="https://guarapomedia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="ms-3 icon-logo" alt="Guarapo Media" />
          </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;

export function Head() {
  return (
  <>
    <title>Your Life in 90 Year</title>
    <meta name="title" content="Your Life in 90 Year" />
    <meta name="description" content="Know how many weeks have you live" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://90yearlifeinweeks.guarapomedia.com/" />
    <meta property="og:title" content="Your Life in 90 Year" />
    <meta property="og:description" content="Know how many weeks have you live" />
    <meta property="og:image" content="https://90yearlifeinweeks.guarapomedia.com/seo.webp" />
    <meta property= "og:image:width" content="1280" />
    <meta property= "og:image:height" content="720" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://90yearlifeinweeks.guarapomedia.com/" />
    <meta property="twitter:title" content="Your Life in 90 Year" />
    <meta property="twitter:description" content="Know how many weeks have you live" />
    <meta property="twitter:image" content="https://90yearlifeinweeks.guarapomedia.com/seo.webp" />
  </>
)}