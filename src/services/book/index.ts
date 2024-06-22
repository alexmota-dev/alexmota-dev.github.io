import { api } from "../../api";
import { DTOCreateBook, DTOUpdateBook } from "../dtos";

export const findById = async (id: string) => {
  try {
    const response = await api.get(`/book/${id}`);
    console.log(response)
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const findAll = async () => {
    try {
      const response = await api.get("/Book");
      console.log(response)
      return response.data;
    } catch (error) {
      throw error;
    }
  }

export const create = async (book: DTOCreateBook) => {
  try {
    console.log(book)
    const response = await api.post("/book", book);
    console.log(response)
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const update = async (id: string, book: DTOUpdateBook) => { 
  try {
    const response = await api.put(`book/${id}`, book);
    console.log(response)
  } catch (error) {
    throw error;
  }
}

export const remove = async(id: string) =>{
  try {
    const response = await api.delete(`/book/${id}`);
    console.log(response)
    return response;
  } catch (error) {
    throw error;
  }
}



