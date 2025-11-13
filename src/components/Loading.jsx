import React from 'react'

const Loading = () => {
  return (
  <div className="flex justify-center items-center mt-10 h-screen">
  <div className="w-20 h-20  border-dashed rounded-full animate-spin border-black border-4"></div> <br />
     <p className="mt-4 text-lg font-semibold text-blue-600">Loading, please wait...</p>

</div>

  )
}

export default Loading