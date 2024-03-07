
interface User {
    name: string;
    email: string;
}
export async function POST(request: Request) {
    const user = await request.json();
    console.log(user)
}