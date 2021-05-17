import { BadRequestException, Body, Injectable } from "@nestjs/common";
import { Op } from "sequelize";
import { InvoiceEntity } from "../../core/modules/database/models/entities/invoice.entity";
import * as fs from "fs";
import { IncomeEntity } from '../../core/modules/database/models/entities/income.entity';
import { ExpenseEntity } from '../../core/modules/database/models/entities/expense.entity';

@Injectable()
export class IncomeService {
  constructor() {
  }

  async getTodayIncome(user) {
    const date: any = await new Date;
    const startDate: any = new Date(`${date.getFullYear()}-${+date.getMonth() + 1}-${date.getDate() - 1} 23:59:00`);
    const endDate: any = new Date(`${date.getFullYear()}-${+date.getMonth() + 1}-${+date.getDate()} 12:00:00`);
    const incomes = await IncomeEntity.findAll({
      where: {
        userId: user.id,
        date: { [Op.between]: [startDate, endDate] }
      },
      include: [InvoiceEntity]
    });
    return incomes;
  }

  async getThisMonthIncome(user) {
    const date = await new Date;
    const startedDate: any = await new Date(`${date.getFullYear()}-${+date.getMonth() + 1}-${"01"} 12:00:00`);
    const endDate: any = await new Date(`${date.getFullYear()}-${+date.getMonth() + 2}-${"01"}`);
    const income = await IncomeEntity.findAll({
      where: {
        userId: user.id,
        date: { [Op.between]: [startedDate, endDate] }
      },
      include: [InvoiceEntity]
    });
    return income;
  }

  async getAllIncome(user) {
    return IncomeEntity.findAll({
      where: { userId: user.id }, include: [InvoiceEntity]
    });
  }

  async createIncome(body, user) {
    const newIncome = await IncomeEntity.create({
      title: body.income.title,
      content: body.income.content,
      date: body.income.date,
      price: body.income.price,
      userId: user.id
    });

    if (body.invoice) {
      return InvoiceEntity.create({ incomeId: newIncome.id });
    }

    return true;
  }

  async delete(id) {
    const income = await IncomeEntity.findOne({ where: { id: id }, include: [InvoiceEntity] });
     if (income.invoice) {
      await InvoiceEntity.destroy({where: { id : income.invoice.id }})
      const path = "./uploads/invoices/" + income.invoice.id + ".pdf";
      await fs.unlink(path, () => {
        return true;
      });
    }
    console.log(income)
    await IncomeEntity.destroy({ where: { id: id } });
    return true;
  }

  async getGraphicData(user, year) {
    const startedDate: any = new Date("01-01-" + year);
    const endDate: any = new Date("01-01-" + (+year + 1).toString());
    const income = await IncomeEntity.findAll({
      where: {
        userId: user.id,
        date: { [Op.between]: [startedDate, endDate] }
      },
      include: [InvoiceEntity]
    });
    return income;
  }

  async updateIncome(income) {
    return IncomeEntity.update(income, { where: { id: income.id } });
  }
}
