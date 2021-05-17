import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { InvoiceService } from "./invoice.service";
import * as fs from "fs";
import { FileInterceptor } from "@nestjs/platform-express";
import { InvoiceStorage } from "../../shared/multer/invoice.storage";
import { AuthenticatedUser } from "../authentication/decorators/authenticated-user.decorator";
import { AuthGuard } from "@nestjs/passport";

@UseGuards(AuthGuard("jwt"))
@Controller("invoice")
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {
  }

  @Get()
  async getInvoices(@AuthenticatedUser() user) {
    return this.invoiceService.getInvoices(user);
  }

  @Delete(":id")
  async deleteInvoice(@Param("id") id) {
    return this.invoiceService.deleteInvoice(id);
  }

  @Get(":id")
  async get(@Param("id") id) {
    try {
      const file = await fs.readFileSync("./uploads/invoices/" + id + ".pdf");
      return file;
    } catch (e) {
      throw new BadRequestException(e);
    }

  }

  @Post(":id")
  @UseInterceptors(
    FileInterceptor("document", {
        storage: InvoiceStorage
      }
    )
  )
  async uploadedFile(@Param("id") id, @UploadedFile() file) {
  }
}
