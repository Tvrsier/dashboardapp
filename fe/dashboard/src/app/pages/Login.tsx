import { useState } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../lib/auth";
import LoginView from "../components/views/LoginView";

export default function Login() {
    const [email_or_username, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const data = await loginUser(email_or_username, password);
            console.log("Login success:", data);

            router.push("/");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch(err: any) {
            setError(err.message)
        }
    };

    return (
        <LoginView
            email_or_username={email_or_username}
            password={password}
            setEmailOrUsername={setEmailOrUsername}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            error={error}
        />
    )
}