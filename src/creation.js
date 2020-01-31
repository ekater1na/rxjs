import { of, from } from 'rxjs';
import { scan } from 'rxjs/operators';

const stream$ = of(1, 2, "Rrrrr", 4, 5, 6, 7);

stream$.subscribe(val => {
    console.log("Value: ", val);
})

const array$ = from([1, 2, 3, 4]).pipe(
   scan( (acc, v) => acc.concat(v), [])
);

array$.subscribe(val => {
    console.log("Value: ", val);
})