module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // ── Pirulen (custom downloaded font) ──────────────
        pirulen: [
          "Pirulen",
          "Orbitron", // fallback if Pirulen fails to load
          "monospace",
        ],

        // ── Helvetica (system font stack) ─────────────────
        helvetica: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],

        // ── Combined display font (Pirulen → Helvetica) ───
        display: ["Pirulen", "Helvetica Neue", "Arial", "sans-serif"],

        // ── Safe system sans (includes Helvetica on Mac) ──
        system: [
          "-apple-system", // San Francisco on Apple
          "BlinkMacSystemFont", // Chrome on Mac
          "Helvetica Neue",
          "Helvetica",
          "Segoe UI", // Windows
          "Roboto", // Android
          "sans-serif",
        ],
      },
      colors: {
        bluee: {
          40: "rgba(50,103,217,0.40)",
          50: "rgba(50,103,217,0.50)",
          darkBlueBg: "#04061A",
          nonActiveBlue: "121233",
          nonActiveStroke: "#1A1A43",
          primary: "#3267D9",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#787898",
        },
        redd: {
          60: "rgba(226,39,24,0.60)",
          primary: "#E22718",
        },
        yelloww: "#F2B715",
        greenn: "#28BA28",
      },
      backgroundImage: {
        // ── Blue Gradients ──────────────────────────────
        "blue-main-bg":
          "linear-gradient(180deg, #060619 18.9%, #232342 86.86%)",
        "blue-header":
          "linear-gradient(90deg,rgba(50,103,217,0.00) 0%,#3267D9 49.77%,rgba(50,103,217,0.00) 100%)",
        "blue-footer":
          "linear-gradient(180deg, #1A207E -64.93%, #050618 103.33%)",
        "blue-sky":
          "linear-gradient(90deg, rgba(50,103,217,0.00) 0%, #3267D9 49.77%, rgba(50,103,217,0.00) 100%)",

        // ── Red Blue Gradients ──────────────────────────
        "rb-non-active":
          "linear-gradient(135deg, #690E0E -11.31%, #050618 27.34%, #1A207E 154.17%)",
        "rb-active": "linear-gradient(135deg, #690E0E -11.31%, #1A207E 97.44%)",

        // ── Others ─────────────────────────────────────
        "fuel-gradient":
          "linear-gradient(159deg, #E8E1E2 -0.07%, #054152 101.71%)",
        "rpm-gradient":
          "linear-gradient(159deg, #CFD9FF -0.07%, #520505 101.71%)",
      },
      boxShadow: {
        cardShadow: "2px 2px 4px 0 rgba(30,33,69,0.25)",
      },
    },
  },
  plugins: [],
};
