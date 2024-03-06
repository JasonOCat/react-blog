import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "About us",
    description: "All about us",
};
export default function AboutPage() {
    return(
        <main>
            <h1>About us</h1>
            <p>Hello world</p>
        </main>
    )
};