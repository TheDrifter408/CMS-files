import { CollectionConfig } from "payload/types";

export const Authors:CollectionConfig = {
    slug:'authors',
    auth:true,
    fields:[
        {
            name:'fullName',
            type:'text',
            label:'Full Name'
        },
        {
            name:"categories",
            label:"Categories",
            type:'select',
            saveToJWT:true,
            options:[
                {
                    label:"News",
                    value:'news'
                },
                {
                    label:"Opinion",
                    value:"opinion"
                }
            ]
        }
    ]
}