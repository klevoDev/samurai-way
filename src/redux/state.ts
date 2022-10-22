export type MessageType ={
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
}

let state: RootStateType = {
    profile: {
        posts: [
            {id: 1, message: 'Hi :)', likesCount: 12},
            {id: 2, message: 'How are you?', likesCount: 15},
        ],
    },
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

export default state