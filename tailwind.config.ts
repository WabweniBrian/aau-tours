import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";
import formsPlugin from "@tailwindcss/forms";
import { PluginAPI } from "tailwindcss/types/config";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	screens: {
  		xs: '400px',
  		sm: '600px',
  		md: '900px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px',
  		'3xl': '1950px'
  	},
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-dm-sans)'
  			],
  			heading: [
  				'var(--font-plus-jakarta)'
  			]
  		},
  		gridTemplateColumns: {
  			'250-auto': '250px calc(100% - 250px)',
  			'auto-300': 'calc(100% - 300px) 300px',
  			'60-auto': '60px calc(100% - 60px)',
  			'minmax-uto-200': 'repeat(auto-fit, minmax(200px, 1fr))'
  		},
  		colors: {
  			brand: {
  				DEFAULT: '#006400',
  				green: {
  					'50': '#f0fdf4',
  					'100': '#dcfce7',
  					'200': '#bbf7d0',
  					'300': '#86efac',
  					'400': '#4ade80',
  					'500': '#006400',
  					'600': '#005700',
  					'700': '#004700',
  					'800': '#003800',
  					'900': '#002800',
  					'950': '#001a00'
  				},
  				orange: {
  					'50': '#fff5e6',
  					'100': '#ffe0b3',
  					'200': '#ffc180',
  					'300': '#ffa34d',
  					'400': '#ff8a26',
  					'500': '#ff7a00',
  					'600': '#cc6100',
  					'700': '#994800',
  					'800': '#662f00',
  					'900': '#4d2300',
  					'950': '#331700',
  					DEFAULT: '#ff7a00'
  				}
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    formsPlugin({
      strategy: "class",
    }),
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".text-muted": {
          opacity: "0.8",
        },
        ".transition-a": {
          transition: "all 0.3s ease-in-out",
        },
        ".box-shadow": {
          "box-shadow": ".5rem .5rem 1.5rem rgba(0,0,0,0.1)",
        },
        ".flex-center-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".flex-center-between": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        ".flex-align-center": {
          display: "flex",
          alignItems: "center",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
} satisfies Config;

export default config;
