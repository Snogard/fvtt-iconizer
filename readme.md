
## Definitions

Shared Internal Storage: a folder shared between worlds

## How it works

When you create or update an item the module looks for a valid icon from your local storage
> assets/shared/{itemType}/{itemName}.png  

Spaces in {itemName} are replaced with "-"  

## Features

Done: 
- support for png files 
- valid icon search inside a shared internal storage

Todo: 
- support any image file 
- valid icon search inside a shared cloud storage 
- valid icon search inside a world internal storage 
- valid icon search inside a world cloud storage 
- support for default icons 
- support for uncategorized icons 