import { BadRequestException, Body, Injectable } from "@nestjs/common";
import { Op } from "sequelize";
import { ExpenseEntity } from "../../core/modules/database/models/entities/expense.entity";
import { InvoiceEntity } from "../../core/modules/database/models/entities/invoice.entity";
import * as fs from "fs";

@Injectable()
export class ExpenseService {
  constructor() {
  }

  async getTodayExpense(user) {
    const date: any = await new Date;
    const startDate: any = new Date(`${date.getFullYear()}-${+date.getMonth() + 1}-${date.getDate() - 1} 23:59:00`);
    const endDate: any = new Date(`${date.getFullYear()}-${+date.getMonth() + 1}-${+date.getDate()} 12:00:00`);
    const expenses = await ExpenseEntity.findAll({
      where: {
        userId: user.id,
        date: { [Op.between]: [startDate, endDate] }
      },
      include: [InvoiceEntity]
    });
    return expenses;
  }

  async getThisMonthExpense(user) {
    const date = await new Date;
    const startedDate: any = await new Date(`${date.getFullYear()}-${+date.getMonth() + 1}-${"01"} 12:00:00`);
    const endDate: any = await new Date(`${date.getFullYear()}-${+date.getMonth() + 2}-${"01"}`);
    const expense = await ExpenseEntity.findAll({
      where: {
        userId: user.id,
        date: { [Op.between]: [startedDate, endDate] }
      },
      include: [InvoiceEntity]
    });
    return expense;
  }

  async getAllExpense(user) {
    return ExpenseEntity.findAll({
      where: { userId: user.id }, include: [InvoiceEntity]
    });
  }

  async createExpense(body, user) {
    const newExpense = await ExpenseEntity.create({
      title: body.expense.title,
      price: body.expense.price,
      content: body.expense.content,
      date: body.expense.date,
      userId: user.id
    });

    if (body.invoice) {
      return InvoiceEntity.create({ expenseId: newExpense.id });
    }

    return true;
  }

  async updateInvoice(expenseId, user) {
    let invoice = await InvoiceEntity.findOne({ where: { expenseId: expenseId } });
    if (!invoice) {
      invoice = await InvoiceEntity.create({ expenseId: expenseId });
    }
    return invoice.id;
  }

  async updateExpense(expense) {
    return ExpenseEntity.update(expense, { where: { id: expense.id } });
  }

  async delete(id) {
    const expense = await ExpenseEntity.findOne({ where: { id: id }, include: [InvoiceEntity] });
    if (expense.invoice) {
      const path = "./uploads/invoices/" + expense.invoice.id + ".pdf";
      await fs.unlink(path, () => {
        return true;
      });
    }
    await ExpenseEntity.destroy({ where: { id: id } });
    return true;
  }

  async getGraphicData(user, year) {
    const startedDate: any = new Date("01-01-" + year);
    const endDate: any = new Date("01-01-" + (+year + 1).toString());
    const expense = await ExpenseEntity.findAll({
      where: {
        userId: user.id,
        date: { [Op.between]: [startedDate, endDate] }
      },
      include: [InvoiceEntity]
    });
    return expense;
  }
}
