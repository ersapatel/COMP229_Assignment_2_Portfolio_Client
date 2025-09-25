/**
 * Name: Swapnil Patel
 * Student Id: 301541762
 * Date: 2025-09-24
 * File: contact.jsx
 */

import './contact.css'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { api } from "../lib/api";

export default function Contact() {
    const [contact, setContactData] = useState([]);

    useEffect(() => {
        (async () => {
          try {
            const data = await api("/api/contact"); // same pattern
            setContactData(data);
          } catch (e) {
            console.error(e);
          }
        })();
      }, []);
    

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/");
    }

    return (
        <section className="contact-section">
            <h1 className="contact-title">{contact.title}</h1>

            <div className="contact-layout">
                {/* LEFT: Form */}
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <label className="field">
                    <span className="label">Name</span>
                    <input
                    className="input"
                    name="fullName"
                    type="text"
                    placeholder="Enter full name"
                    autoComplete="name"
                    required
                    />
                </label>

                <label className="field">
                    <span className="label">Phone Number</span>
                    <input
                    className="input"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    autoComplete="tel"
                    pattern="^\\+?[0-9\\s\\-()]{7,20}$"
                    title="Use digits, spaces, dashes, parentheses. Example: +1 (416) 555-1234"
                    required
                    />
                </label>

                <label className="field">
                    <span className="label">Email address</span>
                    <input
                    className="input"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    autoComplete="email"
                    required
                    />
                </label>

                <label className="field">
                    <span className="label">Message</span>
                    <textarea
                    className="input textarea"
                    name="message"
                    rows={6}
                    placeholder="Write your message…"
                    maxLength={2000}
                    required
                    />
                </label>

                <button className="btn" type="submit">Send Message</button>
                </form>

                {/* RIGHT: My details */}
                <aside className="contact-aside">
                <h2 className="aside-title">My details</h2>
                <ul className="contact-list">
                    <li className="contact-item">
                    <span className="contact-emoji" aria-hidden>📧</span>
                    <a className="contact-link">{contact.email}</a>
                    </li>
                    <li className="contact-item">
                    <span className="contact-emoji" aria-hidden>📞</span>
                    <a className="contact-link">{contact.phone}</a>
                    </li>
                    <li className="contact-item">
                    <span className="contact-emoji" aria-hidden>📍</span>
                    <span className="city">{contact.city}</span>
                    </li>
                </ul>

                <p className="aside-note">I usually reply within 24 hours.</p>
                </aside>
            </div>
        </section>

    );
}
