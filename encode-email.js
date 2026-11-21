function encodeEmail(email) {
    const key = new TextEncoder().encode(
        "watsuperstar"
    );

    const bytes = new TextEncoder().encode(email);

    for (let i = 0; i < bytes.length; i++) {
        bytes[i] ^= key[i % key.length];
    }

    return Array.from(bytes)
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");
}
