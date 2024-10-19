import { Access } from "payload/config";
import { User } from "payload/generated-types";

export const isAdminOrSelf: Access<any, User> = ({ req : { user } }) => {
    //needs to be logged on 
    if(user) {
        if(user.roles.includes('admin')){
            return true;
        } else {
            return {
                id: {
                    equals: user.id
                }
            }
        }
    }
    return false;
    
}