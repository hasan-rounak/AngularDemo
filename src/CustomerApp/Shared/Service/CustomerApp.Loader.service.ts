import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class LoaderService {
    public isLoading = new BehaviorSubject(false);
    Show() {
        this.isLoading.next(true);
    }
    Hide() {
        this.isLoading.next(false);
    }
}
