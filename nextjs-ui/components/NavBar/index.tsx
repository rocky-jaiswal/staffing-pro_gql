import Image from 'next/image'

function NavBar() {
  return (
    <div className="w-full border-t lg:border-r lg:w-32 bg-sky-200">
      <div className="flex justify-between lg:justify-start lg:flex-col fill-blue-500">
        <div className="flex flex-col justify-center items-center p-4 border-b-2 border-cyan-700">
          {/* <Image src="/list.svg" alt="list" width="50px" height="50px" /> */}
          <p>Projects</p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 border-b-2 border-cyan-700">
          {/* <Image src="/star.svg" alt="list" width="50px" height="50px" /> */}
          <p>Starred</p>
        </div>
        <div className="flex flex-col justify-center items-center p-4 border-b-2 border-cyan-700">
          {/* <Image src="/bell.svg" alt="list" width="50px" height="50px" /> */}
          <p>Updates</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
