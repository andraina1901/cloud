import { request } from "helpers/axios_helper";


export async function getStatVente () {
    try {
      const result = await request("GET", "/stat/venteWeek", {});
      return result.data.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function getStatUser () {
    try {
      const result = await request("GET", "/stat/nbUsersWeek", {});
      return result.data.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function getStatAnnonce () {
    try {
      const result = await request("GET", "/stat/nbAnnonceWeek", {});
      return result.data.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function getStatCommission () {
    try {
      const result = await request("GET", "/stat/CommissionWeek", {});
      return result.data.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function getStatBestVente () {
    try {
      const result = await request("GET", "/stat/bestvente", {});
      return result.data.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function getStatPrixComm () {
    try {
      const result = await request("GET", "/stat/stat_PrixCommission", {});
      return result.data.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};

export async function getStatUserAnn() {
    try {
      const result = await request("GET", "/stat/Stat_AnnonceUser", {});
      return result.data.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error; 
    }
};