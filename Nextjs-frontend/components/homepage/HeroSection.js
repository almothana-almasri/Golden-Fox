import { useKeenSlider } from "keen-slider/react";
import image1 from "../../public/images/q1.jpg";
import image2 from "../../public/images/q2.jpg";
import image3 from "../../public/images/q3.png";
import { Link as ScrollLink } from "react-scroll";

function HeroSection() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="hero">
      <div className="dark-overlay">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <img src={image1.src} alt="Slide 1" />
          </div>
          <div className="keen-slider__slide">
            <img src={image2.src} alt="Slide 2" />
          </div>
          <div className="keen-slider__slide">
            <img src={image3.src} alt="Slide 3" />
          </div>
        </div>
      </div>
      <div className="hero-content">
  <div className="hero-text">
    <h1>Welcome to Golden Fox</h1>
    <p>Your Premier Marketplace for Buying and Selling</p>
    <p>Discover unique products, great deals, and endless possibilities.</p>
    {/* <p>Explore and list items effortlessly.</p> */}
  </div>
  <ScrollLink to="categories" spy={true} smooth={true} duration={500}>
    <button>Start Exploring</button>
  </ScrollLink>
</div>


    </section>
  );
}

export default HeroSection;