import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[SHOPPING] LoadnShopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] LoadnShopping Success',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] LoadnShopping Failure',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  DELETE_ITEM = '[SHOPPING] delete Item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] delete Item Success',
  DELETE_ITEM_FAILURE = '[SHOPPING] delete Item Failure',
}

export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}

export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;

  constructor(public payload: ShoppingItem[]) {}
}

export class LoadShoppingFailureAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;

  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}
}

export class AddItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: ShoppingItem) {}
}

export class AddItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;

  constructor(public payload: Error) {}
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;

  constructor(public payload: string) {}
}

export class DeleteItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;

  constructor(public payload: string) {}
}

export class DeleteItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE;

  constructor(public payload: Error) {}
}

export type ShoppingAction =
  | LoadShoppingAction
  | LoadShoppingSuccessAction
  | LoadShoppingFailureAction
  | AddItemAction
  | AddItemSuccessAction
  | AddItemFailureAction
  | DeleteItemAction
  | DeleteItemSuccessAction
  | DeleteItemFailureAction;
