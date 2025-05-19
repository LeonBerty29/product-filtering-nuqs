"use server"

import { Product } from "@/types";
import { unstable_cache } from "next/cache";

interface GetProductParams {
    search?: string;
    perPage?: number;
    offset?: number;
}




export const getProducts = unstable_cache(
    async (
        {
            search,
            perPage,
            offset
        }: GetProductParams
    ): Promise<Product[]> => {
        console.log("CALLEDDDDDDDD")
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${search}&offset=${offset}&limit=${perPage}`);
        const data = await res.json();
        return data;
    },
    ["products"],
    {
        tags: ["products"]
    }
)