import { BadRequestException, Get, Injectable, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { UserEntity } from "../../core/modules/database/models/entities/user.entity";
import { IncomeEntity } from "../../core/modules/database/models/entities/income.entity";
import { ExpenseEntity } from "../../core/modules/database/models/entities/expense.entity";

@Injectable()
export class UserService {

  async changePassword(user, passwords) {
    if (user.password !== passwords.oldPassword) {
      throw new BadRequestException("Invalid Password");
    }
    await UserEntity.update({ password: passwords.newPassword }, { where: { id: user.id } });
    return true;
  }

  async updateUser(user, body) {
    await UserEntity.update(body, { where: { id: user.id } });
  }

  async getUserMoney(user) {
    const totalIncome = await IncomeEntity.sum("price", { where: { userId: user.id } });
    const totalExpense = await ExpenseEntity.sum("price", { where: { userId: user.id } });
    if (!totalExpense && !totalIncome) {
      return 0;
    }
    if (!totalExpense) {
      return totalIncome;
    }
    if (!totalIncome) {
      return totalExpense * -1;
    }
    return totalIncome - totalExpense;
  }

}
