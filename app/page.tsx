export default async function Home() {
  const response = await fetch('http://localhost:3000/api/posts', {
    cache: "no-store"
  })
  const data = await response.json()
  console.log(data)
  return <div>Home</div>
}
