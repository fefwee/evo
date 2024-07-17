export interface TodoInterface {
  title: string | null
};

export interface TodoStateModel {
  todos: TodoInterface[]
};

export class GetTodo {
  static readonly type = '[Todo]: Get Todo '
};

export class AddTodo {
  static readonly type = '[Todo]: Add Todo Item';

  constructor(public payload: TodoInterface) {
  }

};
