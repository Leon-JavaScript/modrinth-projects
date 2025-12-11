# 📦 Modrinth Projects Monorepo

A centralized repository for managing and maintaining multiple Minecraft modpacks published on [Modrinth](https://modrinth.com/).

## 🎯 Overview

This monorepo contains curated, purpose-built modpacks designed for different use cases — from developer utilities to specialized gameplay experiences. Each project is independently maintained with its own configuration and documentation while sharing common tooling and structure.

## 📚 Projects

### 🛠️ [DevClient Tools](./devclient-tools/)

A lightweight, purely client-side modpack tailored for developers and players who want enhanced tools without altering core gameplay.

**Key Features:**
- **Developer Utilities**: Component Viewer, Server Resource Pack Control, ViaFabricPlus (multi-version support)
- **Building Tools**: Axiom for advanced world editing
- **QoL Improvements**: Visual enhancements, performance optimizations
- **100% Client-Side**: No server modifications required

Perfect for plugin developers, builders, and players who want a cleaner Minecraft experience.

[Download on Modrinth →](https://modrinth.com/modpack/devclient-tools)\
[Read more →](./devclient-tools/README.md)

---

### ⚔️ [Hypixel Skyblock (Simple)](./hypixel-skyblock-simple/)

A streamlined Hypixel Skyblock modpack focused on essential features with a clean, minimal UI.

**Key Features:**
- **Core Skyblock Mods**: Skyblocker, SkyHanni, Firmament, and more
- **Clean Interface**: No cluttered HUDs or visual noise
- **Performance-Optimized**: Lightweight and efficient
- **Hypixel-Safe**: Only widely accepted utility mods included

Designed for players who want powerful Skyblock tools without overwhelming their screen.

[Download on Modrinth →](https://modrinth.com/modpack/simple-hypixel-skyblock)\
[Read more →](./hypixel-skyblock-simple/README.md)

---

## 📁 Repository Structure

Each project follows a consistent structure:

```
project-name/
├── modrinth.index.json    # Modrinth modpack manifest
├── README.md              # Project-specific documentation
└── overrides/             # Custom configurations and files
    ├── config/            # Mod configurations
    └── ...                # Other game files
```

## 🚀 Usage

1. Visit [Leon-Javascript at Modrinth](https://modrinth.com/user/Leon-JavaScript) and search for the modpack you want to use
2. Download and install via the Modrinth App or your preferred launcher
3. Launch Minecraft and enjoy!

## ⚠️ Disclaimer

All modpacks are provided as-is. While efforts are made to ensure compatibility and safety (especially for server play), users should:
- Review server rules before using any modifications
- Understand that no modifications are officially endorsed by Minecraft or server operators
- Use all mods at their own risk
