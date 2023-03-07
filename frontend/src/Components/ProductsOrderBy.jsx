import React from 'react'

function ProductsOrderBy() {
    return (
        <div>
            <select className="form-select" aria-label="Sort By">
                <option selected>Sort By</option>
                <option value="1">Price ↑ </option>
                <option value="2">Price ↓</option>
                <option value="3">Manufacturer</option>
            </select>
        </div>
    )
}

export { ProductsOrderBy }
