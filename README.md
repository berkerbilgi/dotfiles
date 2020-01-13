## Python With Homebrew

`brew install python`

`brew update && brew upgrade python`

These alias should be removed if use pyenv instead

`echo "alias python=/usr/local/bin/python3" >> ~/.zshrc`

`echo "alias pip=/usr/local/bin/pip3" >> ~/.zshrc`

## Python With Pyenv

`brew install pyenv`

`pyenv install 3.7.6`

`pyenv global 3.7.6`

`echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.zshrc`

## NeoVim

`brew install neovim`

`cd ~/.config`

`mkdir nvim`

`cd nvim`

`git clone git@github.com:berkerbilgi/neovim-config.git`

`curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim`
    
Open NeoVim and install plugins with `:PlugInstall`

`~/.config/nvim/plugged/YouCompleteMe/install.py --racer-completer --tern-completer`

## Git

Gitignore file
`git config --global core.excludesfile ~/.gitignore_global`
