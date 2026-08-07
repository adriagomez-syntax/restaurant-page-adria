import { pageList } from '../../../../assets/data'

export default function FooterNavigation() {
    return (
        <div className="max-w-xs">
            <h3 className="text-amber tracking-widest uppercase font-light font-mono py-4">Navigation</h3>
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