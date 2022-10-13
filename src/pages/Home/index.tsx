import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { decrement, increment } from 'redux/reducers/counterReducer'
import { useMutation, useQuery } from '@tanstack/react-query'
import { queryRepo } from 'reactQuery/queries/example'
import { addNewTodo } from 'reactQuery/mutations/example'

type Props = {}

const HomePage = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  // example query data
  const { isLoading, data } = useQuery(['repoData'], queryRepo)
  // example mutate data
  const mutation = useMutation(addNewTodo)

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <div>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
          <strong>🍴 {data.forks_count}</strong>
        </div>
      )}
      <button
        onClick={() => {
          mutation.mutate({ id: new Date(), title: 'Do Laundry' })
        }}
      >
        Create Todo
      </button>
    </div>
  )
}

export default HomePage
