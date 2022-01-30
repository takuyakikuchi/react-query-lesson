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
import { MainContext } from './components/MainContext'
import { MainRTKit } from './components/MainRTKit'

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
              <Route path='/main-context' element={<MainContext />} />
              <Route path='/main-rtkit' element={<MainRTKit />} />
            </Routes>
          </Layout>
        </StateProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
