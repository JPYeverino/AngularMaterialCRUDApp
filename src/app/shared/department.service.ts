import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import * as _ from 'lodash';


@Injectable()
export class DepartmentService {
  departmentList: AngularFireList<any>;
  array: any[] = [];

  constructor(private firebase: AngularFireDatabase) {
    this.departmentList = this.firebase.list('Department');
    this.departmentList.snapshotChanges().subscribe(list => {
      this.array = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }

  getDepartmentName($key) {
    if ($key === '0') {
      return '';
    } else {
      return _.find(this.array, (obj) => obj.$key === $key)['name'];
    }
  }
}
