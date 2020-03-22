import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../home/article';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public activeSlide: BehaviorSubject<Article> = new BehaviorSubject(null);
  public activeTab: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() { }

}
