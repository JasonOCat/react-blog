"use client"

import styles from "./Signup.module.css";
import Link from "next/link";
import {SyntheticEvent} from "react";

export default function SignupPage() {
    async function submitData(event: SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const name = String(formData.get("name"));
        const email = String(formData.get("email"));
        const data = {name, email}
        if (name && email) {
            await fetch("http://localhost:3000/api/signup"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }

        }
    }

    return (
        <div className={styles.page}>
            <form onSubmit={submitData}>
                <h1>Sign up</h1>
                <input name="name" placeholder="Name" type="text" required/>
                <input name="email" placeholder="Email" type="email" required/>
                <button type="submit">Sign up</button>
                <Link className={styles.back} href="/">
                    or Cancel
                </Link>
            </form>
        </div>
    )
};