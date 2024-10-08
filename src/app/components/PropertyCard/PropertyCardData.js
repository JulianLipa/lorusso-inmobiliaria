import React from "react";
import { getOneProductDB, getAllProductsDB } from "@/app/actions";
import PropertyCard from "./PropertyCard";
import { useAppContext } from "@/app/contexts/AppContexts";

const PropertyCardData = async ({ dataId }) => {
  const response = await getAllProductsDB();

  if (!response) {
    return <PropertyCard data={response.products[dataId]} loading={true}/>;
  } else {
    return <PropertyCard data={response.products[dataId]} loading={false} />;
  }
};

export default PropertyCardData;
