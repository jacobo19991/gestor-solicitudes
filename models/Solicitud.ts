export type EstadoSolicitud = "abierta" | "en_proceso" | "cerrada";
export type TipoSolicitud = "soporte" | "permiso" | "requerimiento";

export interface Solicitud {
  id: string;
  userId: string;
  userEmail: string;
  titulo: string;
  descripcion: string;
  tipo: TipoSolicitud;
  estado: EstadoSolicitud;
  createdAt: string;
  updatedAt: string;
}