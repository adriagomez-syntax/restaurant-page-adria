export default function ImgHighlight({ classNameParent = "", className = "", alt = "", src = "" }) {
	return (
		<div className={ classNameParent + " " + "overflow-hidden rounded-xs" }>
			<img src={ src } alt={ alt } className={ className + " " + "object-cover hover:opacity-90 hover:scale-105 transition duration-200" } />
		</div>
	)
}