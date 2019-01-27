import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  @Input() data: any;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    var sub = this.route
      .queryParams
      .subscribe(params => {
        this.data = +params['data'] || 0;
      })
  }

}
