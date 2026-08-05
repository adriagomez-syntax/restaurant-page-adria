import { pageList } from '../assets/data'

export default function FooterNavigation() {
    return (
        <div>
            <h3>Navigation</h3>
            <ul>
                {pageList.map((page) => (
                    <li key={page}>
                        <a href={`#${page.toLowerCase()}`}>{page}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}