import axios from "axios";


export default {
  getEmployees: function() {
   return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
  getOneEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=1&nat=us");
   }
};
