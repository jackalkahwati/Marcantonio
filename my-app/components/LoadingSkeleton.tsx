const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Header Skeleton */}
      <div className="h-10 w-3/4 bg-gray-700 rounded-lg mx-auto mb-8" />
      
      {/* Description Skeleton */}
      <div className="space-y-3 max-w-3xl mx-auto mb-12">
        <div className="h-4 bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-700 rounded w-5/6" />
        <div className="h-4 bg-gray-700 rounded w-4/6" />
      </div>

      {/* Form Skeleton */}
      <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto mb-16">
        <div className="h-8 w-1/2 bg-gray-700 rounded-lg mx-auto mb-8" />
        <div className="space-y-6">
          <div>
            <div className="h-4 w-24 bg-gray-700 rounded mb-2" />
            <div className="h-12 bg-gray-700 rounded w-full" />
          </div>
          <div className="h-12 bg-gray-700 rounded w-full" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg">
          <div className="h-8 w-48 bg-gray-700 rounded mb-6" />
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-start">
                <div className="h-5 w-5 bg-gray-700 rounded-full mr-3 mt-1" />
                <div className="h-4 bg-gray-700 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg">
          <div className="h-8 w-48 bg-gray-700 rounded mb-6" />
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border-b border-gray-700 pb-4 last:border-0">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-700 rounded w-1/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeleton 