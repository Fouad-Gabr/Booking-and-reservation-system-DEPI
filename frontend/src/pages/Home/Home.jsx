import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faClock,
  faLocationDot,
  faWallet,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [workdays, setWorkdays] = useState({
    startWorkDay: "",
    endWorkDay: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const userTypeVar = localStorage.getItem("userType");
  const loggedIn = localStorage.getItem("loggedIn");

  const images = [
    "images/Capture.PNG",
    "images/front-view-athlete-doing-physiotherapy_23-2149866136.jpg",
    "images/bearded-man-using-spin-bike-physiotherapy-room_1157-38166c.jpg",
    "images/stock-photo-bearded-man-sportswear-training-exercise-machine-young-physician-kinesio-center.jpg",
    "images/medium-shot-man-helping-patient.jpg",
    "images/img - Copy.jpg",
    "images/man-medical-office-physiotherapist-is-rehabilitating-back_1157-44706.jpg",
    "images/side-view-physiotherapist-posing-work_23-2149866144.jpg",
    "images/istockphoto-1501185786-1024x1024.jpg",
    "images/Capture2.PNG",
    "images/istockphoto-1384499192-1024x1024.jpg",
    "images/240_F_503947158_z0skDG8qa7KYSrJhJ0w4le54oJgGufB8.jpg",
    "images/istockphoto-1396861229-1024x1024.jpg",
    "images/bearded-man-having-rehabilitation-after-injury-physiotherapy-clinic_1157-38583c.jpg",
    "images/1000_F_272760235_In1JYdWYVei4K8wvIa2n9p0Ol1zWoTPw.jpg",
    "images/1000_F_59201291_KSasis9jvvCrLbGJ9sYollXuxtcFzsm9.jpg",
    "images/1000_F_58376364_bzuxjKuNbfCJjHUh2618UOyzzpfdal92.jpg",
    "images/img222.jpg",
    "images/guy-doing-exercise-gym_23-2147688518.jpg",
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/workdays")
      .then((response) => {
        const data = response.data;
        if (data && data[0].startWorkDay && data[0].endWorkDay) {
          setWorkdays({
            startWorkDay: data[0].startWorkDay,
            endWorkDay: data[0].endWorkDay,
          });
        } else {
          console.error("Invalid data structure:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching workdays data:", error);
      });
  }, []);

  const checkBusinessStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const openingHour = 9;
    const closingHour = 18;

    if (currentHour >= openingHour && currentHour < closingHour) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    checkBusinessStatus();
  }, []);

  const handleYourDashboard = () => {
    navigate("/adminDashboard");
  };

  const handleBookNowClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/services");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="landing pt-4 pb-4">
      <div className="container">
        <div className="image-boxes mt-4">
          <div className="row">
            <div className="col-md-6 col-lg-4 position-relative pb-4 pb-lg-0 img-container d-flex flex-column justify-content-center align-items-center">
              <img
                src="images/Capture - Copy.PNG"
                alt="Barbershop"
                className="img-fluid position-relative  object-fit-cover"
              />
              <img
                src={images[13]}
                alt="Barbershop service 2"
                className="img-fluid mt-4"
              />
            </div>
            <div className="col-md-6 col-lg-4 d-flex pb-4 pb-md-0">
              <div className="two-image d-flex flex-column justify-content-center align-items-center gap-4">
                <div className="position-relative vurve" data-work="vurve">
                  <img
                    src={images[1]}
                    alt="Barbershop interior 1"
                    className="img-fluid mb-0"
                  />
                </div>
                <div>
                  <img
                    src="images/logo.PNG"
                    alt="Barbershop interior 2"
                    className="img-fluid m-0"
                  />
                </div>
                <div className="img-container">
                  <img
                    src="images/img.jpg"
                    alt="Barbershop interior 2"
                    className="img-fluid mt-0"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <div className="two-image d-flex flex-column gap-4 justify-content-center align-items-center">
                <div>
                  <img
                    src={images[3]}
                    alt="Barbershop service 1"
                    className="img-fluid"
                  />
                </div>
                <div className="position-relative img-container">
                  <img
                    src="images/medium-shot-man-helping-patient - Copy.jpg"
                    alt="Barbershop service 2"
                    className="img-fluid"
                  />

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn position-absolute btn-see-all"
                  >
                    See all images
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal d-flex justify-content-center align-items-center position-fixed height-100 width-100">
            <div className="modal-content bg-light p-4 position-relative">
              <span className="close" onClick={() => setIsModalOpen(false)}>
                &times;
              </span>
              <div className="modal-image-container text-center">
                <img
                  src={images[currentImageIndex]}
                  alt={`image ${currentImageIndex + 1}`}
                  className="img-fluid"
                />
              </div>
              <div className="modal-controls d-flex justify-content-around mt-2">
                <button
                  className="arrow left-arrow"
                  onClick={handlePreviousImage}
                >
                  &lt;
                </button>
                <button className="arrow right-arrow" onClick={handleNextImage}>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="business-card mt-4 text-start text-sm-center">
          <div className="align-items-center">
            <div className="d-flex justify-content-between">
              <h4 className="fw-bold">FlexiHealth</h4>
              <div className="d-flex">
                {loggedIn ? (
                  <>
                    {userTypeVar === "user" ? (
                      <>
                        <button className="btn btn-enquire me-2">
                          Enquire
                        </button>

                        <button
                          className="btn btn-book-now"
                          onClick={handleBookNowClick}
                        >
                          Book now
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-book-now"
                          onClick={handleYourDashboard}
                        >
                          your Dashboard
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <button className="btn btn-enquire me-2">Enquire</button>

                    <button
                      className="btn btn-book-now"
                      onClick={handleBookNowClick}
                    >
                      Book now
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="info-shop d-flex pt-3">
              <div className="stars pe-3">
                <span className="me-2">5.0</span>
                {[...Array(4)].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="stars"
                  />
                ))}
                <FontAwesomeIcon icon={faStarHalfAlt} className="stars" />
                <span className="ms-2">(196)</span>
              </div>
              <div>
                <span className="business-status pe-3">
                  {isOpen ? (
                    <>
                      Open
                      <span className="ms-1 text-muted dote">
                        closes at 6:00 pm
                      </span>
                    </>
                  ) : (
                    <>
                      Closed
                      <span className="ms-1 text-muted dote">
                        opens soon at 09:00 am
                      </span>
                    </>
                  )}
                </span>
                <span className="dote">MG Road, Cairo</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="row business-info">
            <div className="col-md-3 d-flex flex-md-row flex-column text-center text-md-start">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="pe-3 pb-md-0 pb-3"
              />
              <p>
                1st Floor, Cairo Festival City Mall, 11835, 90th Street, New
                Cairo, Cairo, Egypt <br />
                <Link
                  to="https://maps.app.goo.gl/EmVMUkEgzhPmTbRU9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                </Link>
              </p>
            </div>
            <div className="col-md-3 d-flex flex-md-row flex-column text-center text-md-start">
              <FontAwesomeIcon icon={faClock} className="pe-3 pb-md-0 pb-3" />
              <div>
                {workdays.startWorkDay && workdays.endWorkDay ? (
                  <p>
                    Starting from: {workdays.startWorkDay}
                    <br></br> to: {workdays.endWorkDay}
                  </p>
                ) : (
                  <p>No workdays available</p>
                )}
              </div>
            </div>
            <div className="col-md-3 flex-md-row flex-column text-center text-md-start">
              <p>Closed</p>
              <p>09:00 am - 06:00 pm</p>
            </div>
            <div className="col-md-3 d-flex flex-md-row flex-column text-center text-md-start">
              <FontAwesomeIcon icon={faWallet} className="pe-3 pb-md-0 pb-3" />
              <div>
                <p>Mode of payment</p>
                <p>Cash, Debit Card, Credit Card, UPI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
