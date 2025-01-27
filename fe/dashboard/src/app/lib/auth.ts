import { RegisterFormData } from "./types";

export async function registerUser(formData: RegisterFormData): Promise<unknown> {
    const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    });

    if(!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Registration failed");
    }

    return response.json
}

export async function loginUser(email_or_username: string, password: string): Promise<unknown> {
    const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email_or_username, password})
    });

    if(!response.ok) {
        const data = await response.json();
        throw new Error(data.detail || "Login failed");
    }

    return response.json
}