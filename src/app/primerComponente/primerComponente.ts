import { Component } from '@angular/core'; // para llamar funcionalidad de angular se lee desde nucleo de angular traer funcionalidad entre llaves que se va importar en este caso component da la funcionalidad de crear componente 


//para utilizar componente utilizar una clase 
//para convertir la clase a  componente con @Component({}) es decir creando una nueva etiqueta aqui se define su nombre con la propiedad selector  
@Component({
    selector    :   'primero', //selector da nombre al componente se lamara como <primero></primero>
    templateUrl :   './primerComponente.html',         //sera lo que va a mostrar la etiqueta o componente template: (se usa para poner el html aqui ) templateUrl (para hacer uso de una hoja externa de html)
    styleUrls   :   ['./primerComponente.css'] // aqui van los estilos  styles para aqui mismo declarar css styleUrls para hoja externa de css 
})
//para poder utilizar el componenete en otras partes de la app tenemos que exportar la clase con export 
export class Primero {
    tittle = 'Titulo'; //sera llamado en el html 
    

}