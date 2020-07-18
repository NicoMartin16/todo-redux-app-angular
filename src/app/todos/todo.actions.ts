import { createAction, props } from '@ngrx/store';

export const limpiarCompletados  = createAction(
  '[TODO] limpiar Todo'
);

export const crear = createAction(
  '[TODO] crear Todo',
  props<{texto: string}>()
);

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{id: number}>()
);

export const editar = createAction(
  '[TODO] editar Todo',
  props<{id: number, texto: string}>()
);

export const borrar = createAction(
  '[TODO] Borrar Todo',
  props<{id: number}>()
);

export const toggleAll  = createAction(
  '[TODO] toggleAll Todo',
  props<{completado: boolean}>()
);

