import classes from "./NewsItem.module.css";

type NewsItemProps = {
    id: number
    img: string
    text: string
}

export const NewsItem = (props: NewsItemProps) => {
    return (
        <div className={classes.column}>
            <div>
                <img className={classes.img} src={props.img} alt=""/>
            </div>
            <p className={classes.text}>
                {props.text}
            </p>
        </div>
    )
}