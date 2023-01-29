import { Button } from '../GreenButton/GreenButton';
import './hero.scss';

export const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero__inner'>
          <div className='hero__content'>
            <h1 className='hero__title'>Great coffee made simple.</h1>
          </div>
          <div className='hero__text__box'>
            <p className='hero__text'>
              Start your mornings with the world's best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
          </div>
          <Button text='Create your plan' />
        </div>
      </div>
    </section>
  );
};
