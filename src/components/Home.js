import Navbar from "../common/header/navbar";
import dots from "../images/dots.png";
import about1 from "../images/about-us-1.jpg";
import about2 from "../images/about-us-2.jpg";
import about3 from "../images/about-us-3.jpg";
import about4 from "../images/about-us-4.webp";
import product1 from "../images/furniture.jpeg";
import product2 from "../images/furniture-2.jpeg";
import product3 from "../images/furniture-3.jpeg";
import product4 from "../images/furniture-4.jpeg";
import arrow from "../images/arrow.svg.svg";
import men from "../images/manthinking.png";
import "../styles/main.css";
import Footer from "../common/footer/footer";

const Home = () => {
  return (
    <>
      <section className="home-page">
        <Navbar />
        <div className="main-section">
          <div className="blur-section">
            <img className="dots-image" src={dots} />
            <div className="blur-box">
              <h1>We Help You Make Modern Interior</h1>
              <div className="heading-info">
                We will help you ton make an elegant and luxurious interior
                designer by professional interior designer
              </div>
            </div>
          </div>
          <div className="carousel-container">
            <img style={{ width: "100%" }} src={about2} alt="" />
          </div>
          <div className="carousel-control">
            <div className="pre">
              <img
                style={{ transform: "rotate(270deg)", height: "17px" }}
                src={arrow}
                alt=""
              />
            </div>
            <div className="next">
              <img
                style={{ transform: "rotate(90deg)", height: "17px" }}
                src={arrow}
                alt=""
              />
            </div>
          </div>
          <div className="down-arrow">
            <svg
              width={28}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <line
                x1="128"
                y1="40"
                x2="128"
                y2="216"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="17"
              />
              <polyline
                points="56 144 128 216 200 144"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="17"
              />
            </svg>
          </div>
        </div>
        <div className="partners">
          <div className="company-heading">TRUSTED BY OVER 1K + COMPANIES</div>
          <div className="companies-container">
            <div>MICROSOFT</div>
            <div>BMW</div>
            <div>Google</div>
            <div>DUCATI</div>
            <div>AMAZON</div>
          </div>
        </div>
        <div className="hot_deals_wrapper">
          <div className="hot-deals">
            <h1 className="deals">
              Hot 🔥 <br />
              deals for you
            </h1>
            <div className="deals-text">
              Online shopping for retail sales direct to consumers
            </div>
          </div>
          <div className="deals-box">
            <div className="deals-heading">1.5% Cashback</div>
            <div className="deals-text">
              Online shopping for retail sales direct to consumers
            </div>
          </div>
          <div className="deals-box">
            <div className="deals-heading">30 day terms</div>
            <div className="deals-text">
              Online shopping for retail sales direct to consumers
            </div>
          </div>
          <div className="deals-box">
            <div className="deals-heading">Save Money</div>
            <div className="deals-text">
              Online shopping for retail sales direct to consumers
            </div>
          </div>
        </div>
        <div className="about_us_wapper">
          <div className="heading-button">
            <div className="heading-info">
              <h1 className="heading">About Us</h1>
              <div className="small-text">
                <div>At bensik consultancy, we take pride in our values</div>
                <div>- service, integrity and existence.</div>
              </div>
            </div>
            <button>Learn More</button>
          </div>
          <div className="about-section">
            <div className="left-section">
              <div className="info-box">
                <div className="number">1.</div>
                <div className="heading-bold">Who We Are</div>
                <div className="small-text">
                  You get a 2-week free trial to kick the smarty time. We want
                  you to
                </div>
              </div>
              <div className="info-box">
                <div className="number">2.</div>
                <div className="heading-bold">What Do We Do</div>
                <div className="small-text">
                  We give you a free course that guides you through the process
                </div>
              </div>
              <div className="info-box">
                <div className="number">3.</div>
                <div className="heading-bold">How Do We Help</div>
                <div className="small-text">
                  Use our multimedia lectures, videos and coaching assistance.
                </div>
              </div>
              <div className="info-box">
                <div className="number">4.</div>
                <div className="heading-bold">Create Success Story</div>
                <div className="small-text">
                  With access to online learning resources anyone can transform
                </div>
              </div>
            </div>
            <div className="right-section">
              <img className="about-image-one-type" src={about2} />
              <img className="about-image-two-type" src={about1} />
              <img className="about-image-two-type" src={about3} />
              <img className="about-image-one-type" src={about4} />
            </div>
          </div>
        </div>

        <div className="product-wrapper">
          <div className="product-heading-button">
            <h1 className="section-heading">Products</h1>
            <div className="text-and-btn">
              <div>See All</div>
            </div>
          </div>
          <div>
            <ul className="Products-toggle">
              <li>
                <a href="#">All</a>
              </li>
              <li>
                <a href="#">Bed</a>
              </li>
              <li>
                <a href="#">Sofa</a>
              </li>
              <li>
                <a href="#">Chair</a>
              </li>
              <li>
                <a href="#">Light</a>
              </li>
            </ul>
          </div>
          <div className="product-images">
            <img src={product1} alt="" />
            <img src={product2} alt="" />
            <img src={product3} alt="" />
            <img src={product4} alt="" />
            <img src={product2} alt="" />
            <img src={product1} alt="" />
            <img src={product3} alt="" />
            <img src={product4} alt="" />
          </div>
        </div>

        <div class="client_feedback_wrapper">
          <div class="client_top">
            <h1>
              What Are Happy <br />
              Client Says
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing <br />
              elit. Sapiente aut ex temporibus voluptas
            </p>
          </div>
          <div class="client_bottom">
            <div class="client_left">
              <img
                style={{ backgroundColor: "#a8c1ff" }}
                height="250px"
                width="200px"
                src={men}
                alt=""
              />
            </div>
            <div class="client_right">
              <div class="site-header__start">
                <a href="#" class="brand">
                  furni.shop
                </a>
              </div>
              <div class="client_feedback">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis a
                modi atque aut unde soluta ea ipsum vitae, neque qui quidem
                cupiditate adipisci veritatis possimus suscipit aspernatur?
                Atque, labore dolores!
              </div>
              <div class="client_name">Larry Dimond</div>
              <div class="client_title">Cheif Exucuteive Officer</div>
              <div class="Client_button">
                <div class="wrap">
                  <button class="btn_client">
                    <img
                      style={{ transform: "rotate(177deg)", height: "17px" }}
                      src={arrow}
                      alt=""
                    />
                  </button>
                </div>
                <div class="wrap">
                  <button class="btn_client">
                    <img
                      style={{ transform: "rotate(360deg)", height: "17px" }}
                      src={arrow}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
export default Home;
