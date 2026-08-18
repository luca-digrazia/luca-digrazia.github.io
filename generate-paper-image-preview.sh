#!/usr/bin/env bash

set -euo pipefail

mkdir -p ./img/papers

find ./papers -type f -name '*.pdf' -print0 |
while IFS= read -r -d '' pdf; do
    filename=$(basename "${pdf%.pdf}")
    output="./img/papers/$filename.png"

    # Regenerate only if missing or older than the PDF.
    if [[ ! -f "$output" || "$pdf" -nt "$output" ]]; then
        echo "Generating preview for $pdf"
        pdftocairo \
            -png \
            -f 1 \
            -l 1 \
            -singlefile \
            -r 150 \
            "$pdf" \
            "./img/papers/$filename"
    fi
done