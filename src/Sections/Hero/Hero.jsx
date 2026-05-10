import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Navigation from "../../Components/Navigation/Navigation";
import Button from "../../Components/Buttons/Buttons";

const heroImage = {
  blurHeroImage: "../src/assets/ontheroof-blur.jpg",
  mainImage: "../src/assets/ontheroof.jpg",
  alt: "Solar Panel Arranged On the roof",
};

function Hero() {
  return <HeroSection />;
}

function HeroSection() {
  return (
    <>
      <div className={styles.hero}>
        <LazyImage />
      </div>
    </>
  );
}

function LazyImage() {
  const [src, setSrc] = useState(heroImage.blurHeroImage);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage.mainImage;
    img.onload = () => setSrc(heroImage.mainImage);
  }, []);

  return (
    <div
      className={styles.heroSection}
      style={{ backgroundImage: `url(${src})` }}
    >
      <Navigation />
      <HeroItems />
    </div>
  );
}

function HeroItems() {
  return (
    <div className={styles.heroItems}>
      <h1 className={styles.heroTitle}>
        Stay Powered. Stay Secured.{" "}
        <span className={styles.highlight}>Stay Smart.</span>
      </h1>
      <p className={styles.heroDescription}>
        Your trusted expert in Solar inverter setup, surveillance, Electrical &
        smart wiring.
      </p>
      <div className={styles.buttons}>
        <Button href="#contact" variant="primary">
          Get a Free Quote
        </Button>
        <Button href="#services" variant="secondary">
          Our Services
        </Button>
      </div>
      <p className={styles.motto}>Let's Lighten up your World 💡</p>
    </div>
  );
}

export default Hero;
