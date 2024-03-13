import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './buget-planner/login/login.component'; // Corrected import path
import { DashboardComponent } from './buget-planner/dashboard/dashboard.component';
import { ExpenseComponent } from './buget-planner/expense/expense.component';
import { HistoryComponent } from './buget-planner/history/history.component';
import { IncomeComponent } from './buget-planner/income/income.component';
import { ProfileComponent } from './buget-planner/profile/profile.component';
import { SideNavComponent } from './buget-planner/side-nav/side-nav.component';
import { TodoComponent } from './buget-planner/todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page
 
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'budget-planner/dashboard',
    component: DashboardComponent // Assuming you have a component named DashboardComponent for the dashboard
  },
  
  {
    path: 'budget-planner/income',
    component: IncomeComponent,
    data: { title: 'Expense' }
  },
  
    
      {
        path: 'budget-planner/expense',
        component: ExpenseComponent,
        data: { title: 'Expense' }
      },
      {
        path: 'budget-planner/history',
        component: HistoryComponent,
        data: { title: 'History' }
      },
      
      {
        path: 'budget-planner/profile',
        component: ProfileComponent,
        data: { title: 'Profile' }
      },
      {
        path: 'budget-planner/side-nav',
        component: SideNavComponent,
        data: { title: 'Side Nav' }
      },
      {
        path: 'budget-planner/todo',
        component: TodoComponent,
        data: { title: 'Todo' }
      }
    ]


  // Other routes...


export { routes };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
