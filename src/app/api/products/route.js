import { NextResponse } from "next/server";
import { getAllProductsDB } from "@/app/actions";

export async function GET() {
  const products = await getAllProductsDB();
  try {
    return NextResponse.json({ message: "Ok", products });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  }
}

export async function POST() {
  try {
    return NextResponse.json({ message: "Ok", products });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  }
}
