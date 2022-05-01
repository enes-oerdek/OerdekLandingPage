import Category from './category'


export default function Categories({
    categories
}) {
    //console.log(categories)
    return (
        <div className="album py-5 bg-light">
            {categories.map((category, index) => (
                <Category key={category.title} index={index} category={category} />
            ))}
        </div>
    )
}
