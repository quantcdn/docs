import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: "Create your first project",
    imageUrl: 'img/folder-plus.svg',
    description: (
      <>
        Use the dashboard to manage projects, domains, proxies, redirects, and much more.
      </>
    ),
  },
  {
    title: "CMS integrations",
    imageUrl: 'img/droplet.svg',
    description: (
      <>
        Lower the barrier to the static web. Install one of our CMS integrations for immediate Quant integration.
      </>
    ),
  },
  {
    title: "For Developers",
    imageUrl: 'img/code.svg',
    description: (
      <>
        Dig into our APIs to build your perfect static web application.
      </>

    ),
  },
  
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="QuantCDN: the Static Web CDN">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className={styles.featureImage} src='/img/quant-logo-white.svg' alt="quantcdn.io" />
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/welcome')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
