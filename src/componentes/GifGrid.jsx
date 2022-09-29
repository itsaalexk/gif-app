

export const GifGrid = ({category}) => {
        const getGifs = async()=>{
            const url = `https://api.giphy.com/v1/gifs/search?api_key=43157MLprdebxZkaFXEUmaEbIZa0j0vZ&q=${category}&limit=20`;
            const result = await fetch(url);
            const { data} = await result.json();
            console.log(data)
        }

        getGifs()


  return (
    <>
        <h3>{category}</h3>
        <p>Hola Mundo</p>
    </>
  )
}
