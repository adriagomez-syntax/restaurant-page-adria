import { pageList } from '../../../../assets/data'
import TitleHighlight from '../../utils/TitleHighlight'

export default function FooterNavigation() {
    return (
        <div className="max-w-xs">
            <TitleHighlight className="py-4">Navigation</TitleHighlight>
            <ul className="flex flex-col gap-2 text-stone font-light">
                {pageList.map((page) => (
                    <li key={page.href}>
                        <a href={page.href} className="hover:text-amber">
                            {page.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}