import { of, from, Observable, fromEvent } from 'rxjs';
import { scan, map } from 'rxjs/operators';

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
    // setTimeout( () => observer.error('Error'), 2000)
    setTimeout( () => observer.next('After 3000 ms'), 3000)
})

// stream$.subscribe( 
//     (val) => console.log("Val: ", val),
//     (err) => console.log(err),
//     () => console.log("Complete")
    
//     )

// stream$.subscribe({
//     next(val) {
//         console.log(val);
//     },
//     error(err) {
//         console.log(err);
//     },
//     complete() {
//         console.log("Complete");
//     }
// })

fromEvent(document.querySelector('canvas'), 'mousemove')
    .pipe(
        map( e => ({ 
            x: e.offsetX,
            y: e.offsetY,
            ctx: e.target.getContext('2d')
        }))
    )
    .subscribe( pos => {
        pos.ctx.fillRect(pos.x, pos.y, 2, 2)
    })

const clear$ = fromEvent(document.getElementById('clear'), 'click')

clear$.subscribe( () => {
    const canvas = document.querySelector('canvas')
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
})
