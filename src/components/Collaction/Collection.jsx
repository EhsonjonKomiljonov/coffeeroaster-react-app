import DataCollection from '../../db/DataCollection';
import './collection.scss';

export const Collaction = () => {
  return (
    <section className='collection'>
      <div className='container'>
        <h2 hidden>Our Collection</h2>
        <div className='collection__inner'>
          <ul className='collection__list'>
            {DataCollection.map((el) => (
              <li
                className='collection__item'
                key={el.title}
              >
                <img
                  src={el.img}
                  srcSet={(el.img, el.retinaImg)}
                  width='255'
                  height='193'
                  alt='Gran Espresso'
                />
                <div className='collection__content'>
                  <h3 className='collection__subtitle'>{el.title}</h3>
                  <p className='collection__text'>{el.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
