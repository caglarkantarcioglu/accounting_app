import { diskStorage } from "multer";
import express from "express";

export const UserImageStorage = diskStorage({
  destination: "./uploads/user",

  filename(req: any, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {

    callback(null, req.user.id + ".jpg");
  }
});
