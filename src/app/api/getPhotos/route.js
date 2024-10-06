import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(req) {
  try {
    const folderPath = path.join(process.cwd(), "public/images/deptos");
    const files = fs.readdirSync(folderPath);

    const subFiles = {};

    files.forEach((file) => {
      if (file !== ".DS_Store") {
        const subFolderPath = path.join(folderPath, file);
        if (fs.statSync(subFolderPath).isDirectory()) {
          subFiles[file] = fs.readdirSync(subFolderPath);
        } else {
          subFiles[file] = [];
        }
      }
    });

    return NextResponse.json({
      success: true,
      files: subFiles,
      fileCount: files.length,
    });
  } catch (error) {
    console.error("Error reading folder:", error.message);
    
    return NextResponse.json(
      {
        success: false,
        message: "Error reading folder.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
