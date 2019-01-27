import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

interface Iresult {
  material_name?: String;
  material_synonyms?: String;
  material_title?: String;
  special_instructions?: String;
  stream_name?: String;
  stream_title?: String;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result: Iresult = {};

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.result.material_name = this.route.snapshot.queryParamMap.get('material_name');
    this.result.material_synonyms = this.route.snapshot.queryParamMap.get('material_synonyms');
    this.result.material_title = this.route.snapshot.queryParamMap.get('material_title');
    this.result.special_instructions = this.route.snapshot.queryParamMap.get('special_instructions');
    this.result.stream_name = this.route.snapshot.queryParamMap.get('stream_name');
    this.result.stream_title = this.route.snapshot.queryParamMap.get('stream_title');
    console.log(this.result);
    /* var sub = this.route
      .queryParams
      .subscribe(params => {
        this.data = +params['data'] || 0;
        console.log(this.data);
      }) */
  }

}
