import { BadRequestException, Injectable } from "@nestjs/common";
import { InvoiceEntity } from "../../core/modules/database/models/entities/invoice.entity";
import { ExpenseEntity } from "../../core/modules/database/models/entities/expense.entity";
import { IncomeEntity } from "../../core/modules/database/models/entities/income.entity";
import * as fs from "fs";

@Injectable()
export class InvoiceService {

  constructor() {
  }

  async getInvoices(user) {
    const expenseInvoice = await InvoiceEntity.findAll({
      include: [
        { model: ExpenseEntity, where: { userId: user.id } }
      ]
    });
    const incomeInvoice = await InvoiceEntity.findAll({
      include: [
        { model: IncomeEntity, where: { userId: user.id } }
      ]
    });
    return [...expenseInvoice, ...incomeInvoice];

  }

  async deleteInvoice(id) {
    await InvoiceEntity.destroy({ where: { id: id } });
    const path = "./uploads/invoices/" + id + ".pdf";
    await fs.unlink(path, () => {
      return true;
    });
    return true;
  }
}
