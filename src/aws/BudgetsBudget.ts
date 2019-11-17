import {Resource} from '../Resource'

export interface BudgetsBudgetArguments {
  account_id?: string
  budget_type: string
  cost_filters?: {[key: string]: string}
  id?: string
  limit_amount: string
  limit_unit: string
  name?: string
  name_prefix?: string
  time_period_end?: string
  time_period_start: string
  time_unit: string
}

export interface BudgetsBudgetAttributes {
  account_id: string
  budget_type: string
  cost_filters: {[key: string]: string}
  id: string
  limit_amount: string
  limit_unit: string
  name: string
  name_prefix: string
  time_period_end?: string
  time_period_start: string
  time_unit: string
}

export class BudgetsBudget extends Resource<BudgetsBudgetArguments, BudgetsBudgetAttributes> {
  kind = 'aws_budgets_budget'
  _outputAttrNames = [
    'account_id',
    'budget_type',
    'cost_filters',
    'id',
    'limit_amount',
    'limit_unit',
    'name',
    'name_prefix',
    'time_period_end',
    'time_period_start',
    'time_unit',
  ] as const
}
