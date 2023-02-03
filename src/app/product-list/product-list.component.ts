import { Component, Input } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: any[];

  constructor() {
    this.products = [
      {
        name: 'Jhon',
        surname: 'Doe',
        email: 'jhon.doe@email.com',
        id: '4782938L',
      },
      {
        name: 'Alice',
        surname: 'Combs',
        email: 'alice.combs@email.com',
        id: '4749204T',
      },
      {
        name: 'Grace',
        surname: 'Hawkins',
        email: 'grace.hawkins@email.com',
        id: '5671938K',
      },
      {
        name: 'Wayne',
        surname: 'Stuart',
        email: 'wayne.stuart@email.com',
        id: '9022108P',
      },
      {
        name: 'Juan',
        surname: 'Spence',
        email: 'juan.spence@email.com',
        id: '4321165C',
      },
      {
        name: 'Ronan',
        surname: 'Orozco',
        email: 'ronan.orozco@email.com',
        id: '6738145E',
      },
      {
        name: 'Sylvia',
        surname: 'Vega',
        email: 'sylvia.vega@email.com',
        id: '2031145J',
      },
    ];
  }

  /* Metode per detallar les dades de l'usuari */
  detalls(product: any) {
    /* Amb el window.alert em mostra les dades, el que significa que al clicar el boto esta agafant les dades de la llista */
    window.alert(
      `Nom: ${product.name} ` +
        ` Cognom: ${product.surname}` +
        ` Email: ${product.email}` +
        ` DNI: ${product.id}`
    );

    /* De moment no printeja les dades en una finestra externa però el metode si que rep les dades */
    
    const ventana = window.open('', '', 'width=400,height=400');
    if (ventana) {
      ventana.document.write(
        `Nom: ${product.name} ` +
          ` Cognom: ${product.surname}` +
          ` Email: ${product.email}` +
          ` DNI: ${product.id}`
      );
    }
  }

  /* Metode per afegir usuaris */

  afegirUsuari(item: string) {
    console.warn(item);
    this.products.push({
      name: this.products,
      surname: this.products,
      email: this.products,
      id: this.products,
    });
  }
}

/*
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
*/

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
