import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {

  // THIS IS TO DISPLAY DATE AND TIME
  const today = new Date();
  const time = today.toLocaleTimeString('en-US', {
    hour : '2-digit',
    minute : '2-digit'
  });
  const date = (new Intl.DateTimeFormat('en-US', {
    dateStyle : 'full',
  })).format(today);

  return (
  <section className='flex size-full flex-col gap-10 text-white'> 
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
          <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
            <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at: 12:30 PM</h2>
            <div className='flex flex-col gap-2'>
              <h1 className='text-4-xl  font-extrabold lg:text-7xl'>
                {time}
              </h1>
              <p className='text-lg font-medium text-sky-1'>{date}</p>
            </div>
          </div>
      </div>
      <MeetingTypeList />
   </section>
  )
}

export default Home