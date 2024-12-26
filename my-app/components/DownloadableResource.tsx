import { FileDown } from 'lucide-react'

interface DownloadableResourceProps {
  title: string
  filename: string
  description?: string
}

const DownloadableResource = ({ title, filename, description }: DownloadableResourceProps) => {
  return (
    <div className="bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg hover:bg-gray-800/70 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          {description && (
            <p className="text-gray-300 text-sm mb-4">{description}</p>
          )}
        </div>
        <a
          href={`/blog/${filename}`}
          download
          className="flex items-center justify-center bg-gold text-navy-blue px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors ml-4"
        >
          <FileDown className="w-5 h-5 mr-2" />
          Download
        </a>
      </div>
    </div>
  )
}

export default DownloadableResource 