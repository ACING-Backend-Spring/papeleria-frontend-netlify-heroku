import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteProductosComponent } from './cliente-productos/cliente-productos.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'formulario',
    component: ClienteFormComponent
  },
  {
    path: 'productos/:id',
    component: ClienteProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
