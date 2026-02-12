import createClient from "@/lib/supabase/client"
import { Suspense } from "react";

async function FetchUser() {
  const supabase = createClient()
  try {
    const { data, error } = await supabase.from("profiles").select("*")
    
    if (error) throw error
    console.log("Liste of users ", JSON.stringify(data));
   return <>
   
   </>
  } catch (e) {
    console.error(e instanceof Error ? e.message : "Error occured while trying to fetch users ", e);

  }
}

function UserInterface() {
  return (
    <div>UserInterface

      <Suspense>
        <FetchUser />
      </Suspense>

    </div>
  )
}

export default UserInterface