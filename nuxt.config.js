export default {
    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "nuxtbox",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "preconnect", href: "https://fonts.gstatic.com" },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Roboto&display=swap"
            }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        "primeflex/primeflex.css",
        "@/assets/_overrides.scss",
        "@fortawesome/fontawesome-free/css/all.css"
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: ["@nuxtjs/svg"],

    primevue: {
        ripple: true,
        components: [
            "InputText",
            "Button",
            "Toast",
            "Menubar",
            "Card",
            "Divider",
            "ProgressSpinner"
        ]
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ["primevue/nuxt"],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    target: "static"
};
