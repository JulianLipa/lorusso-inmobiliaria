"use client"

import React, { useEffect, useState } from "react";
import styles from "@/app/components/PropertyBar/PropertyBar.module.css";
import "@/app/globals.css";
import Image from "next/image";

const PropertyBar = ({ data, loadingState }) => {

  return (
    <div className={styles.property_bar}>
      <div>
        <div className={styles.property_detail}>
          {!loadingState && <p className="subtitle">{data.amb} Amb</p>}
          {loadingState && <p className="subtitle">Amb</p>}
        </div>

        <div className={styles.property_detail}>
          <Image
            src={"/images/icons/size.svg"}
            width={5}
            height={5}
            alt={"icon"}
          />
          {!loadingState && <p className="subtitle">{data.size}m2</p>}
          {loadingState && <p className="subtitle">m2</p>}
        </div>

        <div className={styles.property_detail}>
          <Image
            src={"/images/icons/bath.svg"}
            width={5}
            height={5}
            alt={"icon"}
          />
          {!loadingState && <p className="subtitle">{data.bath} baño</p>}
          {loadingState && <p className="subtitle">baño</p>}
        </div>

        <div className={styles.property_detail}>
          <Image
            src={"/images/icons/floor.svg"}
            width={5}
            height={5}
            alt={"icon"}
          />
          {!loadingState && `${data.floor}` != "PB" && <p className="subtitle">{data.floor}° piso</p>}
          {!loadingState && `${data.floor}` === "PB" && <p className="subtitle">{data.floor}</p>}
          {loadingState && <p className="subtitle">° piso</p>}
        </div>

        <div className={styles.property_detail}>
          <Image
            src={"/images/icons/sun.svg"}
            className={styles.icon_sun}
            width={5}
            height={5}
            alt={"icon"}
          />
          {!loadingState && <p className="subtitle">{data.detail}</p>}
          {loadingState && <p className="subtitle">detail</p>}
        </div>
      </div>
    </div>
  );
};

export default PropertyBar;
