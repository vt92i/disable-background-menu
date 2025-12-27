.PHONY: all pack clean install uninstall

ZIP := disable-background-menu@vt92i.dev.shell-extension.zip

all: pack

pack:
	gnome-extensions pack -f .

clean:
	rm -f $(ZIP)

install: pack
	gnome-extensions install -f $(ZIP)

uninstall:
	gnome-extensions uninstall $(ZIP)
