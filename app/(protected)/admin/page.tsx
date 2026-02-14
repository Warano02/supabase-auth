import createClient from '@/lib/supabase/client'
import { Suspense } from 'react'
import UserCard from './UserCard'
async function FetchUser() {
  const supabase = createClient()
  try {
    const { data: users } = await supabase.from("profiles").select("*")
    console.log("users ", JSON.stringify(users));

    if (!users) return null
    return <div className='flex flex-wrap gap-4'>
      {
        users.map((user, idx) => <UserCard key={idx} name={user.full_name} email={user.email} profile={user.avatar_url} id={user.id} />)
      }
    </div>
  } catch (e) {
    alert("Error occured while trying to fetch users ")
  }
}

function AdminInterface() {
  return (
    <div className='w-full px-2'>
      <h1 className='text-center mb-6 text-2xl font-bold'>There is a list of all the user</h1>
      <Suspense>
        <FetchUser />
      </Suspense>
    </div>
  )
}

export default AdminInterface