type EntryProps = {
    title: string,
    entry: string
}


export function BlogEntries(props: EntryProps){
    return <>
    <h2>{props.title}</h2>
    <p>{props.entry}</p>


    </>
}