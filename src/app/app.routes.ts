import { Routes } from '@angular/router';
import { PersonaComponent } from './components/persona/persona.component';
import { PersonaCreateComponent } from './components/persona/persona-create/persona-create.component'; // Componente de creación
import { PersonaUpdateComponent } from './components/persona/persona-update/persona-update.component'; // Componente de actualización

export const routes: Routes = [
  { path: 'persona', component: PersonaComponent },  // Ruta para el componente Persona
  { path: 'persona-create', component: PersonaCreateComponent }, // Ruta para crear persona
  { path: 'persona-update/:id', component: PersonaUpdateComponent } // Ruta para editar persona
];