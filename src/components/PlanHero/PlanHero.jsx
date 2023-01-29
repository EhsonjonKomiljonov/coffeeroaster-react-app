import './plan-hero.scss';

export const PlanHero = () => {
  return (
    <section className='plan-hero'>
      <div className='container'>
        <div className='plan-hero__inner'>
          <div className='plan-hero__content'>
            <h2 className='plan-hero__title'>Create plan</h2>
            <div className='plan-hero__text__box'>
              <p className='plan-hero__text'>
                Coffee the way you wanted it to be. For coffee delivered
                tomorrow, or next week. For whatever brew method you use. For
                choice, for convenience, for quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
