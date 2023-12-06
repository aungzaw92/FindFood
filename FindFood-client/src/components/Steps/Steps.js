import './Steps.scss';
import mobileScreen1 from '../../assets/img/app/app-screen-1.png';
import mobileScreen2 from '../../assets/img/app/app-screen-2.png';
import mobileScreen3 from '../../assets/img/app/app-screen-3.png';

const Steps = () => {
  return (
    <>
      <section className="stepPage container">
        <span className="stepPage-span">How it works</span>
        <h2 className="stepPage-heading">
          Your favorite dish in 3 simple steps
        </h2>

        <div className="steps">
          <div className="steps__step">
            <div className="steps__step-text">
              <p className="steps__step-text-no">01</p>
              <h3 className="steps__step-text-h">
                Tell us what you like (and what not)
              </h3>
              <p className="steps__step-text-p">
                Never again waste time thinking about what to eat! Findfood AI
                will find a meal with your prefrenses. It makes sure you get
                what you prefer or what you avoid, no matter what diet you
                follow!
              </p>
            </div>

            <div className="steps__step-imgbox">
              <img
                src={mobileScreen1}
                className="steps__step-imgbox-img"
                alt="mobile app screen"
              />
            </div>
          </div>

          <div className="steps__step">
            <div className="steps__step-text">
              <p className="steps__step-text-no">02</p>
              <h3 className="steps__step-text-h">Check your list</h3>
              <p className="steps__step-text-p">
                Check your prefrences on the list and press filter button.
              </p>
            </div>

            <div className="steps__step-imgbox steps__step-imgbox-column">
              <img
                src={mobileScreen2}
                className="steps__step-imgbox-img"
                alt="mobile app screen"
              />
            </div>
          </div>

          <div className="steps__step">
            <div className="steps__step-text">
              <p className="steps__step-text-no">03</p>
              <h3 className="steps__step-text-h">
                Choose one of the suggestions filtered for you
              </h3>
              <p className="steps__step-text-p">
                Click one of the meal on the list filtered for you by Findfood
                AI.
              </p>
            </div>

            <div className="steps__step-imgbox">
              <img
                src={mobileScreen3}
                className="steps__step-imgbox-img"
                alt="mobile app screen"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Steps;
