import {
    FOOTER_QUOTE,
    LABEL_BACK_TO_TOP
} from '../lib/constants'


export default function Footer({
    footer
}) {
    return (
        <div className="container">
            <div className="float-end mb-1">
                <a href="#">{LABEL_BACK_TO_TOP}</a>
            </div>
            <div className="mb-1">{FOOTER_QUOTE}</div>
            <div className="mb-0 linklist">
                <ul className="linklist">
                    {footer.map((link, index) => (
                        <li key={index}><a href={link.url}>{link.title}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
