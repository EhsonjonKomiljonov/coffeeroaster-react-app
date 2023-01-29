import './headquarter.scss';

export const HeadQuarter = () => {
  return (
    <section className='headquarter'>
      <div className='container'>
        <div className='headquarter__inner'>
          <h2 className='headquarter__title'>Our headquarters</h2>
          <ul className='headquarter__list'>
            <li className='headquarter__item'>
              <h3 className='headquarter__subtitle'>United Kingdom</h3>
              <ul className='headquarter__item__list strategies'>
                <li className='strategies__item'>
                  <p className='strategies__desc'>68 Asfordby Rd</p>
                </li>
                <li className='strategies__item'>
                  <p className='strategies__desc'>Alcaston</p>
                </li>
                <li className='strategies__item'>
                  <p className='strategies__desc'>SY6 1YA</p>
                </li>
                <li className='strategies__item'>
                  <p className='strategies__desc'>+44 1241 918425</p>
                </li>
              </ul>
            </li>
            <li className='headquarter__item'>
              <h3 className='headquarter__subtitle'>Canada</h3>
              <ul className='headquarter__item__list strategies'>
                <li className='strategies__item'>
                  <p className='strategies__desc'>1528 Eglinton Avenue</p>
                </li>
                <li className='strategies__item'>
                  <p className='strategies__desc'>Toronto</p>
                </li>
                <li className='strategies__item'>
                  <p className='strategies__desc'>Ontario M4P 1A6</p>
                </li>
                <li className='strategies__item'>
                  <p className='strategies__desc'>+1 416 485 2997</p>
                </li>
              </ul>
            </li>
            <li className='headquarter__item'>
              <h3 className='headquarter__subtitle'>Australia</h3>
              <ul className='headquarter__item__list strategies'>
                <li className='strategies__item'>
                  <p className='strategies__desc'>36 Swanston Street</p>
                </li>
                <li className='strategies__item'>
                  <p className='strategies__desc'>Kewell</p>
                </li>
                <li className='strategies__item'>
                  <p className='strategies__desc'>Victoria</p>
                </li>
                <li className='strategies__item'>
                  <p className='strategies__desc'>+61 4 9928 3629</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
