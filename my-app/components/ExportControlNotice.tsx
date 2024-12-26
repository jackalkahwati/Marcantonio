import { AlertTriangle } from 'lucide-react'

const ExportControlNotice = () => {
  return (
    <div className="bg-red-900/20 p-4 rounded-lg border border-red-500 text-sm">
      <div className="flex items-start">
        <AlertTriangle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="text-red-400 font-semibold mb-2">Export Control Notice</h3>
          <p className="text-gray-200 text-sm">
            This content may contain technical data subject to the ITAR (22 CFR 120-130) and/or EAR (15 CFR 730-774). 
            Export, release, or disclosure to foreign persons without prior U.S. Government authorization is prohibited.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExportControlNotice 