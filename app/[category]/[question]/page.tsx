'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import data from '../../../api/data.json';
import { useEffect, useState } from "react";
import DarkModeToggle from '../../darkModeToggle'

export default function Page({ params }: { params: { category: string, question: string } }) {
  const router = useRouter()
  const [hasAnswer, setHasAnswer] = useState(false);
  const [userSelect, setUserSelect] = useState(0);

  function handleSubmitAnswer() {
    setHasAnswer(true);
  }

  const handleUserSelect = (index) => {
    setUserSelect(index);
  }

  interface QuizItem {
    title: string;
    icon: string;
    questions: Questions[];
  }

  interface Questions {
    question: string;
    options: string[];
    answer: string;
  }

  let quiz: QuizItem = data.quizzes?.find(category => category.title.toLowerCase() === params.category) || data.quizzes[0]
  let quizQuestion = quiz?.questions[Number(params.question)] || 0;

  function getNextPageNum(): string {
    let currIndex = Number(params.question)
    if (currIndex + 1 === 10) {
      return '/score'
    } else {
      return '/' + params.category + '/' + (currIndex + 1)
    }
  }

  function getIconInfo(): {
    path: string;
    color: string;
    activeBg: string;
    focusText: string;
    activeText: string;
    ringColor: string;
    focusBg: string;
    hoverText: string;
    bgBtn: string;
    hoverBg: string;
    activeBgBtn: string;
  } {
    let iconInfo = {
      path: '',
      color: '',
      activeBg: '',
      focusText: '',
      focusBg: '',
      activeText: '',
      ringColor: '',
      hoverText: '',
      hoverBg: '',
      bgBtn: '',
      activeBgBtn: ''
    }

    switch (params.category) {
      case 'html':
        iconInfo.path = '/images/icon-html.svg'
        iconInfo.color = 'bg-[#FFF1E9]'
        iconInfo.activeBg = 'group-active:bg-[#FF7E35]'
        iconInfo.focusText = 'group-focus:text-[#FFFFFF]'
        iconInfo.focusBg = 'group-focus:bg-[#FF7E35]'
        iconInfo.activeText = 'group-active:text-[#FFFFFF]'
        iconInfo.ringColor = 'focus:ring-[#FF7E35]'
        iconInfo.hoverText = 'group-hover:text-[#FF7E35]'
        iconInfo.hoverBg = 'group-hover:bg-[#FFF1E9]'
        iconInfo.bgBtn = 'bg-[#FF7E35]'
        iconInfo.activeBgBtn = 'active:bg-[#FF7E35] active:opacity-50'
        break;
      case 'css':
        iconInfo.path = '/images/icon-css.svg'
        iconInfo.color = 'bg-[#E0FDEF]'
        iconInfo.activeBg = 'group-active:bg-[#2FD887]'
        iconInfo.focusText = 'group-focus:text-[#FFFFFF]'
        iconInfo.focusBg = 'group-focus:bg-[#2FD887]'
        iconInfo.activeText = 'group-active:text-[#FFFFFF]'
        iconInfo.ringColor = 'focus:ring-[#2FD887]'
        iconInfo.hoverText = 'group-hover:text-[#2FD887]'
        iconInfo.hoverBg = 'group-hover:bg-[#E0FDEF]'
        iconInfo.bgBtn = 'bg-[#2FD887]'
        iconInfo.activeBgBtn = 'active:bg-[#2FD887] active:opacity-50'
        break;
      case 'javascript':
        iconInfo.path = '/images/icon-js.svg'
        iconInfo.color = 'bg-[#EBF0FF]'
        iconInfo.activeBg = 'group-hover:bg-[#EBF0FF]'
        iconInfo.focusText = 'group-focus:text-[#FFFFFF]'
        iconInfo.focusBg = 'group-focus:bg-[#306AFF]'
        iconInfo.activeText = 'group-active:text-[#FFFFFF]'
        iconInfo.ringColor = 'focus:ring-[#306AFF]'
        iconInfo.hoverText = 'group-hover:text-[#306AFF]'
        iconInfo.hoverBg = 'group-hover:bg-[#E0FDEF]'
        iconInfo.bgBtn = 'bg-[#306AFF]'
        iconInfo.activeBgBtn = 'active:bg-[#306AFF] active:opacity-50'
        break;
      case 'accessibility':
        iconInfo.path = '/images/icon-accessibility.svg'
        iconInfo.color = 'bg-[#F6E7FF]'
        iconInfo.activeBg = 'group-hover:bg-[#F6E7FF]'
        iconInfo.focusText = 'group-focus:text-[#FFFFFF]'
        iconInfo.focusBg = 'group-focus:bg-[#A729F5]'
        iconInfo.activeText = 'group-active:text-[#FFFFFF]'
        iconInfo.ringColor = 'focus:ring-[#A729F5]'
        iconInfo.hoverText = 'group-hover:text-[#A729F5]'
        iconInfo.hoverBg = 'group-hover:bg-[#E0FDEF]'
        iconInfo.bgBtn = 'bg-[#A729F5]'
        iconInfo.activeBgBtn = 'active:bg-[#A729F5] active:opacity-50'
        break;
    }

    return iconInfo
  }

  return (
    <main className="flex flex-col items-center justify-between pt-[80px] w-[1160px] m-auto">
      <div className='grid w-full grid-cols-2'>
        <Link href="/">
          <div className='text-[28px] flex items-center font-medium text-[#313E51] dark:text-[#FFFFFF]'>
            <div className={'h-[56px] w-[56px] rounded-[8px] flex flex-row mr-[24px] items-center justify-center ' + getIconInfo().color}>
              <Image src={getIconInfo().path} className="inline" height="40" width="40" alt="HTML" />
            </div>
            <div className='inline'>{quiz!.title}</div>
          </div>
        </Link>
        <DarkModeToggle></DarkModeToggle>
        {/* <div className='w-full flex items-center justify-end text-right'>
          <Image src="/images/icon-sun-dark.svg" className="inline" height="24" width="24" alt="HTML" />
          <label className="relative inline-flex items-center cursor-pointer mx-[16px]">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#A729F5]"></div>
          </label>
          <Image src="/images/icon-moon-dark.svg" className="inline" height="24" width="24" alt="HTML" />
        </div> */}
      </div>

      <div className='grid w-full grid-cols-2'>
        <div className='text-left w-[465px]'>
          <div className="italic mb-[40px] grey-navy dark:text-[#FFFFFF]">
            Question {params.question} of 10.
          </div>
          <p className="font-light text-[36px] dark:text-[#FFFFFF]">
            {quizQuestion.question}
          </p>
        </div>
        <div>
          {/* {quizQuestion.answer} */}
          <button disabled={hasAnswer} onClick={() => handleUserSelect(0)} className={`
            ${(userSelect !== quizQuestion.answer) && hasAnswer && userSelect === 0 ? "ring ring-[#EE5454] " : ""} 
            ${(userSelect === quizQuestion.answer) && hasAnswer && quizQuestion.answer === 0 ? "ring ring-[#26D782] " : ""} group cursor-pointer px-[20px] w-full mb-[24px] h-[92px] flex items-center justify-between bg-white dark:bg-[#3B4D66] align-middle rounded-[24px] text-[28px] focus:outline-none focus:ring ` + getIconInfo().ringColor}>
            <div className={'flex shrink-0 h-[56px] w-[56px] rounded-[8px] items-center justify-center bg-[#F4F6FA] text-[#626C7F] ' +
              (!hasAnswer ? getIconInfo().focusText + ' ' + getIconInfo().focusBg + ' ' + getIconInfo().activeBg + ' ' + getIconInfo().activeText + ' ' + getIconInfo().hoverText + ' ' + getIconInfo().hoverBg : '')
            }>
              A
            </div>
            <p className='inline text-left w-full align-middle p-[32px] dark:text-[#FFFFFF]'>
              {quizQuestion.options[0]}
            </p>
            <div className={'flex shrink-0 items-center justify-center'}>
              {hasAnswer && quizQuestion.answer === 0 ? <Image src="/images/icon-correct.svg" className="inline" height="40" width="40" alt="HTML" /> : ""}
              {(userSelect !== quizQuestion.answer) && hasAnswer && userSelect === 0 ? <Image src="/images/icon-error.svg" className="inline" height="40" width="40" alt="HTML" /> : ""}
            </div>
          </button>
          <button disabled={hasAnswer} onClick={() => handleUserSelect(1)} className={`
            ${(userSelect !== quizQuestion.answer) && hasAnswer && userSelect === 1 ? "ring ring-[#EE5454] " : ""} 
            ${(userSelect === quizQuestion.answer) && hasAnswer && quizQuestion.answer === 1 ? "ring ring-green-600 " : ""}  group text-left cursor-pointer px-[20px] w-full mb-[24px] h-[92px] flex items-center justify-between bg-white dark:bg-[#3B4D66] align-middle rounded-[24px] text-[28px] focus:outline-none focus:ring ` + getIconInfo().ringColor}>
            <div className={'flex shrink-0 h-[56px] w-[56px] rounded-[8px] items-center justify-center bg-[#F4F6FA] text-[#626C7F] ' +
              (!hasAnswer ? getIconInfo().focusText + ' ' + getIconInfo().focusBg + ' ' + getIconInfo().activeBg + ' ' + getIconInfo().activeText + ' ' + getIconInfo().hoverText + ' ' + getIconInfo().hoverBg : '')
            }>
              B
            </div>
            <p className='inline align-middle w-full p-[32px] dark:text-[#FFFFFF]'>
              {quizQuestion.options[1]}
            </p>
            <div className={'flex shrink-0 items-center justify-center'}>
              {hasAnswer && quizQuestion.answer === 1 ? <Image src="/images/icon-correct.svg" className="inline" height="40" width="40" alt="HTML" /> : ""}
              {(userSelect !== quizQuestion.answer) && hasAnswer && userSelect === 1 ? <Image src="/images/icon-error.svg" className="inline" height="40" width="40" alt="HTML" /> : ""}
            </div>
          </button>
          <button disabled={hasAnswer} onClick={() => handleUserSelect(2)} className={`
            ${(userSelect !== quizQuestion.answer) && hasAnswer && userSelect === 2 ? "ring ring-[#EE5454] " : ""} 
            ${(userSelect === quizQuestion.answer) && hasAnswer && quizQuestion.answer === 2 ? "ring ring-green-600 " : ""} group text-left cursor-pointer px-[20px] w-full mb-[24px] h-[92px] flex items-center justify-between bg-white dark:bg-[#3B4D66] align-middle rounded-[24px] text-[28px] focus:outline-none focus:ring ` + getIconInfo().ringColor}>
            <div className={'flex shrink-0 h-[56px] w-[56px] rounded-[8px] items-center justify-center bg-[#F4F6FA] text-[#626C7F] ' +
              (!hasAnswer ? getIconInfo().focusText + ' ' + getIconInfo().focusBg + ' ' + getIconInfo().activeBg + ' ' + getIconInfo().activeText + ' ' + getIconInfo().hoverText + ' ' + getIconInfo().hoverBg : '')
            }>
              C
            </div>
            <p className='inline align-middle w-full p-[32px] dark:text-[#FFFFFF]'>
              {quizQuestion.options[2]}
            </p>
            <div className={'flex shrink-0 items-center justify-center'}>
              {hasAnswer && quizQuestion.answer === 2 ? <Image src="/images/icon-correct.svg" className="inline" height="40" width="40" alt="HTML" /> : ""}
              {(userSelect !== quizQuestion.answer) && hasAnswer && userSelect === 2 ? <Image src="/images/icon-error.svg" className="inline" height="40" width="40" alt="HTML" /> : ""}
            </div>
          </button>
          <button disabled={hasAnswer} onClick={() => handleUserSelect(3)} className={`
            ${(userSelect !== quizQuestion.answer) && hasAnswer && userSelect === 3 ? "ring ring-[#EE5454] " : ""} 
            ${(userSelect === quizQuestion.answer) && hasAnswer && quizQuestion.answer === 3 ? "ring ring-green-600 " : ""} group text-left cursor-pointer px-[20px] w-full mb-[24px] h-[92px] flex items-center justify-between bg-white dark:bg-[#3B4D66] align-middle rounded-[24px] text-[28px] focus:outline-none focus:ring ` + getIconInfo().ringColor}>
            <div className={'flex shrink-0 h-[56px] w-[56px] rounded-[8px] items-center justify-center bg-[#F4F6FA] text-[#626C7F] ' +
              (!hasAnswer ? getIconInfo().focusText + ' ' + getIconInfo().focusBg + ' ' + getIconInfo().activeBg + ' ' + getIconInfo().activeText + ' ' + getIconInfo().hoverText + ' ' + getIconInfo().hoverBg : '')
            }>
              D
            </div>
            <p className='inline w-full align-middle p-[32px] dark:text-[#FFFFFF]'>
              {quizQuestion.options[3]}
            </p>
            <div className={'flex shrink-0 items-center justify-center'}>

              {hasAnswer && quizQuestion.answer === 3 ? <Image src="/images/icon-correct.svg" className="inline" height="40" width="40" alt="HTML" /> : ""}
              {(userSelect !== quizQuestion.answer) && hasAnswer && userSelect === 3 ? <Image src="/images/icon-error.svg" className="inline" height="40" width="40" alt="HTML" /> : ""}
            </div>
          </button>
          {hasAnswer ?
            <Link href={getNextPageNum()}>
              <button onClick={handleSubmitAnswer} className={'px-[20px] mb-[24px] h-[92px] w-full shadow flex items-center align-middle rounded-[24px] text-[28px] ' + getIconInfo().activeBgBtn + ' ' + getIconInfo().bgBtn}>
                <p className='inline align-middle text-center text-white w-full p-[32px]'>
                  Next Question
                </p>
              </button>
            </Link>
            :
            <button onClick={handleSubmitAnswer} className={'px-[20px] mb-[24px] h-[92px] w-full shadow flex items-center align-middle rounded-[24px] text-[28px] ' + getIconInfo().activeBgBtn + ' ' + getIconInfo().bgBtn}>
              <p className='inline align-middle text-center text-white w-full p-[32px]'>
                Submit Answer
              </p>
            </button>}
        </div>
      </div >
    </main >

  )
}



