
type ImagesProps = {
    src: string;
    alt: string;

}

export function Images(props: ImagesProps){
    return <>
        <img src={props.src} alt={props.alt}/>
    </>
}