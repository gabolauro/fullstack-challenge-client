import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

import { TaskItem } from '../../models/Task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	tasks: any[] = [];


  constructor( private taskService: TasksService ) {

  	

  }

  ngOnInit(): void {

  	this.getTasks();

  }

  getTasks() {
  	this.taskService.getTasks()
  		.subscribe( (res: any) => {

  			//opcion para abrir menu
  			// Object.keys(res).forEach( (valor: any) => { 
     //      valor.menu = false;
     //      valor.delete = false;
     //     } );

  			console.log(res);
  			this.tasks = res; 
  		})
  }


  deleteTask(id: string ) {
    // console.log(id)
    this.taskService.deleteTask(id)
      .subscribe(
        res => {
          this.getTasks();
        })
  }

}
