export default function NavbarLink({ page }) {
    return (
        <a href={`#${page.toLowerCase()}`}>{page}</a>
    )
}