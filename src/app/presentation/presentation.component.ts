import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit, OnDestroy {

  private timeout: ReturnType<typeof setTimeout>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.goHome();
  }

  goHome() {
    this.timeout = setTimeout(() => this.router.navigate(['/home']), 7000);
  };

  ngOnDestroy(): void {
    clearTimeout(this.timeout);
  }
}
