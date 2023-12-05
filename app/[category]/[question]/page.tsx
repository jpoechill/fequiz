'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import data from '../../../api/data.json';
import { useEffect, useState } from "react";
import DarkModeToggle from '../../components/DarkModeToggle'
import useScore from '../../useScore'

export default function Page({ params }: { params: { category: string, question: string } }) {
  const router = useRouter()
  const [hasAnswer, setHasAnswer] = useState(false);
  const [userSelect, setUserSelect] = useState(-1);
  const [showErr, setshowErr] = useState(false);
  const [score, setScore] = useScore();

  function handleSubmitAnswer() {
    if (userSelect !== -1) {
      setHasAnswer(true);
      setshowErr(false)
    } else {
      setshowErr(true)
    }
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
      return '/' + params.category + '/' + 'score'
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
    <main className="flex flex-col items-center justify-between pt-[15px] lg:pt-[80px] px-[25px] lg:w-[1160px] m-auto">
      <div className='grid w-full grid-cols-2'>
        <Link href="/">
          <div className='text-[28px] mb-[50px] flex items-center font-medium text-[#313E51] dark:text-[#FFFFFF]'>
            <div className={'h-[56px] w-[56px] rounded-[8px] flex flex-row mr-[24px] items-center justify-center ' + getIconInfo().color}>
              <Image src={getIconInfo().path} className="inline" height="40" width="40" alt="HTML" />
            </div>
            <div className='inline'>{quiz!.title}</div>
          </div>
        </Link>
        <DarkModeToggle></DarkModeToggle>
      </div>

      <div className='grid w-full lg:grid-cols-2'>
        <div className='text-left lg:w-[465px]'>
          <div className="italic mb-[20px] lg:mb-[40px] grey-navy dark:text-[#FFFFFF]">
            Question {Number(params.question) + 1} of 10.
          </div>
          <p className="font-medium text-[20px] lg:text-[36px] mb-[20px] lg:mb-[40px] dark:text-[#FFFFFF]">
            {quizQuestion.question}
          </p>
        </div>
        <div className="">
          {/* {quizQuestion.answer} */}
          <button disabled={hasAnswer} onClick={() => handleUserSelect(0)} className={`
            ${(userSelect !== quizQuestion.answer) && hasAnswer && userSelect === 0 ? "ring ring-[#EE5454] " : ""} 
            ${(userSelect === quizQuestion.answer) && hasAnswer && quizQuestion.answer === 0 ? "ring ring-[#26D782] " : ""} group cursor-pointer px-[20px] w-full mb-[24px] h-[92px] flex items-center justify-between bg-white dark:bg-[#3B4D66] align-middle rounded-[24px] text-[28px] focus:outline-none focus:ring ` + getIconInfo().ringColor}>
            <div className={'flex shrink-0 h-[56px] w-[56px] rounded-[8px] items-center justify-center bg-[#F4F6FA] text-[#626C7F] ' +
              (!hasAnswer ? getIconInfo().focusText + ' ' + getIconInfo().focusBg + ' ' + getIconInfo().activeBg + ' ' + getIconInfo().activeText + ' ' + getIconInfo().hoverText + ' ' + getIconInfo().hoverBg : '')
            }>
              A
            </div>
            <p className='text-[20px] lg:text-[28px] inline text-left w-full align-middle p-[32px] dark:text-[#FFFFFF]'>
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
            <p className='text-[20px] lg:text-[28px] inline align-middle w-full p-[32px] dark:text-[#FFFFFF]'>
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
            <p className='text-[20px] lg:text-[28px] inline align-middle w-full p-[32px] dark:text-[#FFFFFF]'>
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
            <p className='text-[20px] lg:text-[28px] inline w-full align-middle p-[32px] dark:text-[#FFFFFF]'>
              {quizQuestion.options[3]}
            </p>
            <div className={'flex shrink-0 items-center justify-center'}>
              {hasAnswer && quizQuestion.answer === 3 ? <Image src="/images/icon-correct.svg" className="inline" height="40" width="40" alt="HTML" /> : ""}
              {(userSelect !== quizQuestion.answer) && hasAnswer && userSelect === 3 ? <Image src="/images/icon-error.svg" className="inline" height="40" width="40" alt="HTML" /> : ""}
            </div>
          </button>
          {
            hasAnswer ?
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
              </button>
          }
          {showErr ?
            <div className='text-[#EE5454] w-full text-[24px] text-center'>
              <Image src="/images/icon-error.svg" className="inline" height="40" width="40" alt="HTML" /> Please select an answer
            </div>
            :
            ""
          }
        </div>
      </div >
    </main >

  )
}



