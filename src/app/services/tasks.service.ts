import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskItem } from '../models/Task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  API_URI = 'http://localhost:3000/api/v1/tasks';

  constructor( private http: HttpClient ) {   }


  	getTasks() {
		return this.http.get(this.API_URI)
	}

	getTask(id: string) {
		return this.http.get(`${this.API_URI}/${id}`)
	}

	saveTask( task: TaskItem ) {
		return this.http.post(this.API_URI, task);
	}

	updateTask( id: number|string, updatedTask: TaskItem) {
		return this.http.put(`${this.API_URI}/${id}`, updatedTask)
	}

	deleteTask(id: string) {
		return this.http.delete(`${this.API_URI}/${id}`)
	}
}
