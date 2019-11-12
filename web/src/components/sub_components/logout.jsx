import React from 'react';

export default function LogoutButton() {
    return (
        <div class="logout">
            <button class="dropbtn"
                >Logout</button>
            <div class="logout-content" onClick={() => buttonClick("WhoLeadUs")}>
                <div to="#">Current</div>
                <div to="#">Term-1</div>
                <div to="#">Term-2</div>
                <div to="#">Term-3</div>
            </div>
        </div>
    )
}