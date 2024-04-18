import { Access, CollectionConfig } from "payload/types";
export const User: Access = ({ req: { user } }) => {
  if (user.role === "admin") return true;

  return {
    id: {
      equals: user.id,
    },
  };
};
export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify:{
      generateEmailHTML:({req,token,user})=>{
        return(
          `<h1>Hello thanks for signing up from email ${user.email}. Click here to verify your email ${process.env.NEXT_PUBLIC_SERVER_URL}/verify?token=${token}  </h1>`
        )
      }
    }
  },
  
  access: {
    create: () => true,
    read: () => true,
    
  },
  fields: [
    {
      name: "role",
      type: "select",
      options: [
        {
          label: "User",
          value: "user",
        },
        {
          label: "Admin",
          value: "admin",
        },
      ],
    },
    {
      name: "userName",
      type: "text",
      required: true
    },
  ],
};
