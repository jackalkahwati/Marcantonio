export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center p-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-gray-600 mb-6">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Go home</a>
      </div>
    </main>
  )
}


