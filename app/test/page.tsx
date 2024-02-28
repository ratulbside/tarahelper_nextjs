export default async function TestPage() {  

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        You are logged in as {process.env.POSTGRES_URL}
        {/* <Console /> */}
      </div>
    </div>
  );
}

// function Console() {
//   return (
//     <div>{console.log(process.env.POSTGRES_URL)}</div>
//   );
// }
