import {Component, Input, OnChanges} from '@angular/core';

@Component ({
selector: 'house-description',
templateUrl:'./description.component.html'
})

export class DescriptionComponent implements OnChanges{
    @Input() house: {name:'',description:''};
    ngOnChanges(){
        //called after de constructor, initializing input
        //add 'implements OnInit' to te class
        console.log(this.house);
    }
}