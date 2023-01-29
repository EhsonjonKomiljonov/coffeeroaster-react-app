import './quality.scss';
import QualityImg from '../../assets/images/quality-img.jpg';
import QualityImgRetina from '../../assets/images/quality-img@2x.jpg';
import QualityTabletImg from '../../assets/images/quality-tablet-img.jpg';
import QualityTabletImgRetina from '../../assets/images/quality-tablet-img@2x.jpg';

export const Quality = () => {
  return (
    <section className='quality'>
      <div className='container'>
        <div className='quality__inner'>
          <div className='quality__content'>
            <h2 className='quality__title'>Uncompromising quality</h2>
            <p className='quality__text'>
              Although we work with growers who pay close attention to all
              stages of harvest and processing, we employ, on our end, a
              rigorous quality control program to avoid over-roasting or baking
              the coffee dry. Every bag of coffee is tagged with a roast date
              and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </p>
          </div>
          <picture>
            <source
              media='(max-width: 1090px)'
              srcSet={(QualityTabletImg, QualityTabletImgRetina)}
            />
            <img
              className='quality-img'
              src={QualityImg}
              srcSet={(QualityImg, QualityImgRetina)}
              alt='Uncompromising quality'
              width='445'
              height='475'
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
