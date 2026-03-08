export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Inicio de Sesión</h1>
      <p className="mt-4 text-xl text-gray-700">Ingresa tus credenciales para continuar.</p>
      <div className="mt-8">
        <a href="/" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          Volver al Inicio
        </a>
      </div>
    </main>
  );
}