import { pageList } from '../../../../assets/data'
import TitleHighlight from '../../utils/TitleHighlight'
import '../../utils/css/LinkAnimation.css'

export default function FooterNavigation() {
    return (
        <div className="max-w-xs">
            <TitleHighlight className="py-4">Navigation</TitleHighlight>
            <ul className="flex flex-col gap-2 text-text font-light">
                {pageList.map((page) => (
                    <li key={page.href} className="LinkAnimation">
                        <a href={page.href} className="hover:text-secondary">
                            {page.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}