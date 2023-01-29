import './ordering-coffee.scss';

export const OrderingCoffee = () => {
  return (
    <section className='coffee'>
      <div className='container'>
        <div className='coffee__inner'>
          <ol className='coffee__list'>
            <li className='coffee__item'>
              <span className='coffee__item__numbers'>01</span>
              <p className='coffee__item__descs'>Preferences</p>
            </li>
            <li className='coffee__item'>
              <span className='coffee__item__numbers'>02</span>
              <p className='coffee__item__descs'>Bean Type</p>
            </li>
            <li className='coffee__item'>
              <span className='coffee__item__numbers'>03</span>
              <p className='coffee__item__descs'>Quantity</p>
            </li>
            <li className='coffee__item'>
              <span className='coffee__item__numbers'>04</span>
              <p className='coffee__item__descs'>Grind Option</p>
            </li>
            <li className='coffee__item'>
              <span className='coffee__item__numbers'>05</span>
              <p className='coffee__item__descs'>Deliveries</p>
            </li>
          </ol>
          <form
            action='https://echo.htmlacademy.ru/'
            method='POST'
          >
            <details className='coffee__details'>
              <summary>
                <h2 className='coffee__title'>How do you drink your coffee?</h2>
                <button className='coffee__title__arrow'></button>
              </summary>
              <div className='coffee__active__box'>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='How do you drink your coffee?'
                    type='radio'
                    value='capsule'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>Capsule</h3>
                    <p className='card__text'>
                      Compatible with Nespresso systems and similar brewers
                    </p>
                  </div>
                </label>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='How do you drink your coffee?'
                    type='radio'
                    value='filter'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>Filter</h3>
                    <p className='card__text'>
                      For pour over or drip methods like Aeropress, Chemex, and
                      V60
                    </p>
                  </div>
                </label>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='How do you drink your coffee?'
                    type='radio'
                    value='espresso'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>Espresso</h3>
                    <p className='card__text'>
                      Dense and finely ground beans for an intense, flavorful
                      experience
                    </p>
                  </div>
                </label>
              </div>
            </details>
            <details className='coffee__details'>
              <summary>
                <h2 className='coffee__title'>What type of coffee?</h2>
                <button className='coffee__title__arrow'></button>
              </summary>
              <div className='coffee__active__box'>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='What type of coffee?'
                    type='radio'
                    value='single-origin'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>Single Origin</h3>
                    <p className='card__text'>
                      Distinct, high quality coffee from a specific family-owned
                      farm
                    </p>
                  </div>
                </label>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='What type of coffee?'
                    type='radio'
                    value='decaf'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>Decaf</h3>
                    <p className='card__text'>
                      Just like regular coffee, except the caffeine has been
                      removed
                    </p>
                  </div>
                </label>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='What type of coffee?'
                    type='radio'
                    value='blended'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>Blended</h3>
                    <p className='card__text'>
                      Combination of two or three dark roasted beans of organic
                      coffees
                    </p>
                  </div>
                </label>
              </div>
            </details>
            <details className='coffee__details'>
              <summary>
                <h2 className='coffee__title'>How much would you like?</h2>
                <button className='coffee__title__arrow'></button>
              </summary>
              <div className='coffee__active__box'>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='How much would you like?'
                    type='radio'
                    value='250g'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>250g</h3>
                    <p className='card__text'>
                      Perfect for the solo drinker. Yields about 12 delicious
                      cups.
                    </p>
                  </div>
                </label>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='How much would you like?'
                    type='radio'
                    value='500g'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>500g</h3>
                    <p className='card__text'>
                      Perfect option for a couple. Yields about 40 delectable
                      cups.
                    </p>
                  </div>
                </label>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='How much would you like?'
                    type='radio'
                    value='1000g'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>1000g</h3>
                    <p className='card__text'>
                      Perfect for offices and events. Yields about 90 delightful
                      cups.
                    </p>
                  </div>
                </label>
              </div>
            </details>
            <details className='coffee__details'>
              <summary>
                <h2 className='coffee__title'>Want us to grind them?</h2>
                <button className='coffee__title__arrow'></button>
              </summary>
              <div className='coffee__active__box'>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='Want us to grind them?'
                    type='radio'
                    value='wholebean'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>Wholebean</h3>
                    <p className='card__text'>
                      Best choice if you cherish the full sensory experience
                    </p>
                  </div>
                </label>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='Want us to grind them?'
                    type='radio'
                    value='filter'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>Filter</h3>
                    <p className='card__text'>
                      For pour over or drip methods like Aeropress, Chemex, and
                      V60
                    </p>
                  </div>
                </label>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='Want us to grind them?'
                    type='radio'
                    value='cafetiére'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>Cafetiére</h3>
                    <p className='card__text'>
                      Course ground beans specially suited for french press
                      coffee
                    </p>
                  </div>
                </label>
              </div>
            </details>
            <details className='coffee__details'>
              <summary>
                <h2 className='coffee__title'>How often should we deliver?</h2>
                <button className='coffee__title__arrow'></button>
              </summary>
              <div className='coffee__active__box'>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='How often should we deliver?'
                    type='radio'
                    value='every-week'
                    required
                  />
                  <div className='card__box card__box--pad'>
                    <h3 className='card__title'>Every week</h3>
                    <p className='card__text'>
                      $7.20 per shipment. Includes free first-className
                      shipping.
                    </p>
                  </div>
                </label>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='How often should we deliver?'
                    type='radio'
                    value='every-2-weeks'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>Every 2 weeks</h3>
                    <p className='card__text'>
                      $9.60 per shipment. Includes free priority shipping.
                    </p>
                  </div>
                </label>
                <label className='coffee__active card'>
                  <input
                    className='card__hidden'
                    name='How often should we deliver?'
                    type='radio'
                    value='every-month'
                    required
                  />
                  <div className='card__box'>
                    <h3 className='card__title'>Every month</h3>
                    <p className='card__text'>
                      $12.00 per shipment. Includes free priority shipping.
                    </p>
                  </div>
                </label>
              </div>
            </details>
            <div className='coffee__summary order'>
              <h2 className='order__title'>Order Summary</h2>
              <div className='order__text__box'>
                <p className='order__text'>
                  “I drink my coffee using
                  <span className='order__style'>Capsules</span>, with a
                  <span className='order__style'>_____</span> type of bean.
                  <span className='order__style'>_____</span> , sent to me
                  <span className='order__style'>_____</span>.”
                </p>
              </div>
            </div>
            <button
              className='coffee__btn'
              type='submit'
            >
              Create my plan!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
