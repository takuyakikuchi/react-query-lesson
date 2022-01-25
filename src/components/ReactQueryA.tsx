import { VFC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQueryTasks } from '../hooks/useQueryTasks'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ReactQueryA: VFC = () => {
  const navigate = useNavigate()
  const { data, status } = useQueryTasks()

  console.log('rendered ReactQueryA')

  if (status === 'error') return <div>Error</div>
  if (status === 'loading') return <div>Loading...</div>
  return (
    <>
      <p className='font-bold mb-3'>
        ReactQueryA
      </p>

      {data?.map((task) => <p key={task.id}>{task.title}</p>)}

      <ChevronDoubleRightIcon
        onClick={() => navigate('/query-b')}
        className='h-5 w-5 mt-2 text-blue-500 cursor-pointer' />
      <p className='text-sm'>react query B</p>
    </>
  )
}
