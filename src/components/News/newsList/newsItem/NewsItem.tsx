import {useParams} from "react-router-dom";


export const NewsItem = () => {
    const {id} = useParams<{id: string}>()

    console.log(id)
    return (
        <div>
            test
        </div>
    )
}