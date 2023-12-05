import Image from 'next/image'
import Link from 'next/link';
import data from '../../../api/data.json';

export default function Page({ params }: { params: { slug: string } }) {
  return <main className="flex flex-col items-center justify-between pt-[80px] w-[1160px] m-auto">
    <div className='grid w-full grid-cols-2 mb-[90px]'>
      <div className='text-[28px] flex items-center font-medium text-[#313E51]'>
        <div className='h-[56px] w-[56px] rounded-[8px] flex flex-row mr-[24px] items-center justify-center bg-[#FFF1E9]'>
          <Image src="/images/icon-accessibility.svg" className="inline" height="40" width="40" alt="HTML" />
        </div>
        <div className='inline'>Accessibility 123</div>
      </div><div>My Post: {params.slug}</div>
      <div className='w-full flex items-center justify-end text-right'>
        <Image src="/images/icon-sun-dark.svg" className="inline" height="24" width="24" alt="HTML" />
        <label className="relative inline-flex items-center cursor-pointer mx-[16px]">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A729F5]"></div>
        </label>
        <Image src="/images/icon-moon-dark.svg" className="inline" height="24" width="24" alt="HTML" />
      </div>
    </div>

    {data.quizzes[0].icon}

    <div className='grid w-full grid-cols-2'>
      <div className='text-left w-[465px]'>
        <div className="italic mb-[40px] grey-navy">
          Question 6 of 10.
        </div>
        {/* <h1 className='leading-tight dark-navy mb-[36px]'> */}
        <p className="font-light text-[36px]">
          Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?
        </p>
        {/* </h1> */}
      </div>
      <div>
        <Link href="/">
          <div className='px-[20px] mb-[24px] h-[92px] shadow flex items-center bg-white align-middle rounded-[24px] text-[28px]'>
            <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#F4F6FA] text-[#626C7F]'>
              A
            </div>
            <p className='inline align-middle p-[32px]'>
              HTML
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className='px-[20px] mb-[24px] h-[92px] shadow flex items-center bg-white align-middle rounded-[24px] text-[28px]'>
            <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#F4F6FA] text-[#626C7F]'>
              B
            </div>
            <p className='inline align-middle p-[32px]'>
              HTML
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className='px-[20px] mb-[24px] h-[92px] shadow flex items-center bg-white align-middle rounded-[24px] text-[28px]'>
            <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#F4F6FA] text-[#626C7F]'>
              C
            </div>
            <p className='inline align-middle p-[32px]'>
              HTML
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className='px-[20px] mb-[24px] h-[92px] shadow flex items-center bg-white align-middle rounded-[24px] text-[28px]'>
            <div className='h-[56px] w-[56px] rounded-[8px] flex items-center justify-center bg-[#F4F6FA] text-[#626C7F]'>
              D
            </div>
            <p className='inline align-middle p-[32px]'>
              HTML
            </p>
          </div>
        </Link>
        <Link href="/score">
          <div className='px-[20px] mb-[24px] h-[92px] shadow flex items-center bg-[#A729F5] align-middle rounded-[24px] text-[28px]'>
            <p className='inline align-middle text-center text-white w-full p-[32px]'>
              Submit Answer
            </p>
          </div>
        </Link>
      </div>
    </div>
  </main>

}