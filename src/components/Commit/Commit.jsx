import CommitImg from '../../assets/images/commit-img.jpg';
import CommitImgTablet from '../../assets/images/commit-img-tablet.jpg';
import CommitImgMobile from '../../assets/images/commit-img-mobile.jpg';
import CommitImgRetina from '../../assets/images/commit-img@2x.jpg';
import CommitImgTabletRetina from '../../assets/images/commit-img-mobile@2x.jpg';
import CommitImgMobileRetina from '../../assets/images/commit-img-tablet@2x.jpg';
import './commit.scss';

export const Commit = () => {
  return (
    <section className='commit'>
      <div className='container'>
        <div className='commit__inner'>
          <picture>
            <source
              media='(max-width: 580px)'
              srcSet={(CommitImgMobile, CommitImgMobileRetina)}
            />
            <source
              media='(max-width: 780px)'
              srcSet={(CommitImgTablet, CommitImgTabletRetina)}
            />
            <img
              className='commit-img'
              src={CommitImg}
              srcSet={(CommitImg, CommitImgRetina)}
              width='445'
              height='520'
              alt='Our commitment'
            />
          </picture>
          <div className='commit__content'>
            <h2 className='commit__title'>Our commitment</h2>
            <p className='commit__text'>
              We're built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world's best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
