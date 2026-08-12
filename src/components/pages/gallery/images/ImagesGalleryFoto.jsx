import ImgHighlight from "../../../common/utils/ImgHighlight"

export default function ImagesGalleryFoto({ index }) {
	return (
		<li key={ index }>
			<ImgHighlight src={"images/gallery/Foto" + index + ".jpg"} alt={"Foto " + index} />
		</li>
	)
}