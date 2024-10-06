import React from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";

const AboutSection = () => {
  return (
    <section className={styles.home_about}>
      <Image
        src={"/images/historia-image.png"}
        alt={"historia-lorusso-servicios-inmobiliarios"}
        width={450}
        height={350}
      />
      <div>
        <h2 className="title">Nuestra Historia</h2>
        <p className="subtitle">
          Somos una <b>inmobiliaria familiar</b> ubicada en Catalinas Sur (La
          Boca) con amplia trayectoria y reconocimiento en
          <b>operaciones inmobiliarias</b>.
        </p>
        <p className="subtitle">
          Nos enorgullece ser parte de la <b>comunidad de La Boca</b>, donde
          hemos establecido relaciones duraderas basadas en la confianza y el
          compromiso.
        </p>
        <p className="subtitle">
          Nuestra experiencia de décadas en el <b>sector inmobiliario</b> nos ha
          permitido no solo conocer a fondo las necesidades de nuestros
          clientes, sino también adaptarnos a los <b>cambios del mercado</b> con
          agilidad y eficacia.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
