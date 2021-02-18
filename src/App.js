import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState(null)
  const fetchURL = "https://jsonplaceholder.typicode.com"
  const getData = () =>
    fetch(`${fetchURL}/posts`)
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data))
  }, [])

  return (
    <div className="">
      {data?.map((item) => 
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
       <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
           <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">{item.title}</li>
        </ul>
        </div>
      )}
    </div>
  )
}

export default App;