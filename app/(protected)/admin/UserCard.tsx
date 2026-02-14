"use client"
import createClient from "@/lib/supabase/client"
import { Pen, Trash2 } from "lucide-react"

const UserCard = ({ email, name, id, profile }: { email: string, name: string, id: string, profile: string }) => {
  const supabase = createClient()
  const deleteUser = async () => {
    try {
      await supabase.from("profiles").delete().eq("id", id)
    } catch (e) {
      alert(e instanceof Error ? e.message : "Error occured while trying to delete a user")
    }
  }
  return (
    <div className="bg-[#22222] rounded-2xl  overflow-hidden border border-black/50 hover:-translate-y-1 transition duration-300">
      <img className="w-64 h-52 object-cover object-top" src={profile || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400"} alt="userImage2" />
      <div className="flex flex-col items-center">
        <p className="font-medium mt-3 ">{name} </p>
        <p className="text-white text-sm">{email} </p>
        <div className='flex gap-2'>
          <button className="border text-sm text-gray-500 border-gray-200 hover:bg-gray-100 transition cursor-pointer px-6 py-1 rounded-full mt-5 flex items-center justify-center gap-1">
            <Pen size={12} />
            <p className="mb-1">Edit</p>
          </button>

          <button onClick={deleteUser} className="border text-sm text-gray-500 border-gray-200 hover:bg-gray-100 transition cursor-pointer px-6 py-1 rounded-full mt-5 flex items-center justify-center gap-1">
            <Trash2 size={12} />
            <p className="mb-1">Delete</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserCard