import { of, from, Observable, observable } from 'rxjs';
import { scan } from 'rxjs/operators';

// const stream$ = of(1, 2, "Rrrrr", 4, 5, 6, 7);

// stream$.subscribe(val => {
//     console.log("Value: ", val);
// })

// const array$ = from([1, 2, 3, 4]).pipe(
//    scan( (acc, v) => acc.concat(v), [])
// );

// array$.subscribe(val => {
//     console.log("Value: ", val);
// })

const stream$ = new Observable(observer => {
    observer.next('First value')
    setTimeout( () => observer.next('After 1000 ms'), 1000)
    setTimeout( () => observer.complete(), 1500)
    setTimeout( () => observer.error('Error'), 2000)
    setTimeout( () => observer.next('After 3000 ms'), 3000)
})

stream$.subscribe( 
    (val) => console.log("Val: ", val),
    (err) => console.log(err),
    () => console.log("Complete")
    
    )
