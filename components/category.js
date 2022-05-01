import Item from './item'

export default function Category({
    category,
    index
}) {
    let items = category.items;

    let style = index == 0 ? {} : { marginTop: '20px'}
    return (
        <div className="container" style={style}>
            <h2>{category.title}</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}
