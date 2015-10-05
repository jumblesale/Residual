#! /usr/bin/fish

set timestamp (date +%s)
set filename residual-$timestamp.tar.gz
set release_path releases/$filename

echo "creating a tarball at $release_path"

tar zcf $release_path ./ --exclude="releases/*"

echo "scp-ing the blob"

# hard coded, don't care
scp $release_path root@178.62.96.70:/tmp

echo "clearing up"

rm -f releases/*
