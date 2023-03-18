function CategoryCard(props) {
    // console.log(props)
    return (
        <>
            <li className="list-group-item">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id={props.name} onChange={e => props.handleChange(props.id, e)}/>
                    <label className="form-check-label" htmlFor={props.name} >
                        {props.name}
                    </label>
                </div>
            </li>
        </>
    )

}

export { CategoryCard };