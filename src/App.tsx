import { VFC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { ReactQueryA } from './components/ReactQueryA'
import { ReactQueryB } from './components/ReactQueryB'
import { Layout } from './components/Layout'
import { StateProvider } from './context/StateProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // https://react-query.tanstack.com/reference/useQuery#_top
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
})

const App: VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Routes>
              <Route path='/' element={<ReactQueryA />} />
              <Route path='/query-b' element={<ReactQueryB />} />
              <Route path='/fetch-a' element={<ClassicalFetchA />} />
              <Route path='/fetch-b' element={<ClassicalFetchB />} />
            </Routes>
          </Layout>
        </StateProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
