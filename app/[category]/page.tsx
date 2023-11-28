'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'


export default function Page({ params }: { params: { category: string } }) {
  const router = useRouter()

  // if (params.category !== 'accessibility') {
  router.push('/' + params.category + '/1')
  // }

  return (
    <div></div>
  )
}



