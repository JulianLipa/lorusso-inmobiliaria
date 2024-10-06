"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/app/components/PropertyCard/PropertyCard.module.css";
import PropertyBar from "../PropertyBar/PropertyBar";
import "@/app/globals.css";
import axios from "axios";
import { useAppContext } from "@/app/contexts/AppContexts";
import Link from "next/link";
import GetFolderFiles from "./GetFolderFiles"
import GalleryView from "../GalleryView/GalleryView";

const PropertyCard = ({ data, loading }) => {
  const { deptos, deptosLength, setDeptos } = useAppContext();

  const cartAdd = (e) => {
    e.preventDefault();

    const existingItem = deptos.find((depto) => depto.title === data.title);

    if (existingItem) {
      const updatedDeptos = deptos.map((depto) =>
        depto.title === data.title
          ? { ...depto, quantity: depto.quantity + 1 }
          : { ...depto }
      );
      setDeptos(updatedDeptos);
    } else {
      setDeptos([...deptos, { title: data.title, quantity: 1, data }]);
    }
  };

  return (
    <div className={`${styles.property_card}`}>
      <div className={styles.property_buttons}>
        <Link
          className={`title main_button button ${styles.buttonEye}`}
          href={{
            pathname: `/deptos/${data.id}`,
            query: { data: JSON.stringify(data) },
          }}
        >
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 0.967743C4.66392 0.967743 1.58981 6.67695 1.0443 7.80713C1.01515 7.86725 1 7.9332 1 8.00002C1 8.06684 1.01515 8.13278 1.0443 8.1929C1.5888 9.32309 4.66291 15.0323 11 15.0323C17.3371 15.0323 20.4102 9.32309 20.9557 8.1929C20.9849 8.13278 21 8.06684 21 8.00002C21 7.9332 20.9849 7.86725 20.9557 7.80713C20.4112 6.67695 17.3371 0.967743 11 0.967743Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${styles.pathEye}`}
            />
            <path
              d="M11.0002 11.0139C12.6647 11.0139 14.014 9.66453 14.014 8.00004C14.014 6.33555 12.6647 4.98621 11.0002 4.98621C9.33567 4.98621 7.98633 6.33555 7.98633 8.00004C7.98633 9.66453 9.33567 11.0139 11.0002 11.0139Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${styles.pathEye}`}
            />
          </svg>
          Ver más
        </Link>
        <Link
          className={`title main_button button ${styles.buttonProperty}`}
          href="#"
          onClick={cartAdd}
        >
          <svg
            width="29"
            height="27"
            viewBox="0 0 29 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.375 21.0577C25.375 21.4889 25.6634 21.8552 26.0265 22.0878C26.7424 22.5464 27.1875 23.3127 27.1875 24.3C27.1875 25.74 25.9187 27 24.4688 27C23.0187 27 21.75 25.74 21.75 24.3V22.6C21.75 22.0477 21.3023 21.6 20.75 21.6H8.15625C9.60625 21.6 10.875 22.86 10.875 24.3C10.875 25.74 9.60625 27 8.15625 27C6.70625 27 5.4375 25.74 5.4375 24.3V21.8375C5.4375 21.6814 5.47408 21.5273 5.54432 21.3878L7.62627 17.2526C7.7343 17.0381 7.76148 16.7918 7.70283 16.5588L4.17778 2.55588C4.06591 2.11149 3.6663 1.8 3.20804 1.8H0.9C0.402944 1.8 0 1.39706 0 0.9C0 0.402944 0.402943 0 0.899999 0H4.64522C5.1094 0 5.51255 0.319408 5.61871 0.771275L6.52504 4.62873C6.6312 5.08059 7.03435 5.4 7.49853 5.4H27.8435C28.4532 5.4 28.921 5.94103 28.833 6.54441L27.3124 16.9644C27.2407 17.4557 26.8193 17.82 26.3228 17.82H10.0107C9.6495 17.82 9.31692 18.0168 9.14301 18.3334C8.78064 18.9932 9.25801 19.8 10.0107 19.8H24.375C24.9273 19.8 25.375 20.2477 25.375 20.8V21.0577ZM18.5 8C18.5 7.44772 18.0523 7 17.5 7C16.9477 7 16.5 7.44772 16.5 8V10.5H14C13.4477 10.5 13 10.9477 13 11.5C13 12.0523 13.4477 12.5 14 12.5H16.5V15C16.5 15.5523 16.9477 16 17.5 16C18.0523 16 18.5 15.5523 18.5 15V12.5H21C21.5523 12.5 22 12.0523 22 11.5C22 10.9477 21.5523 10.5 21 10.5H18.5V8Z"
              fill="white"
            />
          </svg>
          Agregar
        </Link>
      </div>
      <div className={styles.gallery_div}>
        <GalleryView folderName={data.folderName}/>
      </div>
      {!loading && <h2 className="title">{data.title}</h2>}
      {loading && <h2 className="title"></h2>}
      <PropertyBar data={data} loadingState={loading} />
      {!loading && <h2 className={styles.price}>u$d {data.price}</h2>}
    </div>
  );
};

export default PropertyCard;