import React from "react";
import classes from "./../News/News.module.css";
import {NewsList} from "./newsList/NewsList";
import {NewsType} from "../../redux/state";

type NewsListProps = {
    newsList: Array<NewsType>
}

export const News = (props: NewsListProps) => {
    let newsItem = props.newsList.map((el, index)=>{
        return (
            <NewsList key={index} id={el.id} img={el.img} text={el.text}/>
        )
    })
    return (
        <div className={classes.body}>
            {newsItem}
        </div>
    )
}