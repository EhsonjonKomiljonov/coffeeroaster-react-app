import './work.scss';
import { Button } from '../GreenButton/GreenButton';

export const Work = () => {
  return (
    <section className='work'>
      <div className='container'>
        <h2 className='work__title'>How it works</h2>
        <div className='work__style'>
          <span className='work__style__inners'></span>
          <span className='work__style__inners'></span>
          <span className='work__style__inners'></span>
        </div>
        <div className='work__inner'>
          <ul className='work__list'>
            <li className='work__item'>
              <span className='work__number'>01</span>
              <div className='work__subtitle__box'>
                <h3 className='work__subtitle'>Pick your coffee</h3>
              </div>
              <p className='work__text'>
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </li>
            <li className='work__item'>
              <span className='work__number'>02</span>
              <div className='work__subtitle__box'>
                <h3 className='work__subtitle'>Choose the frequency</h3>
              </div>
              <p className='work__text'>
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </li>
            <li className='work__item'>
              <span className='work__number'>03</span>
              <div className='work__subtitle__box'>
                <h3 className='work__subtitle'>Receive and enjoy!</h3>
              </div>
              <p className='work__text'>
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-className coffees curated to
                provide a distinct tasting experience.
              </p>
            </li>
          </ul>
          <Button text='Create your plan' />
        </div>
      </div>
    </section>
  );
};
