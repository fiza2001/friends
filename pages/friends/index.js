import Head from "next/head";
import Link from "next/link"


export const getStaticProps= async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return{
    props : {friends:data}
  }
}

export default function MyFriends({friends}) {
  return (
    <>
      <Head>
        <title>Friends | Friends List</title>
      </Head>
      <div className="list-div">
        {friends.map(friend=>(
          
            <Link href={"/friends/"+friend.id} key={friend.id} className="single">
            <h3>{friend.name}</h3>
            </Link>
          
        ))}
      </div>
    </>
  );
}
