import Section from "./Section";

export default function SectionWidth({ first = false, classNameParent = "", className = "", children }) {
	return (
		<Section first={ first } className={ classNameParent }>
			<div className={className + " " + "flex md:max-w-[75vw] md:mx-40"}>
				{ children }
			</div>
		</Section>
	)
}