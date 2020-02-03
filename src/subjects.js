import {Subject, BehaviorSubject, ReplaySubject} from 'rxjs'

document.addEventListener('click', () => {

  const stream$ = new ReplaySubject(2)

  stream$.next('Hi')
  stream$.next('Hello')
  stream$.next('JS')
  stream$.subscribe(v => console.log('Value: ', v))

})