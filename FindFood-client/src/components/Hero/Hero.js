import './Hero.scss';
import { useNavigate } from 'react-router-dom';
import heroImg from '../../assets/img/hero.png';
import personImg1 from '../../assets/img/customers/customer-1.jpg';
import personImg2 from '../../assets/img/customers/customer-2.jpg';
import personImg3 from '../../assets/img/customers/customer-3.jpg';
import personImg4 from '../../assets/img/customers/customer-4.jpg';
import personImg5 from '../../assets/img/customers/customer-5.jpg';
import personImg6 from '../../assets/img/customers/customer-6.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="heroBack">
        <div className="hero container">
          <div className="hero__text">
            <h2 className="hero__heading">
              Select your favorite ingredient and enjoy your meal
            </h2>
            <p className="hero__desc">
              The smart food subscription that will make you enjoy your chosen
              ingerediant meal. Tailored to your personal tastes and nutritional
              needs.
            </p>
            <p className="btn" onClick={() => navigate(`/form`)}>
              Start making your list
            </p>

            <div className="hero__delivered">
              <div className="hero__delivered-imgs">
                <img src={personImg1} alt="Customer" />
                <img src={personImg2} alt="Customer" />
                <img src={personImg3} alt="Customer" />
                <img src={personImg4} alt="Customer" />
                <img src={personImg5} alt="Customer" />
                <img src={personImg6} alt="Customer" />
              </div>
              <p className="hero__delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>

          <div className="hero__img">
            <img
              src={heroImg}
              className="hero__img-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
