import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";


import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
      height: auto;
      border-radius: 10px
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;


  constructor(private activatedRouted: ActivatedRoute,
              private heroesService : HeroesService,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRouted.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroePorId(id) )
    )
    .subscribe(resp => {
      this.heroe = resp
      
    })
  }

  regresar(){
    this.router.navigate(["/heroes/listado"]);
  }
  
}

// this.activatedRouted.params
// .subscribe( ({id}) => {
//   console.log(id);
  
//   this.heroesService.getHeroePorId(id)
//   .subscribe(resp => {
    
//     this.heroe = resp
//     console.log(resp)
//   });
// });