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
  _kind = 'aws_budgets_budget'

  get account_id() {
    return this._attr('account_id')
  }

  get budget_type() {
    return this._attr('budget_type')
  }

  get cost_filters() {
    return this._attr('cost_filters')
  }

  get id() {
    return this._attr('id')
  }

  get limit_amount() {
    return this._attr('limit_amount')
  }

  get limit_unit() {
    return this._attr('limit_unit')
  }

  get name() {
    return this._attr('name')
  }

  get name_prefix() {
    return this._attr('name_prefix')
  }

  get time_period_end() {
    return this._attr('time_period_end')
  }

  get time_period_start() {
    return this._attr('time_period_start')
  }

  get time_unit() {
    return this._attr('time_unit')
  }
}
