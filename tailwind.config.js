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
                'color-2': '#000000a3',
                'color-3': '#000000de',
                'bg-2': '#00000012',
                'green-1': 'green',
                'shadow': '#e4e6eb',
            },
            fontSize: {
                'small-1': '13px',
                'title-lg': '17px',
                'title-lg-2': '20px',
                'title': '18px',
                'title-2': '20px',
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
                border: '#0000001f'
            },
            padding: {
                header: '103px'
            },
            flexBasis: {
                'sidebar': '360px'
            },
            boxShadow: {
                'component': "0 1px 2px 1px #0000001c",
                'header': "1px 0 10px 1px #0000001c",
                'around': "0 0 10px 0 rgb(0 0 0 / 12%)",
            },
        },
    },
    plugins: [],
}

