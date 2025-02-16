import Image from 'next/image'

const galleryImages = [
    { src: 'src/images/photos/mon.jpg', alt: 'Project 1' },
    { src: 'src/images/photos/cem.jpg', alt: 'Project 2' }
]

export default function PortfolioGallery() {
    return (
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Portfolio Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={500}
                            height={300}
                            className="object-cover w-full h-60 transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-lg font-semibold">{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}