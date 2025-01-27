import { useState } from "react";
import { useRouter } from "next/router";
import { registerUser } from "../lib/auth";
import { RegisterFormData } from "../lib/types";
import RegisterView from "../components/views/RegisterView";

export default function Register() {
    const [formData, setFormData] = useState<RegisterFormData>({
        name: "",
        email: "",
        password: "",
        birth_date: "",
        gender: "",
        nationality: "",
        primary_language: "",
    });
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
    };

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const data = await registerUser(formData)

            router.push("/auth/login");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch(err: any) {
            setError(err.message)
        }
    };

    return (
        <RegisterView
            formData={formData}
            onChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
        />
    );
}