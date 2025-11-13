import React from 'react'

const Terms = () => {
  return (
    <div>
         <div className="max-w-4xl mx-auto px-4 py-10 text-gray-700">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        Welcome to <strong>HomeNest</strong>. By accessing or using our platform, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>User Responsibility:</strong> You are responsible for the accuracy of the property information you submit.
        </li>
        <li>
          <strong>Account Security:</strong> Keep your login credentials secure. We are not liable for unauthorized access.
        </li>
        <li>
          <strong>Content Ownership:</strong> All property listings and reviews are owned by the respective users.
        </li>
        <li>
          <strong>Usage Restrictions:</strong> You may not use our platform for fraudulent, illegal, or misleading activities.
        </li>
        <li>
          <strong>Data Privacy:</strong> We respect your privacy. Your data will not be shared without consent. See our Privacy Policy for details.
        </li>
        <li>
          <strong>Platform Changes:</strong> HomeNest reserves the right to update or modify these terms at any time.
        </li>
      </ul>

      <p className="mt-6 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>


    </div>
  )
}

export default Terms