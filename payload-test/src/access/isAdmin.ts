import { Access, FieldAccess } from "payload/types";
import { User } from "payload/generated-types";

export const isAdmin:Access<any, User> = ({ req: { user } }) => {
    // Return true if role is admin or false
    return Boolean(user.roles.includes('admin'));
}
