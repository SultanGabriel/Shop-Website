import { CategoryCard } from "./CategoryCard"

function CategoriesList(props) {
    return (

        <div className="card">
            <div className="card-header">
                Filter
            </div>
            <ul className="list-group list-group-flush">
                {
                    props.items.map(e => {
                        return (
                            <CategoryCard key={e.id}
                                id={e.id}
                                name={e.name}
                                handleChange={i=>{console.log(i)}}
                            />
                        )
                    })
                }
            </ul>
        </div>

    )
}

// TODO [ ] Implement filter

export { CategoriesList }