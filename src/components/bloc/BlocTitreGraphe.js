function BlocTitreGraphe({img, title}){
    return(
        <div className='flex justify-center items-center text-white max-[1023px]:hidden mt-2'>
            {img.map((imageUrl, index) => (
                <img key={index} className="w-12 h-12 mr-2" src={imageUrl} alt={`${index}`} />
            ))}
            <span className="font-title text-lg" dangerouslySetInnerHTML={{ __html: title }}/> 
        </div>
    )
}

export default BlocTitreGraphe