from bs4 import BeautifulSoup
import os

# Load HTML file
html_file = "../index.html"
with open(html_file, 'r', encoding='utf-8') as file:
    soup = BeautifulSoup(file, 'html.parser')

# Collect referenced assets
referenced_assets = set()

for tag in soup.find_all(['img', 'script', 'link']):
    url = None
    if tag.name == 'img':
        url = tag.get('src')
    elif tag.name == 'script':
        url = tag.get('src')
    elif tag.name == 'link':
        url = tag.get('href')
    
    if url:
        referenced_assets.add(url)

# Function to delete unreferenced files
def delete_unreferenced_files(dir_path, referenced_files):
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            file_path = os.path.join(root, file)
            if file_path not in referenced_files:
                os.remove(file_path)
                print(f'Deleted: {file_path}')

# Remove unreferenced images, CSS, and JS files
delete_unreferenced_files('images', referenced_assets)
delete_unreferenced_files('css', referenced_assets)
delete_unreferenced_files('js', referenced_assets)
