import Image from 'next/image'
import cem from '@/images/photos/cem.jpg'
import mon from '@/images/photos/mon.jpg'
import od from '@/images/photos/od.JPEG'

const galleryImages = [
    { src: mon, alt: 'Forgotten Monestary', link: 'https://synthscribe.artstation.com/projects/GvgQea'},
    { src: cem, alt: 'Sanctum in Shadow', link: 'https://synthscribe.artstation.com/projects/eRmKJw'},
    { src: od, alt: 'Odysseus Returns', link: 'https://synthscribe.artstation.com/projects/1NZEWZ'},
]

export default function PortfolioGallery() {
    return (
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            //sizes="(min-width: 800px)"
                            aspectRatio={16 / 9}
                            //width={500}
                            //height={300}
                            //className="object-cover w-full h-60 transition-transform duration-300 transform group-hover:scale-110"
                            className="object-cover w-full h-auto transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a
                                href={image.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-lg font-bold hover:text-blue-300 transition-colors duration-300"
                            >
                                {image.alt}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}