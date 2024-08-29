
import React from 'react';
import './Menu.css';

const Menu = () => {
    const menuItems = [
        { emoji: "🎓", label: "Regular Enrollment" },
        { emoji: "📚", label: "Remedial Enrollment" },
        { emoji: "👥", label: "Club Management" },
        { emoji: "✉️", label: "SMS / EMAIL" },
        { emoji: "📅", label: "Attendance" },
        { emoji: "🏥", label: "Clinic" }
    ];

    return (
        <div className="menu">
            <h3>Menu</h3>
            <div className="menu-grid">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <div className="menu-emoji">{item.emoji}</div>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
