import { request } from "../helpers/axios_helper";

import { getAuthToken } from '../helpers/axios_helper';

export async function getUser() {
    try {
      const result = await request("POST", "/auth/getUser");
      const valiny = {
        columns: [
          { name: "id" },
          { name: "username" },
          { name: "email" }
        ],
        rows: result.data
      };
      return valiny;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};