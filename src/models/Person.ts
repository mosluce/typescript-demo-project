import {Pet} from './Pet';
import {padStart} from 'lodash';

export class Person {
    private _num: string;
    public name: string;
    public pets: Pet[];

    set num(num: string) {
        this._num = padStart(num, 8, '0');
    }
    get num(): string{return this._num};
}