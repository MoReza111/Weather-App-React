import React, { useState } from 'react'

const Search = ({ getWeather }) => {

    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        getWeather(text)
        setText('')
    }

    const onChange = (e) => setText(e.target.value)

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter City Name" onChange={onChange} />
            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
    )
}

export default Search
