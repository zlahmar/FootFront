function BlocTitreGraphe({img, title}){
    return(
        <div className='flex justify-center text-white pb-3 pt-3 max-[1023px]:hidden'>
            {img.map((imageUrl, index) => (
                <img key={index} className="w-12 h-12 mr-3" src={imageUrl} alt={`Image ${index}`} />
            ))}
            <span className="font-title text-lg" dangerouslySetInnerHTML={{ __html: title }}/> 
        </div>
    )
}

export default BlocTitreGraphe