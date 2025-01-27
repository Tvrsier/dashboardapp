import React from "react";
import { RegisterFormData } from "@/app/lib/types";

export default function RegisterView({
    formData,
    onChange,
    handleSubmit,
    error
}: {
    formData: RegisterFormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement) => void;
    handleSubmit: (e: React.FormEvent) => void;
    error: string | null;
}) {
    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
            <h1>Register</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                        required
                        style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        required
                        style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={onChange}
                        required
                        style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                    />
                </div>
                <div>
                    <label>Birth Date:</label>
                    <input
                        type="date"
                        name="birth_date"
                        value={formData.birth_date}
                        onChange={onChange}
                        style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={onChange}
                        style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Nationality:</label>
                    <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={onChange}
                        style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                    />
                </div>
                <div>
                    <label>Primary Language:</label>
                    <input
                        type="text"
                        name="primary_language"
                        value={formData.primary_language}
                        onChange={onChange}
                        style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                    />
                </div>
                <button type="submit" style={{ padding: "10px 20px" }}>Register</button>
            </form>
        </div>
    );
}
