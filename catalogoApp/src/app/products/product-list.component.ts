import {Component, Input} from '@angular/core';
import { IHouse } from './house';
import { HouseService } from './house.service';


@Component({
    selector: 'house',
    templateUrl: './product.component.html'
})

export class ProductListComponent{
    newHouse: IHouse[] = [{name: '', price: '', description: '',  img:'' }];
    photos: any[];
    errorMessage: ErrorEventHandler;
    houses: IHouse[] = [
        {name :'Paul Brasil', price: '$3000000',  description: 'Blanca y con dos pisos' ,img: 'https://images.homify.com/images/a_0,c_limit,f_auto,h_1024,q_auto,w_1024/v1442864995/p/photo/image/926396/EBF_5380/fotos-de-casas-de-estilo-moderno-de-pau-brasil.jpg'},
        {name : 'Plusvallia', price: '$3500000',  description: 'Dos pisos y doble cochera' ,img: 'https://www.construyehogar.com/wp-content/uploads/2016/02/Idea-fachada-casa-dos-pisos-moderna-coralhomes.com_.au-.jpg'},
        {name : 'Portman', price: '$3500000',  description: 'Doble Piso y con alberca' ,img: 'http://www.arquitexs.com/wp-content/uploads/2016/07/fachada-de-casa-moderna-800x445.jpg'},
        {name : 'Sorrento', price: '$4000000',description: 'Doble cochera y dos pisos', img: "http://plusvalia.mx/wordpress/wp-content/uploads/2017/01/CASA-PRUEBA.jpg"},
        {name : 'Celebration Homes', price: '$4000000',description: 'Cochera con dos pisos', img: "http://www.buscandocasa.com.mx/wordpress/wp-content/uploads/2017/01/K7_FACHADA-A-300x300.jpg"},
        {name : 'Tecamac', price: '$4000000',description: 'Kristal', img: "https://images.homify.com/images/a_0,c_limit,f_auto,h_1024,q_auto,w_1024/v1447816507/p/photo/image/1123069/IMG_2279/fotos-de-casas-de-estilo-moderno-en-blanco-de-camilo-pulido-arquitectos.jpg"},
        {name : 'Palms', price: '$4000000',description: 'Dos pisos pequena', img: "http://www.javer.com.mx/admin/dist/images/uploads/galeria/9e0db30_fac.jpg"} ]


    constructor (private _houseService: HouseService){

    }

ngOnInit(): void {
    this._houseService.getProducts().subscribe(
        photos => this.photos=photos,
        error => this.errorMessage = <any>error);
    }



    removeHouse(house):void{
        this.houses = this.houses.filter( (x) => {
            return x.name != house.name
        });
    }

    addHouse():void{
       this.houses.push(this.newHouse[0]);
       this.newHouse = [{name: '', price: '', description: '',  img:'' }];
    }

}