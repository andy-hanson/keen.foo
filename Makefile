dependencies: bin/java-classes.tar bin/keen-lib.tar bin/Foo.class.bytes site/index.js site/worker.js ../keen/bin/keen.tar.xz ../keen/bin/keen.vsix

clean:
	rm -rf bin site

check: dependencies
	keen check script src

keen_deps = $(shell find ../keen -name '*.keen')

build: clean dependencies ../keen/bin/keen.tar.xz
	../keen/bin/keen run src

serve: dependencies
	( trap 'kill 0' INT; ../keen/bin/keen run src --watch & ../keen/bin/keen build script/index.keen --out site/index.js --watch & ../keen/bin/keen run ./src/serve.keen & wait )

site/index.js: script/*.keen script/*/*.keen
	mkdir -p site
	../keen/bin/keen build script/index.keen --out site/index.js

site/worker.js: script/worker.keen $(keen_deps) bin/java-classes.tar bin/keen-lib.tar
	../keen/bin/keen build script/worker.keen --out site/worker.js

bin/java-classes.tar: $(keen_deps)
	mkdir -p bin
	cp ../keen/bin/java-classes.tar bin/java-classes.tar
bin/keen-lib.tar: $(keen_deps)
	mkdir -p bin
	tar -cf bin/keen-lib.tar -C ../keen/lib .
bin/Foo.class.bytes: src/org/foo/Foo.java
	javac src/org/foo/Foo.java
	mv src/org/foo/Foo.class bin/Foo.class.bytes

../keen/bin/keen.tar.xz:
	$(MAKE) -C ../keen bin/keen.tar.xz

../keen/bin/keen.vsix:
	$(MAKE) -C ../keen bin/keen.vsix
