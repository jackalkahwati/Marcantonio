export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-navy-blue text-white">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-12">Privacy Policy</h1>
        
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-gray-200 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-200">
              Marcantonio Global ("we," "our," or "us") is committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          {/* ITAR and Export Control Notice */}
          <section className="bg-red-900/20 p-6 rounded-lg border border-red-500">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">Export Control Notice</h2>
            <p className="text-gray-200 mb-4">
              This website contains technical data whose export is restricted by the Arms Export Control Act 
              (Title 22, U.S.C., Sec 2751, et seq.) or the Export Administration Act of 1979, as amended 
              (Title 50, U.S.C., App. 2401 et seq.). Violations of these export laws are subject to severe 
              criminal penalties.
            </p>
            <p className="text-gray-200">
              Some content on this site may be controlled under the International Traffic in Arms Regulations 
              (ITAR) or the Export Administration Regulations (EAR). This technical data may not be exported, 
              released, or disclosed to foreign persons without first complying with export license requirements.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Personal Information</h3>
              <p className="text-gray-200">
                We collect information that you voluntarily provide when using our services, including:
              </p>
              <ul className="list-disc list-inside text-gray-200 ml-4">
                <li>Name and contact information</li>
                <li>Professional or employment information</li>
                <li>Security clearance status (where applicable)</li>
                <li>Communication preferences</li>
              </ul>
            </div>
          </section>

          {/* GDPR Compliance */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">GDPR Compliance</h2>
            <p className="text-gray-200 mb-4">
              For users in the European Economic Area (EEA), we process personal data under the following 
              legal bases:
            </p>
            <ul className="list-disc list-inside text-gray-200 ml-4">
              <li>Consent</li>
              <li>Contractual necessity</li>
              <li>Legal obligations</li>
              <li>Legitimate interests</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-200">
              We implement appropriate technical and organizational security measures to protect your 
              information. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-200 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication measures</li>
              <li>Regular security assessments</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          {/* Cookie Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
            <p className="text-gray-200 mb-4">
              We use cookies and similar tracking technologies to improve your browsing experience on our 
              website. You can control cookie settings through your browser preferences.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside text-gray-200 ml-4">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand user behavior</li>
                <li>Security cookies for fraud prevention</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-200 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-200 ml-4">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-200">
              For any privacy-related questions or to exercise your rights, please contact our Data Protection 
              Officer at:
            </p>
            <div className="bg-gray-800 p-6 rounded-lg mt-4">
              <p className="text-gray-200">Email: privacy@marcantonioglobal.com</p>
              <p className="text-gray-200">Address: [Your Business Address]</p>
              <p className="text-gray-200">Phone: [Your Contact Number]</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 