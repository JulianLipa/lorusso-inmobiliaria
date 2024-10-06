"use client";

import styles from "@/app/components/HeaderSection/HeaderSection.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppContext } from "@/app/contexts/AppContexts";
import "@/app/globals.css";

const HeaderSection = () => {
  const [offset, setOffset] = useState();
  const { deptos, isDeptosPage } = useAppContext();

  /*useEffect(() => {
    if (isDeptosPage) {
      document.documentElement.style.setProperty("--after-opacity", 1);
    } else {
      const maxScrollTop =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scollLevelTrigger = 300;

      const mapRange = (value, inMin, inMax, outMin, outMax) => {
        return ((value - inMin) * (outMax - outMin)) / (inMax - inMin + outMin);
      };

      const handleScroll = () => {
        setOffset(window.scrollY);
        const opacityRange = mapRange(
          window.scrollY,
          0,
          scollLevelTrigger,
          0,
          1
        );
        document.documentElement.style.setProperty(
          "--after-opacity",
          opacityRange
        );
      };

      window.addEventListener("scroll", handleScroll);
    }
  }, [offset, isDeptosPage]);*/

  const handleRemoveProduct = (depto, index) =>{
    console.log(depto + index)
  }

  return (
    <div className={styles.header}>
      <Link className={`title ${styles.menu}`} href="/">
        <svg
          width="22"
          height="15"
          viewBox="0 0 22 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5H21M1 7.5H21M1 13.5H21"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </Link>

      <Link href="/" className={styles.header_button}>
        <Image
          src={"/images/logo/greyscale/logo.svg"}
          alt={"Lorusso-logotype-greyscale"}
          height={250}
          width={250}
          className={styles.header_logo}
        />
      </Link>

      <Link className={`title ${styles.cart}`} href="/checkout">
      <div>
      {deptos.length > 0 && <div className={styles.cartDot}></div>}
        <svg
          width="29"
          height="27"
          viewBox="0 0 29 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.0265 22.0878C25.6634 21.8552 25.375 21.4889 25.375 21.0577V20.8C25.375 20.2477 24.9273 19.8 24.375 19.8H10.0107C9.25801 19.8 8.78064 18.9932 9.14302 18.3334V18.3334C9.31692 18.0168 9.6495 17.82 10.0107 17.82H26.3228C26.8193 17.82 27.2407 17.4557 27.3124 16.9644L28.833 6.54441C28.921 5.94103 28.4532 5.4 27.8435 5.4H7.49853C7.03435 5.4 6.6312 5.08059 6.52504 4.62873L5.61871 0.771275C5.51255 0.319408 5.10939 0 4.64522 0H0.899999C0.402943 0 0 0.402944 0 0.9V0.9C0 1.39706 0.402944 1.8 0.9 1.8H3.20804C3.6663 1.8 4.06591 2.11149 4.17778 2.55588L7.70283 16.5588C7.76148 16.7918 7.7343 17.0381 7.62627 17.2526L5.54432 21.3878C5.47408 21.5273 5.4375 21.6813 5.4375 21.8375V24.3C5.4375 25.74 6.70625 27 8.15625 27C9.60625 27 10.875 25.74 10.875 24.3C10.875 22.86 9.60625 21.6 8.15625 21.6H20.75C21.3023 21.6 21.75 22.0477 21.75 22.6V24.3C21.75 25.74 23.0187 27 24.4687 27C25.9187 27 27.1875 25.74 27.1875 24.3C27.1875 23.3127 26.7424 22.5464 26.0265 22.0878Z"
            fill="white"
          />
        </svg>
        <div className={styles.headerHover}>
          {deptos.length > 0 &&
            deptos.map((depto, index) => (
              <div key={index}>
                <p className={`subtitle ${styles.textHeaderHover}`}>
                  {depto.quantity} x{" "}
                </p>
                <p className={`subtitle ${styles.textHeaderHover && styles.title}`}>
                  {depto.title}
                </p>
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleRemoveProduct(depto, index)}
                >
                  <path
                    d="M0.75 5.25H23.25M12 10V22M8 10V22M16 10L16 22M5 5C5.16667 3.66667 6.8 1 12 1C17.2 1 18.8333 3.66667 19 5M2 5H22V22C22 24.7614 19.7614 27 17 27H7C4.23858 27 2 24.7614 2 22V5Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))}
          {deptos.length === 0 && (
            <p className={`subtitle ${styles.textHeaderHover}`}>
              No tiene propiedades agregadas al carrito
            </p>
          )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HeaderSection;
