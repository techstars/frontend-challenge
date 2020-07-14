// You do not need to modify this helper function.
// Do look it over, but you should be able to complete
// the challenge without modifying it.

export default body => new Promise(resolve => {
  setTimeout(
    () => resolve(
      { status: 200, data: JSON.stringify({ ...body }) },
  ), 200)
}) 
