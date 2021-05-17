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
import { AuthenticatedUser } from "../authentication/decorators/authenticated-user.decorator";
import { AuthGuard } from "@nestjs/passport";
import { IncomeService } from './income.service';

@UseGuards(AuthGuard("jwt"))
@Controller("income")
export class IncomeController {
  constructor(private incomeService: IncomeService) {
  }

  @Get("today")
  async getTodayExpense(@AuthenticatedUser() user) {
    return this.incomeService.getTodayIncome(user);
  }

  @Get("month")
  async getThisMonthExpense(@AuthenticatedUser() user) {
    return this.incomeService.getThisMonthIncome(user);
  }

  @Get("all")
  async getAllExpense(@AuthenticatedUser() user) {
    return this.incomeService.getAllIncome(user);
  }

  @Get("graphic/:year")
  async getGraphicData(@AuthenticatedUser() user, @Param("year") year) {
    return this.incomeService.getGraphicData(user, year);
  }

  @Post()
  async createExpense(@AuthenticatedUser() user, @Body() body) {
    return this.incomeService.createIncome(body, user);
  }

  @Delete(":id")
  async delete(@Param("id") id) {
    return this.incomeService.delete(id);
  }

  @Patch()
  async updateIncome(@Body() body) {
    return this.incomeService.updateIncome(body);
  }
}
