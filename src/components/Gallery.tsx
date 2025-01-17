import GalleryItem from './GalleryItem'

function Gallery(props:any){

    const display = props.data.map((item:any, index:number) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
