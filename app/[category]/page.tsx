'use client'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { category: string } }) {
  const router = useRouter()

  router.push('/' + params.category + '/1')

  return (
    <div></div>
  )
}



