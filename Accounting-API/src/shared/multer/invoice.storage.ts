import { diskStorage } from "multer";
import express from "express";

export const InvoiceStorage = diskStorage({
  destination: "./uploads/invoices",

  filename(req: express.Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {

    callback(null, req.params.id + ".pdf");
  }
});
