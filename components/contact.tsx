"use client";

import { useState } from "react";

type ContactForm = {
    name: string;
    email: string;
    message: string;
};

export default function Contact() {
    const [form, setForm] = useState<ContactForm>({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError("");
        setSuccess(false);

        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setError("Please fill in all fields.");
            return;
        }


        setLoading(true);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        console.log(data);

        if (res.ok) {
            setSuccess(true);

            setForm({
                name: "",
                email: "",
                message: "",
            });
        }

        setLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-[540px] mt-10"
        >
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="border-none p-3 bg-gray-200 hover:bg-gray-300"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="border-none p-3 bg-gray-200 hover:bg-gray-300"
            />

            <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="border-none p-3 bg-gray-200 hover:bg-gray-300"
            />

            <button
                type="submit"
                disabled={loading}
                className="bg-[#181818] text-white font-bold my-5 py-6 hover:bg-black w-[200px] transition-colors duration-300"
            >
                {loading ? "Sending..." : "Submit"}
            </button>

            {error && (
                <p className="text-red-600 font-semibold">
                    {error}
                </p>
            )}

            {success && (
                <p className="text-green-600 font-semibold">
                    Message sent successfully!
                </p>
            )}
        </form>
    );
}