DIR="./public"
if [ ! -d "$DIR" ]; then
    echo "Error: Directory $DIR does not exist."
    exit 1
fi

# Loop through files in the directory
find "$DIR" -type f | while read -r file; do
  # Check if the file name matches the pattern
  echo "$file"
  if [[ "$file" =~ ^(.*)\?.*$ ]]; then
    # Extract the first part of the file name
    new_name="${BASH_REMATCH[1]}"
    # Rename the file
    mv "$file" "$new_name"
    echo "Renamed $file to $new_name"
  fi
done