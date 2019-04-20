//CommonJS 스펙 : 모듈가져오기
//var _ = require('lodash');
//es6 방식의 모듈 가져오기
import _ from 'lodash';
import '../style.css';
import '../hello.scss';
//name export 하는 방법
import {area, circumference} from "./js/circle";

function component() {
    console.log('webpack test');
    console.log(area(5));
    console.log(circumference(5));
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}
document.body.appendChild(component());
