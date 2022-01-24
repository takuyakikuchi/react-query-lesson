import { VFC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useClassicalFetch } from '../hooks/useClassicalFetch'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ClassicalFetchA: VFC = () => {
  const navigate = useNavigate()
  const { tasks, isLoading, isError } = useClassicalFetch()

  console.log('rendered ClassicalFetchA')

  if (isError) return <div>Error</div>
  if (isLoading) return <div>Loading...</div>
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-center font-bold mb-3'>
        ClassicalFetchA
      </p>

      {tasks?.map((task) => <p key={task.id}>{task.title}</p>)}

      <ChevronDoubleRightIcon
        onClick={() => navigate('/fetch-b')}
        className='h-5 w-5 mt-2 text-blue-500 cursor-pointer' />
      <p className='text-sm'>fetch B</p>
    </div>
  )
}
