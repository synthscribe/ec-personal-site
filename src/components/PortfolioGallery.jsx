import Image from 'next/image'
import cem from '@/images/photos/cem.jpg'
import mon from '@/images/photos/mon.jpg'
import od from '@/images/photos/od.jpg'
import sta from '@/images/photos/sta.jpg'
import crt from '@/images/photos/crt.png'
import lok from '@/images/photos/lok.jpg'

const galleryImages = [
    { src: mon, alt: 'Forgotten Monestary', link: 'https://synthscribe.artstation.com/projects/GvgQea'},
    { src: cem, alt: 'Sanctum in Shadow', link: 'https://synthscribe.artstation.com/projects/eRmKJw'},
    { src: od, alt: 'Odysseus Returns', link: 'https://synthscribe.artstation.com/projects/1NZEWZ'},
    { src: sta, alt: 'The Starman', link: 'https://synthscribe.artstation.com/projects/AZX2em'},
    { src: crt, alt: 'CRT Dreams', link: 'https://synthscribe.artstation.com/projects/vbyYV3'},
    { src: lok, alt: 'Look Up', link: 'https://synthscribe.artstation.com/projects/L4xr65'},
]

export default function PortfolioGallery() {
    return (
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
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
                            className="w-full max-w-xs mx-auto h-full object-cover rounded-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a
                                href={image.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-lg font-bold hover:text-teal-500 transition-colors duration-300"
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