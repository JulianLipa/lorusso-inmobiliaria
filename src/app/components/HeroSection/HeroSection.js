import React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";
import "@/app/globals.css";

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_section_div}>
        <div className={styles.main_hero}>
          <div className={styles.main_title}>
            <h2 className="title">
              Te ayudamos a encontrar tu <b>nuevo hogar</b>
            </h2>
            <p className="subtitle">
              Somos una inmobiliaria familiar ubicada en el pintoresco barrio de
              Catalinas Sur.
            </p>
          </div>
        </div>
        <div className={styles.data_section}>
          <div>
            <h2 className="title">
              <b>20 años</b>
            </h2>
            <p className="subtitle">en el mercado</p>
          </div>

          <div>
            <h2 className="title">
              <b>+700</b>
            </h2>
            <p className="subtitle">alquileres administrados</p>
          </div>

          <div>
            <h2 className="title">
              <b>100%</b>
            </h2>
            <p className="subtitle">de confianza y transparencia</p>
          </div>
        </div>
        <div className={styles.buttons_div}>
          <Link className="subtitle main_button button" href="">Ver Propiedades</Link>
          <Link className="subtitle secondary_button button" href="">Conocenos</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;