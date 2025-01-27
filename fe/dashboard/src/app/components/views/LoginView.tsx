import React from "react";

export default function LoginView({
    email_or_username,
    password,
    setEmailOrUsername,
    setPassword,
    handleSubmit,
    error,
}: {
    email_or_username: string;
    password: string;
    setEmailOrUsername: (value: string) => void;
    setPassword: (value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    error: string | null;
}) {
    return (
        <div style={{maxWidth:"400px", margin:"0 auto", padding:"20px"}}>
            <h1>Login</h1>
            {error && <p style={{color:"red"}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email or Username:</label>
                    <input
                        type="text"
                        value={email_or_username}
                        onChange={(e) => setEmailOrUsername(e.target.value)}
                        required
                        style={{width:"100%", padding:"8px", margin:"8px 0"}}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{width:"100%", padding:"8px", margin:"8px 0"}}
                    />
                </div>
                <button type="submit" style={{padding:"10px 20px"}}>
                    Login
                </button>
            </form>
        </div>
    );
}