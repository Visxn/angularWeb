import { Component } from '@angular/core';
import { RxjsService, Data } from './rxjs.service';
import { error } from 'highcharts';
import { delay, filter, firstValueFrom, forkJoin, lastValueFrom, of, switchMap, timer} from 'rxjs';

@Component({
  selector: 'app-rxjs-screen',
  templateUrl: './rxjs-screen.component.html',
  styleUrls: ['./rxjs-screen.component.scss']
})
export class RxjsScreenComponent {

  loading = false;
  dataFromApi1: Data;
  dataFromApi2: Data;
  dataFromApi3: Data;
  dataFromApi4: Data;
  dataFromApi5: Data;
  dataFromApi6: Data;
  dataFromApi7: Data;
  dataFromApi8: Data;
  totalData1: number;
  totalData2: number;
  result: Data;
  

  constructor(private rxjsService: RxjsService) { }
  
  async ngOnInit() {
    const url="https://cf9d3bf7-30fa-48e3-956b-9c6e48823a79.mock.pstmn.io/promises"
      
   
    
   const promise1 = lastValueFrom(this.rxjsService.getData());
   const promise2 = lastValueFrom(this.rxjsService.getData());
   const promise3 = lastValueFrom(this.rxjsService.getData());
   const promise4 = lastValueFrom(this.rxjsService.getData());
   const sentence = "this gotta be in caps and without spaces";

   forkJoin([promise1, promise2, promise3, promise4]).subscribe({
    next: ([result1, result2, result3, result4]) => {
      this.dataFromApi1 = result1 as Data;
      this.dataFromApi2 = result2 as Data;
      this.dataFromApi3 = result3 as Data;
      this.dataFromApi4 = result4 as Data;
    }
    
   });
   this.loading = true;

   const observable1 = this.rxjsService.getData();
   const observable2 = this.rxjsService.getData();
   const observable3 = this.rxjsService.getData();
   const observable4 = this.rxjsService.getData();

   forkJoin([observable1, observable2, observable3, observable4]).subscribe({
    next: ([result1, result2, result3, result4]) => {
      this.dataFromApi5 = result1 as Data;
      this.dataFromApi6 = result2 as Data;
      this.dataFromApi7 = result3 as Data;
      this.dataFromApi8 = result4 as Data;
      
    }
   });
   
  const switched = of(1, 2,3,4,5,6).pipe(
    filter( x => x>3),
    switchMap(x => of(x, x * 2)),
    delay(1000));
  switched.subscribe(x => console.log(x));

  }

}
