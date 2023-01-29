import './plan-work.scss'

export const PlanWork = () => {
  return (
    <section class='work work--plan'>
      <div class='container'>
        <div class='work__inner work__inner--plan'>
          <div class='work__style'>
            <span class='work__style__inners work__style__inners--plan'></span>
            <span class='work__style__inners work__style__inners--plan'></span>
            <span class='work__style__inners work__style__inners--plan'></span>
          </div>
          <ul class='work__list work__list--plan'>
            <li class='work__item'>
              <span class='work__number'>01</span>
              <div class='work__subtitle__box'>
                <h3 class='work__subtitle work__descs--plan'>
                  Pick your coffee
                </h3>
              </div>
              <p class='work__text work__descs--plan'>
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </li>
            <li class='work__item'>
              <span class='work__number'>02</span>
              <div class='work__subtitle__box'>
                <h3 class='work__subtitle work__descs--plan'>
                  Choose the frequency
                </h3>
              </div>
              <p class='work__text work__descs--plan'>
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </li>
            <li class='work__item'>
              <span class='work__number'>03</span>
              <div class='work__subtitle__box'>
                <h3 class='work__subtitle work__descs--plan'>
                  Receive and enjoy!
                </h3>
              </div>
              <p class='work__text work__descs--plan'>
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
