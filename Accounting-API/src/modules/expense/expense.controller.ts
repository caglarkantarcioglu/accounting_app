import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from "@nestjs/common";
import { ExpenseService } from "./expense.service";
import { AuthenticatedUser } from "../authentication/decorators/authenticated-user.decorator";
import { AuthGuard } from "@nestjs/passport";

@UseGuards(AuthGuard("jwt"))
@Controller("expense")
export class ExpenseController {
  constructor(private expenseService: ExpenseService) {
  }

  @Get("today")
  async getTodayExpense(@AuthenticatedUser() user) {
    return this.expenseService.getTodayExpense(user);
  }

  @Get("month")
  async getThisMonthExpense(@AuthenticatedUser() user) {
    return this.expenseService.getThisMonthExpense(user);
  }

  @Get("all")
  async getAllExpense(@AuthenticatedUser() user) {
    return this.expenseService.getAllExpense(user);
  }

  @Get("graphic/:year")
  async getGraphicData(@AuthenticatedUser() user, @Param("year") year) {
    return this.expenseService.getGraphicData(user, year);
  }

  @Patch("invoice")
  async updateInvoice(@Body() body, @AuthenticatedUser() user) {
    return this.expenseService.updateInvoice(body.id, user);
  }

  @Post()
  async createExpense(@AuthenticatedUser() user, @Body() body) {
    return this.expenseService.createExpense(body, user);
  }

  @Patch()
  async updateExpense(@Body() body) {
    return this.expenseService.updateExpense(body);
  }

  @Delete(":id")
  async delete(@Param("id") id) {
    return this.expenseService.delete(id);
  }
}
