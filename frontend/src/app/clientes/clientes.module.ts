import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFichaComponent } from './clientes/cliente-ficha/cliente-ficha.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteProductosComponent } from './cliente-productos/cliente-productos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [ClientesComponent, ClienteFichaComponent, ClienteFormComponent, ClienteComponent, ClienteProductosComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class ClientesModule { }
