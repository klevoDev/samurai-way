import {stringify} from "querystring";

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type NewsType = {
    id: number
    img: string
    text: string
}

type ProfileType = {
    posts: Array<PostType>
}

type DialogsType = {
    dialog: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profile: ProfileType
    dialogs: DialogsType
    news: Array<NewsType>
}

export let state: RootStateType = {
    profile: {
        posts: [
            {id: 1, message: 'Hi :)', likesCount: 12},
            {id: 2, message: 'How are you?', likesCount: 15},
        ],
    },
    news: [
        {
            id: 1,
            img: "https://www.dvaveka.ru/wa-data/public/shop/products/08/14/11408/images/84628/84628.1000x0.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta eligendi exercitationem optio, ratione sapiente voluptatum? Dolores ducimus exercitationem fugit iure laudantium, nemo numquam quidem quos ratione similique sunt totam."
        },
        {
            id: 2,
            img: "https://i.pinimg.com/originals/ae/b7/7f/aeb77f73f0a7d9d1ff0d99f4e9edb3e2.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta eligendi exercitationem optio, ratione sapiente voluptatum? Dolores ducimus exercitationem fugit iure laudantium, nemo numquam quidem quos ratione similique sunt totam."
        },
        {
            id: 3,
            img: "https://snob.ru/i/indoc/b9/blog_entry_301287.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta eligendi exercitationem optio, ratione sapiente voluptatum? Dolores ducimus exercitationem fugit iure laudantium, nemo numquam quidem quos ratione similique sunt totam."
        },
        {
            id: 4,
            img: "https://i.pinimg.com/736x/d8/91/fb/d891fbf3015f8416f0ce6dae1e708974.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta eligendi exercitationem optio, ratione sapiente voluptatum? Dolores ducimus exercitationem fugit iure laudantium, nemo numquam quidem quos ratione similique sunt totam."
        },
    ],
    dialogs: {
        dialog: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'How are you?'},
            {id: 3, name: 'Max'},
            {id: 4, name: 'Polina'},
            {id: 5, name: 'Volodya'},
            {id: 6, name: 'Inna'},
        ],
        messages: [
            {id: 1, message: 'Hi :)'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Was the lesson great yesterday, did you do your homework?'},
        ],
    },
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    }
    state.profile.posts.push()
}
