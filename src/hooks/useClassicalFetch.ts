import { useState, useEffect } from 'react'
import { useStateContext } from '../context/StateProvider'
import axios from 'axios'

export const useClassicalFetch = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const { tasks, setTasks } = useStateContext();

  useEffect(() => {
    const fetchTasks = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios('http://127.0.0.1:8000/api/tasks/')
        setTasks(result.data)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTasks()
  }, [setTasks])

  return { tasks, isLoading, isError }
}