
interface User {
    name: string;
    email: string;
}
export async function POST(request: Request) {
    const user: User = await request.json();
    console.log(user)
}