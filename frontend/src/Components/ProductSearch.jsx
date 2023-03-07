import React from 'react'

function ProductSearch(props) {
    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={e => { props.onChange(e.target.value) }} placeholder="Search" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
            </div>
        </div>
    )
}

export { ProductSearch }