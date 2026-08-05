export default function MediaButton({ media, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={media} alt={media} />
        </a>
    )
}