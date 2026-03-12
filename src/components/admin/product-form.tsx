"use client";

import { useState } from "react";
import { Product } from "@/types/product"
import { createClient } from "@/lib/supabase/client";


type Props = {
  product?: Product
  onSuccess: () => void
}

export function ProductForm({ product, onSuccess }: Props){

  const supabase = createClient()

const [stock,setStock] = useState(product?.stock || 0)
  const [name,setName] = useState(product?.name || "")
  const [description,setDescription] = useState(product?.description || "")
  const [price,setPrice] = useState(product?.price || 0)
  const [image,setImage] = useState<File | null>(null)

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()
        setStock(0)

    let imageUrl: string | null = null

    if(image){

      const fileName = `${Date.now()}-${image.name}`

      const { error: uploadError } = await supabase.storage
        .from("products")
        .upload(fileName,image)

      if(uploadError){
        console.error(uploadError)
        return
      }

      const { data: publicUrlData } = supabase.storage
        .from("products")
        .getPublicUrl(fileName)

      imageUrl = publicUrlData.publicUrl
    }

    if(product){

      await supabase
  .from("products")
  .update({
    name,
    description,
    price,
    stock,
    image: imageUrl
  })
  .eq("id", product.id)

    }else{

          await supabase
        .from("products")
        .insert({
          name,
          description,
          price,
          stock,
          image: imageUrl
        })
    }

    setName("")
    setDescription("")
    setPrice(0)
    setImage(null)

    onSuccess()
  }

  return(

    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-5"
    >
      <div>
        <label className="text-sm font-medium text-gray-700">
          Nama Produk
        </label>

        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full mt-1 border rounded-lg px-3 py-2"
          placeholder="Contoh: Ayam Goreng"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Deskripsi Produk
        </label>

        <textarea
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          className="w-full mt-1 border rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Harga Produk
        </label>

        <input
          type="number"
          value={price}
          onChange={(e)=>setPrice(Number(e.target.value))}
          className="w-full mt-1 border rounded-lg px-3 py-2"
          required
        />
      </div>

      <div>
              <label className="text-sm font-medium text-gray-700">
              Stok Produk
              </label>

              <input
              type="number"
              value={stock}
              onChange={(e)=>setStock(Number(e.target.value))}
              className="w-full mt-1 border rounded-lg px-3 py-2"
              placeholder="Contoh: 10"
              />

          </div>

      <div>

        <label className="text-sm font-medium text-gray-700 block mb-2">
          Foto Produk
        </label>

        <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-orange-500">

          <span className="text-gray-500 text-sm">
            Klik untuk upload gambar
          </span>

          <input
            type="file"
            accept="image/*"
            onChange={(e)=>{
              if(e.target.files){
                setImage(e.target.files[0])
              }
            }}
            className="hidden"
          />

        </label>

      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium"
      >
        {product ? "Update Produk" : "Tambah Produk"}
        
      </button>

    </form>
  )
}