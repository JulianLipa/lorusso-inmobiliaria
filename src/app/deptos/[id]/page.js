"use client"
import React, { useEffect, useState } from "react";
import "@/app/globals.css";
import styles from "@/app/deptos/[id]/page.module.css";
import Link from "next/link";
import GalleryView from "@/app/components/GalleryView/GalleryView";
import PropertyBar from "@/app/components/PropertyBar/PropertyBar";

const Page = ({ searchParams }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if(searchParams.data){
      setData(JSON.parse(searchParams.data));
      try {
        const parsedData = JSON.parse(searchParams.data);
        setData(parsedData);
      }catch (error){
      console.error("Error parsing data:", error);
    }
  }
}, [searchParams]);

  return (
      <main className={styles.main_deptos}>
        <div className={styles.deptos_header}>
          <Link className={`title main_button ${styles.button_deptos}`} href="/">&lt; Volver</Link>
          <Link className={`title main_button ${styles.button_deptos}`} href="/">Inicio</Link>
          <Link className={`title main_button ${styles.button_deptos}`} href="#">Propiedades</Link>
          {data.amb === "1" && (<Link className={`title main_button ${styles.button_deptos}`} href="#">{data.amb} Ambiente</Link>)}
          {data.amb !== "1" && (<Link className={`title main_button ${styles.button_deptos}`} href="#">{data.amb} Ambientes</Link>)}
          <Link className={`title main_button ${styles.button_deptos}`} href="#">{data.title}</Link>
        </div>

        <section className={styles.section_property}>
          <div className={styles.div_images}><GalleryView className={styles.div_images_gallery} folderName={data.folderName}/></div>
          <div className={styles.div_text}>
            <h2 className="title">{data.title}</h2>
            <PropertyBar data={data} loadingState={false}/>
            <p className={`subtitle ${styles.subtitle_p}`}>{data.p}</p>
            <h2 className={`title ${styles.price}`}>u$d {data.price}</h2>
            <Link className="title main_button button" href="#">Programar visita</Link>
          </div>
        </section>

      </main>
  );
};

export default Page;
