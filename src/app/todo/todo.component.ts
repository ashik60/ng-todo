import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  list: Todo[] = [
    {
      id: 1,
      name: 'Learn Angular',
    },
    {
      id: 2,
      name: 'Build a website',
    },
  ];
  todo: string;

  createNewToDoItem() {
    if (!this.todo) {
      alert('Please enter a todo!');
      return;
    }
    const newId = this.list.length + 1;
    this.list.push({ id: newId, name: this.todo });
    this.todo = '';
  }

  deleteItem(item: object) {
    this.list = this.list.filter((todo) => todo !== item);
  }
}
