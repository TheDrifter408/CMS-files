import { isAdmin } from '../access/isAdmin'
import { isAdminOrSelf } from '../access/isAdminOrSelf'
import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: isAdmin,
    update: isAdminOrSelf,
    read: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name:"Name",
      type:"text"
    },
    {
      name:"roles",
      type:"select",
      hasMany:true,
      saveToJWT:true,
      options:[
        {
          label:"Administrator",
          value:"admin"
        },
        {
          label:"Editor",
          value:"editor"
        }
      ]
    }
  ],
}

export default Users
