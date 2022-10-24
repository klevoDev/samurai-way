import React from "react";
import classes from "./../News/News.module.css";
import {NewsItem} from "./newsItem/NewsItem";
import {NewsType} from "../../redux/state";

type NewsItemProps = {
    newsItem: Array<NewsType>
}

export const News = (props: NewsItemProps) => {
    let newsItem = props.newsItem.map((el, index)=>{
        return (
            <NewsItem key={index} id={el.id} img={el.img} text={el.text}/>
        )
    })
    return (
        <div className={classes.body}>
            {newsItem}
        </div>
    )
}