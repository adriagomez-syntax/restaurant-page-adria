import Main from "../components/common/utils/Main";
import HeroGallerySection from "../components/pages/gallery/hero/HeroGallerySection";
import ImagesGallerySection from "../components/pages/gallery/images/ImagesGallerySection";

export default function GalleryPage() {
	return (
		<Main>
			<HeroGallerySection />
			<ImagesGallerySection />
		</Main>
	)
}