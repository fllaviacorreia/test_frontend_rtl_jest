import { create } from "zustand";

const useStore = create((set) => ({
      isSignedIn: false,
      id: "",
      type: "",
      email:"",
      password:"",

      login: (id, type, email, password) =>
        set(() => ({isSignedIn:true, id, type, email, password})),

      logout: () =>
        set(() => ({isSignedIn:false, id:"", type:"", email:"", password:""})),
    })  
);

export default useStore;
