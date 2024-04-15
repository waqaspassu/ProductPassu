import { Access, CollectionConfig } from "payload/types";
const adminsAndUser: Access = ({ req: { user } }) => {
  if (user.role === "admin") return true;

  return {
    id: {
      equals: user.id,
    },
  };
};
export const Users: CollectionConfig = {
  slug: "users",
  auth:true,
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    
  ],
};
