import React from 'react'

const Upload = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center  justify-evenly">
    <h1 className="text-7xl font-bold mb-4">UPLOAD FILE </h1>
    <form action='http://localhost:5000/upload' method='POST' enctype="multipart/form-data" className='flex'>
    {/* <div className='flex  flex-col w-[20rem] h-[20rem] justify-evenly items-center'>
     <input type="file" name="ftp_files"/>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded">
      Upload File
    </button>
    </div> */}

<div class="flex items-center justify-center w-full">
  <label for="dropzone-file" class="flex flex-col items-center justify-center w-[80vw] h-[50vh] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-[6rem] h-[10rem] mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
      </div>
      <input id="dropzone-file" type="file" name="ftp_files" className="hidden" />
  </label>
</div> 
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded" onClick={()=>{
        alert("File Uploaded Successfully..")
      }}>
      Upload File
    </button>
    </form>
  </div>
  )
}

export default Upload