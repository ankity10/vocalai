import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Always Available',
    Svg: require('@site/static/img/24-hours-support.svg').default,
    description: (
      <>
          AI voice bots provide continuous, 24/7 support, ensuring instant responses to customer inquiries.
      </>
    ),
  },
  {
    title: 'Highly Scalable',
    Svg: require('@site/static/img/scale.svg').default,
    description: (
      <>
          Capable of handling multiple interactions at once, AI voice agents easily scale without the need for extra human resources.
      </>
    ),
  },
  {
    title: 'Cost Effective',
    Svg: require('@site/static/img/saving.svg').default,
    description: (
      <>
          By automating routine tasks, AI voice agents reduce operational costs and improve overall efficiency.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.h3}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
      <div className={styles.sec2}>
          <h2 className={styles.heading}><span
              style={{
                  color: 'transparent',
                  backgroundImage: 'linear-gradient(90deg, rgba(28,81,188,1) 0%, rgba(34,106,199,1) 7%, rgba(39,127,208,1) 14%, rgba(45,153,219,1) 20%, rgba(52,185,233,1) 28%, rgba(61,223,249,1) 36%, rgba(64,236,255,1) 42%, rgba(72,216,249,1) 48%, rgba(89,173,235,1) 57%, rgba(105,134,223,1) 65%, rgba(117,102,213,1) 75%, rgba(128,76,204,1) 88%, rgba(136,55,198,1) 100%)',
                  backgroundClip: 'text'
              }}>AI Voice Agents </span> Efficiency Redefined</h2>
          <section className={styles.features}>
              <div className="container">
                  <div className="row">
                      {FeatureList.map((props, idx) => (
                          <Feature key={idx} {...props} />
                      ))}
                  </div>
              </div>
          </section>

      </div>

  );
}
