import ImagesGalleryFoto from "./ImagesGalleryFoto";

export default function ImagesGalleryList() {
	const nImg = 8;
	
	return (
		<ul className="gap-4 space-y-4 columns-2 md:columns-4">
			{Array.from({ length: nImg }, (_, index) => (
				<ImagesGalleryFoto key={ index } index={ index } />
			))}
		</ul>
	)
}