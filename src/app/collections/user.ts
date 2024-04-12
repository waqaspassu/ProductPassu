import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth:{
    verify:{
      generateEmailHTML:({token})=>{
        return `
        <h1>Verify your email waqas here</h1>
        <p>Click the link below to verify your email:</p>
        <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}">Verify</a>
        `
      }
    }
  },
  access:{
    read:()=>true,
    create:()=>true 
  },
  fields: [
    {
      name: "role",
      defaultValue:"user",
      required:true,
      admin:{
        condition:(req)=> true
      },
      type: "select",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    },
  ],
};