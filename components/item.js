export default function item({
    item
}) {

    let cover;
    if(item.cover != null) {
        cover = <img src={item.cover} className="card-img-top" alt="Enes Historien Thumbnail" />
    } else {
        cover = "";
    }
    let description;
    if(item.description != null) {
        description = <p className="card-text">{item.description}</p>;
    } else {
        description = "";
    }

    return (
        <div className="col">
            <div className="card shadow-sm">
                {cover}
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    {description}
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            {item.links.map((link, index) => (
                                <a key={index} href={link.url} type="button" className="btn btn-sm btn-outline-secondary">{link.title}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
