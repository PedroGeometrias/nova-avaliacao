# My Neovim Config

This repo contains my personal Neovim config.

## Directory Structure
```
.config/nvim
├── init.lua
├── lua
|   ├── /plugins   
|   |   │   └── /syntax
|   |   │       ├── assembly.lua
|   |   │       ├── clangd.lua
|   |   │       ├── html.lua
|   |   │       ├── lua_ls.lua
|   |   │       ├── markdown.lua
|   |   │       ├── servers.lua
|   |   │       ├── tsserver.lua
|   |   │       ├── vim.lua
|   |   │       └── ...
|   │   ├── auto-pairs.lua
|   │   ├── cmp.lua
|   │   ├── cobol.lua
|   │   ├── colorizer.lua
|   │   ├── colorScheme.lua
|   │   ├── comment.lua
|   │   ├── harpoon.lua
|   │   ├── lsp-config.lua
|   │   ├── null-ls.lua
|   │   ├── plenary.lua
|   │   ├── telescope.lua
|   │   ├── tressiter.lua
│   |   └── ...
│   ├── /mappings
│   │   ├── customCommands.lua
│   │   ├── navigation.lua
│   │   ├── splitAndTab.lua
│   │   ├── textManipulation.lua
│   │   └── ...
│   ├── cobolTemplate.cob
│   ├── plugins.lua
│   ├── pedroConfiguracoes.lua
│   ├── keymaps.lua
│   ├── requireMappings.lua
│   └── ...
├── README.md
└── ...
```
> **Note:** It's an illustration, my configuration is always changing.

## Why 

This config is mainly focused on navigating between tabs and buffer's in a fast way, I have done some modifications
to make the UI more good looking too, like adding numbers to tabs, showing lines ans columns on the bottom and showing
what I have typed on the bottom too

## Main Changes

#### Centralized Configuration

- To streamline the lsp's setup process, I have a central file named `servers.lua`. This file serves as a hub for 
requiring all the individual language server configurations. By requiring this single file in my main lsp configuration 
file (`lsp-config.lua`), I keep the setup clean, modular, and easy to manage.

### Key Mappings

I have made a directory that to organize my keymapps in a semi logical way: 

- Custom commands: here I have keymappings that are more complex, like filling the file with a custom template or quick
switch from neovim to firefox using only the keyboard

- Navigation: better way of navigating inside and out of files for me

- Split and tab: Custom ways of navigating between tabs and splits 

- Text Manipulation: Here I have custom keys to help with quick text manipulation

##### Credits <a name="credits"></a>
- [ThePrimeagen](https://www.youtube.com/@ThePrimeagen)
- [typecraft](https://www.youtube.com/@typecraft_dev)
- [chris@machine](https://youtu.be/ctH-a-1eUME?si=K0w9GymVUW7bHsXj)
- probably other's, but I forgot their names and if they exist (sorry...)

# nova-avaliacao
