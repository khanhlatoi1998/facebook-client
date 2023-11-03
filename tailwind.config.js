/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'main': '#0861f2',
                'bg': '#f0f2f5',
                'color-1': '#65676b',
                'shadow': '#e4e6eb',
            },
            fontSize: {
                'title-lg': '21px',
                'title': '18px',
                'sm': '15px',
                'md': '16px',
                'lg': '17px',
                'xl': '18px',
                '2xl': '21px',
                'full': '30px'
            },
            width: {
                'sidebar': '360px',
            },
            maxWidth: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
                'sidebar': '360px'
            },
            minWidth: {
                'sidebar': '280px',
            },
            borderColor: {
                border: '#ffffff54'
            },
            padding: {
                header: '103px'
            },
            flexBasis: {
                'sidebar': '360px'
            },
            boxShadow: {
                'component': "0 0 5px 1px #0000001c",
                'header': "1px 0 10px 1px #0000001c",
                'around': "0 0 10px 0 rgb(0 0 0 / 12%)",
            },
        },
    },
    plugins: [],
}

