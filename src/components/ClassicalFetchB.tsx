import { VFC } from 'react'
import { useStateContext } from '../context/StateProvider'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'

export const ClassicalFetchB: VFC = () => {
  const navigate = useNavigate()
  const { tasks } = useStateContext()

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-center font-bold mb-3'>
        ClassicalFetchB
      </p>

      {tasks?.map((task) => <p key={task.id}>{task.title}</p>)}

      <ChevronDoubleRightIcon
        onClick={() => navigate('/fetch-a')}
        className='h-5 w-5 mt-2 text-blue-500 cursor-pointer' />
      <p className='text-sm'>fetch A</p>
    </div>
  )
}
