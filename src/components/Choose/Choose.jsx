import './choose.scss';
import DataChoose from '../../db/DataChoose';

export const Choose = () => {
  return (
    <section className='choose'>
      <div className='container'>
        <div className='choose__content'>
          <h2 className='choose__title'>Why choose us?</h2>
          <p className='choose__text'>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className='choose__inner'>
          <ul className='choose__list'>
            {DataChoose.map((el) => (
              <li className='choose__item' key={el.title}>
                <div className='choose__item__box'>
                  <h3 className='choose__subtitle'>{el.title}</h3>
                  <p className='choose__item__text'>{el.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
