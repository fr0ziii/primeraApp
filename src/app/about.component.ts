import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <h2 class="title">Mi primera App</h2>
        <p>
            Este proyecto ha sido creado con Angular
        </p>
        <br />
        <h2 class="title">Autor</h2>
        <p>
              Esta app está realizada por David Iglesias para la asignatura Desarrollo de Aplicaciones Web II
        </p>
        <h2 class="title">Descripción</h2>
        <p>
              Esta app está realizada para construir una colección de héroes y villanos.
              La app tiene varias características como mostrar la lista de héroes y villanos, así como editarlos y visualizarlos.
        </p>
        <br />
      </div>
    </div>
  `
})
export class AboutComponent {}
