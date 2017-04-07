const replaceCounter = (counters, index, newCounters) => [
  ...counters.slice(0, index),
  ...newCounters,
  ...counters.slice(index + 1),
]

const addToCounter = (counters, index, amount) =>
  replaceCounter(counters, index, [counters[index] + amount])

export default (counters = [], action) => {

  if (action.type === 'ADD_COUNTER')
    return counters.concat([0])

  if (action.type === 'REMOVE_COUNTER')
    return replaceCounter(counters, action.index, [])

  if (action.type === 'INCREMENT')
    return addToCounter(counters, action.index, 1)

  if (action.type === 'DECREMENT')
    return addToCounter(counters, action.index, -1)

  return counters
}