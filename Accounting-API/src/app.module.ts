import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoreModule } from "./core/core.module";
import { ExpenseModule } from "./modules/expense/expense.module";
import { IncomeModule } from "./modules/income/income.module";
import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { UserModule } from "./modules/user/user.module";
import { InvoiceModule } from "./modules/invoice/invoice.module";

@Module({
  imports: [CoreModule, ExpenseModule, IncomeModule, AuthenticationModule, UserModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
