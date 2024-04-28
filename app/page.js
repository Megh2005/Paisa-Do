export default function Home() {
  return (
    <>
      <div className="flex justify-center text-white flex-col gap-4 h-[44vh] items-center">
        <div className="font-bold text-5xl">💰 Fund Me Here 💰</div>
        <p className="capitalize font-bold">A fund raising platform for all developers. Get funded by your app users</p>
        <div>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="text-white container mx-auto">
        <h1 className="capitalize text-2xl font-bold text-center my-14">Perks You Will Receive From Our Side</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className=" bg-[#222233] rounded-full p-2 text-black" width={100} src="/money.png" alt="man" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center capitalize">gain a necessary financial support</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className=" bg-[#222233] rounded-full p-2 text-black" width={100} src="/orders.png" alt="man" />
            <p className="font-bold">Accept Jobs</p>
            <p className="text-center capitalize">accept jobs to upskill & get hired</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className=" bg-[#222233] rounded-full p-2 text-black" width={100} src="/man-removebg.png" alt="man" />
            <p className="font-bold">Work Harder</p>
            <p className="text-center capitalize">Work harder to achieve your actual goal</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <img className=" bg-[#222233] rounded-full p-2 text-black" width={100} src="/link.png" alt="man" />
            <p className="font-bold">Get Connected</p>
            <p className="text-center capitalize">Get connected to a larger audiance</p>
          </div>
        </div>
      </div>
    </>
  );
}
