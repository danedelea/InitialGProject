import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes de Torneos
import { VistaTorneosComponent } from './vista-torneos/vista-torneos.component';
import { CrearTorneosComponent } from './crear-torneos/crear-torneos.component';
import { TorneoActualComponent } from './torneo-actual/torneo-actual.component';
import { TorneoRetroComponent } from './torneo-retro/torneo-retro.component';
import { VistaReglamentoComponent } from './vista-reglamento/vista-reglamento.component';

// Módulos Extra
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

const torneos: Routes = [
  {
    path: 'vista-torneo',
    component: VistaTorneosComponent
  },
  {
    path: 'crearTorneo',
    component: CrearTorneosComponent
  },
  {
    path: 'torneoActual',
    component: TorneoActualComponent
  },
  {
    path: 'torneoRetro',
    component: TorneoRetroComponent
  }
];

@NgModule({
  declarations: [CrearTorneosComponent, VistaTorneosComponent, VistaReglamentoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    RouterModule.forChild(torneos),
  ],
  exports: [RouterModule]
})

export class TorneosModule { }
