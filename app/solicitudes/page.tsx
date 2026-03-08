export default function SolicitudesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Gestión de Solicitudes</h1>
      <p className="mt-4 text-xl text-gray-700">Aquí podrás administrar todos tus recursos.</p>
      <div className="mt-8">
        <a href="/" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Volver al Inicio
        </a>
      </div>
    </main>
  );
}