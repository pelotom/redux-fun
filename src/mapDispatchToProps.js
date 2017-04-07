const wrap = (() => {
  let counter = 0
  return cb => {
    const counterAtStart = ++counter
    return (...args) => {
      if (counter === counterAtStart)
        cb(...args)
      else
        console.warn('interrupted async')
    }
  }
})()

export default function (dispatch) {

  const delayed = (delay, action) => () => setTimeout(
    wrap(() => dispatch(action)),
    delay
  )

  return {
    addCounter: delayed(500, {
      type: 'ADD_COUNTER',
    }),

    removeCounter: index => delayed(500, {
      type: 'REMOVE_COUNTER',
      index,
    }),

    increment: index => delayed(2000, {
      type: 'INCREMENT',
      index,
    }),

    decrement: index => delayed(1000, {
      type: 'DECREMENT',
      index,
    }),
  }
}