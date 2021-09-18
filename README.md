## To run:

npm run dev


find . -name "*.jsx" | while read i; do mv "$i" "${i%.jsx}.js"; done
