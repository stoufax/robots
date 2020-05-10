import React from 'react'

const Card = ({ name, email, id }) => {
  return (
    <div className="rounded shadow-lg w-full md:w-1/3 lg:w-1/4 xl:w-1/4 m-4 transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-105">
      <img className="w-full bg-gray-400" src={`https://robohash.org/${id}?200x200`} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{email}</p>
      </div>
    </div>
  )
}

export default Card
