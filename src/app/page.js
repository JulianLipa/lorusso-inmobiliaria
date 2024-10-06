import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import HeroSection from "@/app/components/HeroSection/HeroSection";
import AboutSection from "@/app/components/AboutSection/AboutSection";
import PropertyCardData from "@/app/components/PropertyCard/PropertyCardData";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <section className={styles.home_section}>
        <AboutSection />
        <section className={styles.property_section}>
          <h2 className="title section-title">Propiedades destacadas</h2>
          <PropertyCardData dataId={1} loading={false} />
          <PropertyCardData dataId={2} loading={false} />
          <PropertyCardData dataId={3} loading={false} />
        </section>
      </section>
    </main>
  );
}
