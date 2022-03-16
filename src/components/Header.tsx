import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="relative py-6 lg:py-8">
        <img className="z-0 w-full h-full absolute inset-0 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/webapp/common/bg_image_dark.png" alt="bg" />
        <div className="z-10 relative container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h4 tabIndex={0} className="focus:outline-none text-2xl font-bold leading-tight text-white">Dashboard</h4>
            <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-300 text-sm mt-3">
              <li className="flex items-center mr-4">
                <div className="mr-1">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/background_with_sub_text-svg1.svg" alt="Remote" />
                </div>
                <span tabIndex={0} className="focus:outline-none mr-3">Remote</span>
              </li>
              <li className="flex items-center mr-4 mt-4 md:mt-0">
                <div className="mr-1">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/background_with_sub_text-svg2.svg" alt="Trending" />
                </div>
                <span tabIndex={0} className="focus:outline-none mr-3"> Trending</span>
              </li>
              <li className="flex items-center mt-4 md:mt-0">
                <div className="mr-1">
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/background_with_sub_text-svg3.svg" alt="date" />
                </div>
                <span tabIndex={0} className="focus:outline-none">Started on 29 Jan 2020</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 focus:text-indigo-400 mr-3 bg-white focus:outline-none transition duration-150 ease-in-out rounded text-indigo-600 hover:bg-gray-300 px-5 py-2 text-sm">Back</button>
            <button className="focus:ring-2  focus:ring-indigo-300 focus:bg-indigo-600  transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header